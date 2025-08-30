# BitLinks

[![Render Status](https://img.shields.io/badge/deployed-on-Render-brightgreen)](https://render.com)  
[![GitHub issues](https://img.shields.io/github/issues/ayanhakeem/BitLinks)](https://github.com/ayanhakeem/BitLinks/issues)  
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

BitLinks is a URL shortening platform built with **Next.js** and **Node.js**. Users can generate short URLs and redirect to the original links. The project uses **MongoDB Atlas** as the database and **Tailwind CSS** for styling. It can be deployed on **Render**.

---

## Features

- Shorten long URLs  
- Redirect short URLs to original URLs  
- MongoDB Atlas integration  
- Modern responsive UI with Tailwind CSS  
- Backend API powered by Node.js  

---

## Tech Stack

- Frontend: Next.js + Tailwind CSS  
- Backend: Node.js / Next.js API routes  
- Database: MongoDB Atlas  
- Deployment: Render  

---

## Setup Locally

1. **Clone the repository:**
```bash
git clone https://github.com/ayanhakeem/BitLinks.git
cd BitLinks


Install dependencies:
npm install


Install Tailwind CSS (if not included):
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p



Configure tailwind.config.js:
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

Add Tailwind directives to globals.css:
@tailwind base;
@tailwind components;
@tailwind utilities;

Environment Variables:
MONGODB_URI=your_mongodb_connection_string

Run the development server:
npm run dev




Contributing

We welcome contributions!

Fork the repository

Create a feature branch:

git checkout -b feature/my-feature


Commit your changes:

git commit -m "Add my feature"


Push to your branch:

git push origin feature/my-feature


Open a Pull Request on GitHub
