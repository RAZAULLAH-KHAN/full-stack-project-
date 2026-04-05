import fs from "fs";
import path from "path";

const files = [
  { html: "Namal_Home_Desktop.html", target: "src/app/page.tsx", route: "/" },
  { html: "Namal_Academics_Desktop.html", target: "src/app/academics/page.tsx", route: "/academics" },
  { html: "Namal_Admissions_Desktop.html", target: "src/app/admissions/page.tsx", route: "/admissions" },
  { html: "Namal_Student_Life_Desktop.html", target: "src/app/student-life/page.tsx", route: "/student-life" },
  { html: "Namal_Faculty.html", target: "src/app/faculty/page.tsx", route: "/faculty" },
  { html: "Namal_Research.html", target: "src/app/research/page.tsx", route: "/research" },
  { html: "Namal_Portal.html", target: "src/app/portal/page.tsx", route: "/portal" }
];

for (const { html, target } of files) {
  const content = fs.readFileSync(path.join("pages_html", html), "utf-8");
  
  const bodyMatch = content.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  if (!bodyMatch) continue;
  let bodyContent = bodyMatch[1];

  bodyContent = bodyContent.replace(/\bclass=/g, "className=");
  bodyContent = bodyContent.replace(/\bfor=/g, "htmlFor=");

  bodyContent = bodyContent.replace(/<img(.*?)(\/?)>/g, (all, p1, p2) => {
    if (p2 === '/') return all;
    return `<img${p1}/>`;
  });
  bodyContent = bodyContent.replace(/<input(.*?)(\/?)>/g, (all, p1, p2) => {
    if (p2 === '/') return all;
    return `<input${p1}/>`;
  });
  bodyContent = bodyContent.replace(/<br(.*?)(\/?)>/g, (all, p1, p2) => {
    if (p2 === '/') return all;
    return `<br${p1}/>`;
  });
  bodyContent = bodyContent.replace(/<hr(.*?)(\/?)>/g, (all, p1, p2) => {
    if (p2 === '/') return all;
    return `<hr${p1}/>`;
  });

  bodyContent = bodyContent.replace(/<!--([\s\S]*?)-->/g, "{/*$1*/}");
  
  // replace href="#" to avoid next/link warnings when converting to Link later, right now standard <a>
  
  bodyContent = bodyContent.replace(/xmlns:xlink=/g, "xmlnsXlink=");
  bodyContent = bodyContent.replace(/stroke-width=/g, "strokeWidth=");
  bodyContent = bodyContent.replace(/stroke-linecap=/g, "strokeLinecap=");
  bodyContent = bodyContent.replace(/stroke-linejoin=/g, "strokeLinejoin=");
  bodyContent = bodyContent.replace(/fill-rule=/g, "fillRule=");
  bodyContent = bodyContent.replace(/clip-rule=/g, "clipRule=");
  
  // replace href="#" to avoid next/link warnings when converting to Link later, right now standard <a>
  
  const fileOutput = `export default function Page() {\n  return (\n    <>\n${bodyContent}\n    </>\n  );\n}\n`;
  
  const targetDir = path.dirname(target);
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }
  
  fs.writeFileSync(target, fileOutput, "utf-8");
}
console.log("Done");
