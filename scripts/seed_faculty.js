const mongoose = require("mongoose");
const path = require("path");
const fs = require("fs");

// Read .env.local manually
const envPath = path.join(__dirname, "..", ".env.local");
let MONGODB_URI = process.env.MONGODB_URI;

if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, "utf-8");
  const uriMatch = envContent.match(/^MONGODB_URI=(.*)$/m);
  if (uriMatch) {
    MONGODB_URI = uriMatch[1].trim();
  }
}

if (!MONGODB_URI) {
  console.error("Please define the MONGODB_URI environment variable inside .env.local");
  process.exit(1);
}

const facultyData = [
  {
    name: "DR. SAMI UD DIN",
    title: "ASSOCIATE PROFESSOR / HOD",
    department: "Electrical Engineering",
    bio: "PhD (CUST, Pakistan)",
    email: "sami.din@namal.edu.pk",
    expertise: ["Control Systems", "Power Electronics"],
    publications: []
  },
  {
    name: "DR. SAJJAD UR REHMAN",
    title: "PROFESSOR",
    department: "Electrical Engineering",
    bio: "PhD (KSU, Saudi Arabia)",
    email: "sajjad.rehman@namal.edu.pk",
    expertise: ["Signal Processing"],
    publications: []
  },
  {
    name: "DR. TASSADAQ HUSSAIN",
    title: "PROFESSOR",
    department: "Electrical Engineering",
    bio: "PhD (BarcelonaTech, Spain)",
    email: "tassadaq.hussain@namal.edu.pk",
    expertise: ["Computer Networks", "Cyber Security"],
    publications: []
  },
  {
    name: "DR. WAHAB ALI SHAH",
    title: "ASSISTANT PROFESSOR",
    department: "Electrical Engineering",
    bio: "On Leave",
    email: "wahab.shah@namal.edu.pk",
    expertise: ["Renewable Energy"],
    publications: []
  },
  {
    name: "DR. MALIK M ALI SHAHID",
    title: "ASSOCIATE PROFESSOR / HOD",
    department: "Computer Science",
    bio: "PhD (UTM, Malaysia)",
    email: "malik.ali@namal.edu.pk",
    expertise: ["Software Engineering", "AI"],
    publications: []
  },
  {
    name: "DR. KHAWAR KHURSHID",
    title: "PROFESSOR",
    department: "Computer Science",
    bio: "PhD (MSU, USA)",
    email: "khawar.khurshid@namal.edu.pk",
    expertise: ["Data Science", "Machine Learning"],
    publications: []
  },
  {
    name: "DR. MUDASSAR RAZA",
    title: "PROFESSOR",
    department: "Computer Science",
    bio: "PhD (USTC, China)",
    email: "mudassar.raza@namal.edu.pk",
    expertise: ["Computer Vision"],
    publications: []
  },
  {
    name: "DR. SHAFIQ UR REHMAN KHAN",
    title: "ASSISTANT PROFESSOR",
    department: "Computer Science",
    bio: "PhD (CUST, Pakistan)",
    email: "shafiq.khan@namal.edu.pk",
    expertise: ["Cloud Computing"],
    publications: []
  },
  {
    name: "DR. MUZAMIL AHMED",
    title: "ASSISTANT PROFESSOR",
    department: "Computer Science",
    bio: "PhD (COMSATS, Pakistan)",
    email: "muzamil.ahmed@namal.edu.pk",
    expertise: ["Deep Learning", "NLP"],
    publications: []
  },
  {
    name: "MR. ADNAN BASHIR",
    title: "LECTURER",
    department: "Computer Science",
    bio: "MS (UOL, Pakistan)",
    email: "adnan.bashir@namal.edu.pk",
    expertise: ["Web Development", "Databases"],
    publications: []
  },
  {
    name: "MR. SHAHZAD ARIF",
    title: "LECTURER",
    department: "Computer Science",
    bio: "MS (UET Taxila, Pakistan)",
    email: "shahzad.arif@namal.edu.pk",
    expertise: ["Operating Systems"],
    publications: []
  },
  {
    name: "MR. ABDUL RAFAY",
    title: "LECTURER",
    department: "Computer Science",
    bio: "MS (FAST, Pakistan)",
    email: "abdul.rafay@namal.edu.pk",
    expertise: ["Cyber Security", "Networking"],
    publications: []
  },
  {
    name: "DR. MUHAMMAD AHMED",
    title: "ASSOCIATE PROFESSOR / HOD",
    department: "Business Studies",
    bio: "PhD (IIUM, Malaysia)",
    email: "muhammad.ahmed@namal.edu.pk",
    expertise: ["Strategic Management"],
    publications: []
  },
  {
    name: "DR. MUHAMMAD ASHRAF",
    title: "PROFESSOR",
    department: "Business Studies",
    bio: "PhD (KSU, USA)",
    email: "muhammad.ashraf@namal.edu.pk",
    expertise: ["Finance", "Accounting"],
    publications: []
  },
  {
    name: "DR. UMAR FAROOQ",
    title: "ASSOCIATE PROFESSOR",
    department: "Business Studies",
    bio: "PhD (COMSATS, Pakistan)",
    email: "umar.farooq@namal.edu.pk",
    expertise: ["Marketing"],
    publications: []
  },
  {
    name: "DR. HASHIM ZAMEER",
    title: "ASSOCIATE PROFESSOR",
    department: "Business Studies",
    bio: "PhD (NUAA, China)",
    email: "hashim.zameer@namal.edu.pk",
    expertise: ["Supply Chain Management"],
    publications: []
  },
  {
    name: "DR. RASHID MAHMOOD",
    title: "PROFESSOR / HOD",
    department: "Mathematics",
    bio: "PhD (TU Dortmund, Germany)",
    email: "rashid.mahmood@namal.edu.pk",
    expertise: ["Applied Mathematics"],
    publications: []
  },
  {
    name: "DR. MUHAMMAD RAFIQ",
    title: "PROFESSOR",
    department: "Mathematics",
    bio: "PhD (UET, Pakistan)",
    email: "muhammad.rafiq@namal.edu.pk",
    expertise: ["Computational Fluid Dynamics"],
    publications: []
  },
  {
    name: "DR. ISRAR ALI KHAN",
    title: "ASSOCIATE PROFESSOR",
    department: "Mathematics",
    bio: "PhD (SU, China)",
    email: "israr.khan@namal.edu.pk",
    expertise: ["Mathematical Modeling"],
    publications: []
  },
  {
    name: "DR. SAMI ULLAH KHAN",
    title: "ASSOCIATE PROFESSOR",
    department: "Mathematics",
    bio: "PhD (IIUI, Pakistan)",
    email: "samiullah.khan@namal.edu.pk",
    expertise: ["Pure Mathematics"],
    publications: []
  }
];

const FacultySchema = new mongoose.Schema(
  {
    name: String,
    title: String,
    department: String,
    expertise: [String],
    publications: [
      {
        title: String,
        url: String,
      },
    ],
    imageUrl: {
      type: String,
      default: "/images/default-faculty.png",
    },
    bio: String,
    email: { type: String, unique: true },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

// We need to use models.Faculty if it exists, or compile it
const Faculty = mongoose.models.Faculty || mongoose.model("Faculty", FacultySchema);

async function seed() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("Connected to MongoDB.");

    // Clear existing so we don't have duplicates, or we just insert if email doesn't exist
    let inserted = 0;
    for (const member of facultyData) {
      const exists = await Faculty.findOne({ email: member.email });
      if (!exists) {
        await Faculty.create(member);
        inserted++;
      }
    }
    console.log(`Inserted ${inserted} new faculty members.`);
  } catch (error) {
    console.error("Error seeding faculty:", error);
  } finally {
    await mongoose.disconnect();
    console.log("Disconnected from MongoDB.");
  }
}

seed();
