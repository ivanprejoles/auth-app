# 🔐 Fullstack Auth App (MERN + Vite)

This is a full-stack authentication application built with **React + Vite** on the frontend, and **Node.js + Express + MongoDB** on the backend. It features user **registration**, **login**, **authentication with JWT**, and **protected routes**.

🧑‍💻 Author: Ivan Patrick Prejoles  
📁 Stack: React, Node.js, Express, MongoDB  
🗓️ Submission Deadline: June 16, 2025

---

## 📂 Project Structure

```
auth-app/
├── client/      # React + Vite frontend
└── server/      # Express.js backend
```

---

## 🚀 Getting Started

### 📥 1. Clone the Repository

```bash
git clone https://github.com/ivanprejoles/auth-app.git
cd auth-app
```

---

## 🖥️ Running the Application

### 🧩 A. Client (React + Vite)

```bash
cd client
npm install
cp .env.example .env   # Then update the VITE_API_URL in .env
npm run dev
```

> The client runs on `http://localhost:5173` by default.

#### ✅ Example `.env` for Client

Create a `.env` file inside the `client/` directory:

```env
VITE_API_URL=http://localhost:3000
```

---

### ⚙️ B. Server (Node + Express)

```bash
cd server
npm install
cp .env.example .env   # Then update the variables as needed
npm run dev
```

> The server runs on `http://localhost:3000` by default.

#### ✅ Example `.env` for Server

Create a `.env` file inside the `server/` directory:

```env
PORT=3000
MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/test
JWT_SECRET=myjson-web-token
```

> Replace `<username>` and `<password>` with your actual MongoDB credentials (MongoDB Atlas recommended).

---

## 🧪 Features

- ✅ User registration with hashed password (bcrypt)
- ✅ Login with JWT authentication
- ✅ Protected API routes using token
- ✅ Frontend auth state managed with Zustand
- ✅ Axios + TanStack Query for frontend API interaction
- ✅ Tailwind CSS styling

---

## 📦 Technologies

| Stack Part | Tech/Lib |
|------------|----------|
| Frontend   | React, Vite, Tailwind CSS, React Router, Axios, React Hook Form, TanStack Query |
| Backend    | Node.js, Express.js, MongoDB, Mongoose, JWT, bcrypt, dotenv |

---

## 🛠️ Scripts

### Client

| Command         | Description            |
|-----------------|------------------------|
| `npm run dev`   | Start dev server       |
| `npm run build` | Build for production   |

### Server

| Command         | Description            |
|-----------------|------------------------|
| `npm run dev`   | Start backend w/ nodemon |

---

## 📄 Important Note

Make sure to:
- Create `.env` files in both `client/` and `server/`
- Install all required dependencies using `npm install` in each folder
- Use the `package.json` files to verify required packages

---

## 📬 Submission

Once you've tested and confirmed it works on your local machine:

1. Push the full repo to your GitHub (public).
2. Submit the link as requested in the challenge instructions.

---

## 🙋‍♂️ Contact

For any questions or clarifications, feel free to open an issue or contact the repository author.

---
