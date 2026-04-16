# Namal University Website

A modern, responsive university website built with Next.js 15, React 19, and Tailwind CSS. The project incorporates dynamic routing, client-side interactions, and an integrated MongoDB database with Auth.js (NextAuth) for portal security.

## 🚀 Features & Implementation Status

### ✅ Functioning (Completed)
- **Dynamic Homepage**: Quick access to university highlights and navigation, featuring a modern UI with high-quality aesthetics.
- **Academics & Research**: Detailed info on departments, programs, and institutional research.
- **Faculty Directory**: Seamlessly fetches faculty members from MongoDB and displays them in a dynamic, responsive grid layout.
- **Admissions Process**: Implemented a responsive application and admission workflow connected to MongoDB for securely capturing prospective student details.
- **Authentication (Student Portal)**: Secured the student portal and API endpoints using Auth.js (NextAuth).
- **Database Integration**: Fully connected to MongoDB via Mongoose, with distinct schemas (`Faculty`, `Application`, `Announcement`, and `User`).
- **Loading & Error Handling**: Incorporated Next.js robust error boundaries (`error.tsx`) and UI loading skeletons (`loading.tsx`) to improve UX during data fetching.
- **Responsive Design**: Optimized layout for Mobile, Tablet, and Desktop using Tailwind CSS 4.

### 🚧 In Progress
- Extracting dynamic Announcements to showcase them efficiently inside the portal dashboard.
- Full real-time validation and localized error reporting on complex multi-step forms.
- Expanding comprehensive student profiles within the portal.

### 🔮 Future Work
- **Admin Dashboard**: Build an internal CMS panel so authorized admins can upload new faculty metadata, manage announcements, and review applications securely.
- **Email Notifications**: Integration with services (e.g., Nodemailer/Resend) to deliver automatic application updates and password resets.
- **Performance Optimizations**: Leverage Next.js advanced data caching (e.g., unstable_cache and revalidation) to minimize MongoDB read loads for read-heavy routes (like the Faculty roster).
- **SEO Enhancements**: Implement robust meta tags, structured data, and advanced SEO techniques across all public-facing pages.

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Library**: React 19
- **Styling**: Tailwind CSS 4
- **Language**: TypeScript
- **Database**: MongoDB (Mongoose ORM)
- **Authentication**: Auth.js (NextAuth)

## 🏁 Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn
- MongoDB connection string (set in `.env.local` as `MONGODB_URI`)
- NextAuth secret (set in `.env.local` as `AUTH_SECRET`)

### Installation

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/RAZAULLAH-KHAN/full-stack-project-.git
    cd full-stack-project-
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Run the development server**:
    ```bash
    npm run dev
    ```

4.  **Open the app**:
    Visit [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Architecture Updates

- **Centralized Layout**: The application leverages Next.js App Router `layout.tsx` to handle global components like the `Header` and `Footer`, significantly reducing code duplication across pages.
- **Robust Data Handling**: API routes (`/api/...`) enforce clean separation of backend logic and frontend display.
- **Client-Side Navigation**: Internal links utilize proper Next.js `<Link>` components to provide instantaneous transitions without full-page reloads.
