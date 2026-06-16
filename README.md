# 🛍️ Shop.co

**Shop.co** is a modern full-stack e-commerce application built with **React**, **TypeScript**, **Redux Toolkit**, and **Node.js/Express**. It includes a responsive UI, product listing, reviews, and shopping cart functionality, with data served from a MongoDB database.

> ⚠️ **Note on Live Demo:** The backend is hosted on Render's free tier. **It may take 30-60 seconds to wake up** upon your first visit. Thank you for your patience!

🌐 **Live Demo:** [shop-co-frontend.onrender.com](https://shop-co-frontend.onrender.com)
📺 **Video Walkthrough:** [Link to YouTube/Loom/GIF here]

---

## 🚀 Features

### Frontend

- ⚛️ **React + TypeScript**
- 🌐 **React Router** for navigation
- 🛍️ **Shopping cart** (add, remove, update)
- 🧠 Global state management with **Redux Toolkit**
- ✅ Form handling with **React Hook Form**
- 🎠 **Swiper** for sliders/carousels
- 📱 Fully responsive design

### Backend

- ⚙️ **Express.js** server with Node.js
- 🗃️ API endpoints for products and reviews
- 🧮 **MongoDB** with Mongoose for data modeling
- 🔒 CORS and environment configuration support

---

## 🔧 Tech Stack

| Technology               | Purpose                     |
| :----------------------- | :-------------------------- |
| **React + TypeScript**   | Frontend UI                 |
| **React Router**         | Client-side routing         |
| **Redux Toolkit**        | State management            |
| **React Hook Form**      | Form control and validation |
| **Swiper**               | Carousels and sliders       |
| **Express.js / Node.js** | Backend server              |
| **MongoDB + Mongoose**   | Database                    |

---

## 📥 How to Run Locally

### 1. Clone the repository

```bash
git clone https://github.com/ZozuliaMykyta/shop.co.git
cd shop.co
```

### 2. Install dependencies

Open two terminal windows/tabs, one for the frontend and one for the backend.

**Frontend:**

```bash
cd frontend
npm install
```

**Backend:**

```bash
cd backend
npm install
```

### 3. Environment Variables

Create a `.env` file inside the `backend` directory and add your credentials:

```env
DATABASE_URL=mongodb+srv://<username>:<password>@cluster.mongodb.net/<dbname>?retryWrites=true&w=majority&appName=<clusterName>
SECRET_KEY=your_secret_key_here
PORT=3000
```

> **Note:** Note: This repository does not include production data. After connecting your own MongoDB instance, the application will start with an empty database. You can create products and reviews through the UI or import your own dataset.

### 4. Start development servers

**Run Backend** (Default port: 3000)

```bash
cd backend
npm run server
```

**Run Frontend** (Default port: 5173)

```bash
cd frontend
npm run dev
```
