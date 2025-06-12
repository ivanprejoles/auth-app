# 🔐 React Authentication App – Coding Challenge

Welcome! This is my submission for your ReactJS challenge. The project is a complete login and registration system built with **React + Vite**, integrated with an API backend (NodeJS or Laravel).

🗓️ **Deadline:** June 16, 2025  
👨‍💻 **Author:** Ivan Patrick Prejoles

---

## 📦 Features

- 🔐 Login and Registration pages
- 👤 Home page showing logged-in user data
- 🚪 Logout functionality
- 🌐 Axios + TanStack Query for API integration
- 🎨 Tailwind CSS for styling
- 🧠 Zustand for global auth state
- 📁 Environment-based API URL with `.env`

---

## 🧰 Tech Stack

| Tool/Library          | Purpose                 |
| --------------------- | ----------------------- |
| React + Vite          | Frontend framework      |
| Tailwind CSS          | UI styling              |
| React Router DOM      | Routing                 |
| Axios                 | HTTP requests           |
| TanStack Query        | Data fetching & caching |

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/react-auth-challenge.git
cd react-auth-challenge
```

### 2. Install Dependencies

```bash
npm install
```

---

## ⚙️ Environment Variables

### 1. Create `.env` File

Create a `.env` file in the project root:

```env
# .env
VITE_API_URL=http://localhost:3000/api
```

Replace `http://localhost:3000/api` with your actual API URL.

> 📌 This is used by Axios in the frontend to send requests to your backend.

---

## 🧪 Running the App

Start the development server with:

```bash
npm run dev
```

Then open your browser at:

```
http://localhost:5173
```

---

## 🔐 Backend API Requirements

The backend must support the following endpoints:

| Method | Endpoint  | Description                                 |
| ------ | --------- | ------------------------------------------- |
| POST   | /register | Register a new user (name, email, password) |
| POST   | /login    | Authenticate user credentials               |
| GET    | /profile  | Get logged-in user data (via token)         |

> Ensure your API returns JSON and supports CORS headers.

---

## 📜 Commands Reference

| Command           | Description                      |
| ----------------- | -------------------------------- |
| `npm run dev`     | Start Vite dev server            |
| `npm run build`   | Create production build          |
| `npm run preview` | Preview production build locally |
| `npm run lint`    | Run ESLint on codebase           |

---

## 📁 `.env` Example File

If you'd like to track an example file for devs, you can also create a `.env.example` like this:

```env
# .env.example
VITE_API_URL=http://localhost:3000/api
```

---
