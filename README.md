# Namal University Website

A modern, responsive university website built with Next.js 15, React 19, and Tailwind CSS. This project includes academic pages, admission portals, research sections, and a student life dashboard.

## 🚀 Features

- **Dynamic Homepage**: Quick access to university highlights and navigation.
- **Academics**: Detailed info on departments and programs.
- **Admissions**: streamlined process for prospective students.
- **Student Portal**: Dashboard and resources for current students.
- **Research**: Showcasing institutional research and faculty expertise.
- **Responsive Design**: Optimized for all devices (Mobile, Tablet, Desktop).

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Library**: React 19
- **Styling**: Tailwind CSS 4
- **Language**: TypeScript

## 🏁 Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn

### Installation

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/RAZAULLAH-KHAN/Namal-website.git
    cd Namal-website
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

- **Centralized Layout**: The application leverages Next.js 15 App Router `layout.tsx` to handle global components like the `Header` and `Footer`, significantly reducing code duplication across pages.
- **Client-Side Routing**: All internal application links have been upgraded to functional `Link` components from `next/link` to provide instantaneous client-side navigation without full-page reloads.
