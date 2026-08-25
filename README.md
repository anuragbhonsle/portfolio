<a href="https://git.io/typing-svg">
  <img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&size=40&duration=3000&pause=2000&color=A855F7&width=700&height=60&lines=Anurag's+Portfolio" />
</a>

A sleek, fast, and fully responsive personal portfolio website showcasing projects, skills, and experience, built with **React**, **TypeScript**, **Vite**, and **Tailwind CSS**, with a **Node.js + Express** backend and **MongoDB** powering the contact form.

## ***Live Site:*** [anuragbhonsle.vercel.app](https://anuragbhonsle.vercel.app/)

![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=flat-square&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel&logoColor=white)
![Render](https://img.shields.io/badge/Render-FFFFFF?style=flat-square&logo=render&logoColor=black)

---

## Features

- **Blazing Fast** — Powered by Vite for fast development and optimized production builds
- **Modern UI** — Built with Tailwind CSS, shadcn/ui, and Radix UI primitives
- **Dark Mode** — Seamless light/dark theme switching
- **Smooth Animations** — Polished transitions and micro-interactions with Framer Motion
- **Fully Responsive** — Optimized for mobile, tablet, and desktop
- **Smooth Navigation** — Section-based navigation with React Scroll
- **Interactive Project Carousel** — Showcases projects using Embla Carousel
- **Data Visualizations** — Skills and statistics displayed with Recharts
- **Rich Content** — Markdown rendering with GitHub-Flavored Markdown support and syntax highlighting
- **Working Contact Form** — Form validation with React Hook Form + Zod, submitted through Axios to an Express/Node.js backend and stored in MongoDB
- **Toast Notifications** — User feedback and status updates with Sonner
  
---

## Tech Stack

| Layer | Technologies |
|---|---|
| **Frontend** | React, TypeScript, Vite |
| **Styling / UI** | Tailwind CSS, shadcn/ui, Radix UI, Lucide Icons |
| **Animation** | Framer Motion |
| **Data / Content** | Recharts, React Markdown, Remark GFM, Rehype Highlight |
| **Forms / Validation** | React Hook Form, Zod, Axios |
| **Backend** | Node.js, Express, TypeScript |
| **Database** | MongoDB |
| **Tooling** | ESLint, PostCSS, Autoprefixer |
| **Deployment** | Vercel (Frontend), Render (Backend) |

---

## Project Structure

```
portfolio/
├── backend/          # Node.js backend (contact form / API)
├── public/           # Static assets
├── src/              # React application source
├── index.html
├── vite.config.ts
├── tailwind.config.ts
├── components.json   # shadcn/ui config
└── vercel.json        # Vercel deployment config
```

---

## Getting Started
 
### Prerequisites
 
- Node.js 18+
- npm
### Installation
 
Clone the repository:
 
```bash
git clone https://github.com/anuragbhonsle/portfolio.git
cd portfolio
```
 
Install the frontend dependencies:
 
```bash
npm install
```
 
### Environment Variables
 
Create a `.env` file in the project root for frontend environment variables:
 
```env
VITE_RENDER_URL=your_backend_url
```
 
Create a `.env` file inside the `backend/` directory for backend environment variables:
 
```env
MONGODB_URI=your_mongodb_connection_string
```
 
> Never commit `.env` files or expose sensitive credentials.
 
### Run the Frontend
 
Start the Vite development server:
 
```bash
npm run dev
```
 
The frontend will be available at:
 
```
http://localhost:5173
```
 
### Run the Backend
 
Open a separate terminal:
 
```bash
cd backend
npm install
npm start
```
 
The backend will run on the configured port, typically:
 
```
http://localhost:8000
```
 
### Build for Production
 
```bash
npm run build
```
 
Preview the production build locally:
 
```bash
npm run preview
```
 
### Other Scripts
 
```bash
npm run build:dev
npm run lint
```

---

## Deployment

This project uses **Vercel** for the frontend and **Render** for the backend.

### Frontend — Vercel

1. Push the repository to GitHub.
2. Import the repository into [Vercel](https://vercel.com/).
3. Configure the required environment variables.
4. Deploy.

### Backend — Render

1. Create a new Web Service on [Render](https://render.com/).
2. Connect the GitHub repository.
3. Set the **Root Directory** to `backend`.
4. Set the **Build Command** to `npm install`.
5. Set the **Start Command** to `npm start`.
6. Add the required environment variables.
7. Deploy.

---

## Contributing

This is a personal portfolio, but suggestions and issues are welcome, feel free to open an [issue](https://github.com/anuragbhonsle/portfolio/issues) or submit a pull request.

---

## Contact

***Portfolio***: [anuragbhonsle.vercel.app](https://anuragbhonsle.vercel.app/)
***GitHub***: [@anuragbhonsle](https://github.com/anuragbhonsle)

---

⭐ If you like this project, consider giving it a star on GitHub.