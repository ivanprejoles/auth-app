# 🌐 Node.js API Server – React Auth Challenge

This is the backend API built with **Node.js**, **Express**, and **MongoDB** for the React Authentication Challenge. It supports registration, login, and user profile retrieval via JWT authentication.

🛠️ Built by: **Ivan Patrick Prejoles**  
📅 Challenge Due: June 16, 2025  

---

## 📦 Features

- 🔐 User Registration & Login
- 🧾 JWT-based Authentication
- 🍪 Cookie-based session handling
- 🔐 Password hashing with `bcryptjs`
- 📡 MongoDB connection via Mongoose
- 🌍 CORS-enabled for frontend requests

---

## ⚙️ Tech Stack

| Tech              | Purpose                  |
|------------------|--------------------------|
| Node.js + Express| Backend API              |
| MongoDB + Mongoose| Database & modeling     |
| JWT              | Authentication           |
| BcryptJS         | Password hashing         |
| Dotenv           | Environment variables    |
| CORS             | Cross-origin requests    |

---

## 🚀 Getting Started


### 1. Change Location

```bash
cd server
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Create `.env` File

Create a `.env` file in the project root:

```env
PORT=3000
MONGODB_URI="your-mongodb-connection-string"
JWT_SECRET="your-secret-key"
```

---

## 📂 Project Structure

```
src/
├── models/
│   └── User.js        # Mongoose user schema
├── routes/
│   └── auth.js        # Auth routes (login, register, profile)
├── middleware/
│   └── authMiddleware.js # JWT middleware
└── server.js          # Entry point
```

---

## 🧪 API Endpoints

| Method | Endpoint     | Description                    |
|--------|--------------|--------------------------------|
| POST   | `/api/register` | Register a new user          |
| POST   | `/api/login`    | Login & receive JWT cookie   |
| GET    | `/api/profile`       | Get current user (protected) |

> 🔐 `GET /api/profile` requires an authenticated token sent via HTTP-only cookie.

---

## 🍪 Authentication Notes

- JWT is stored in a **secure, HTTP-only cookie**
- Protected routes check the token via middleware
- Passwords are hashed before storing

---

## 📜 Commands Reference

| Command        | Description               |
|----------------|---------------------------|
| `npm run dev`  | Start server with nodemon |
| `npm start`    | Start server normally     |

---

## 🔗 Cross-Origin Setup

If your frontend is hosted on a different origin (e.g., Vite on port `5173`), make sure CORS is configured like so:

```js
import cors from "cors";
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
```

---

## ✅ Submission Checklist

- [x] Register & Login APIs
- [x] JWT-authenticated `GET /profile`
- [x] MongoDB integration
- [x] CORS & Cookie support
- [x] `.env` file usage
- [x] Working dev scripts

---

## 🙏 Thank You!

Thanks again for reviewing my submission. Feel free to reach out if you need help running or testing the backend. I'm always happy to assist!

**– Ivan Patrick Prejoles**
