# 🛍️ Shop.co

**Shop.co** is a modern full-stack e-commerce application built with **React**, **TypeScript**, **Redux Toolkit**, and **Node.js/Express**. It includes a responsive UI, product listing, reviews, and shopping cart functionality, with data served from a MongoDB database.

---

## 🚀 Features

### Frontend
- ⚛️ React + TypeScript
- 🌐 React Router for navigation
- 🛍️ Shopping cart (add, remove, update)
- 🧠 Global state management with Redux Toolkit
- ✅ Form handling with React Hook Form
- 🎠 Swiper for sliders/carousels
- 📱 Fully responsive design

### Backend
- ⚙️ Express.js server with Node.js
- 🗃️ API endpoints for products and reviews
- 🧮 MongoDB with Mongoose for data modeling
- 🔒 CORS and environment configuration support

---

## 🔧 Tech Stack

| Technology         | Purpose                  |
|--------------------|--------------------------|
| React + TypeScript | Frontend UI              |
| React Router       | Client-side routing      |
| Redux Toolkit      | State management         |
| React Hook Form    | Form control             |
| Swiper             | Carousels and sliders    |
| Express.js         | Backend server           |
| MongoDB + Mongoose | Database                 |

---

## 📥 How to Copy and Run This Project

### 1. Clone the repository
```bash
git clone https://github.com/ZozuliaMykyta/shop.co.git
cd shop.co
```

### 2. Install dependencies

#### Frontend
```bash
cd frontend
npm install
```

#### backend
```bash
cd backend
npm install
```

### 🔄 Configure Nodemon for TypeScript

To run the server with TypeScript using `nodemon`, create a `nodemon.json` file inside the `server/` directory with the following content:

```json
{
  "watch": ["."],
  "ext": "ts",
  "ignore": ["node_modules"],
  "exec": "ts-node --project tsconfig.json server.ts"
}
```
## Environment Variables

Create a `.env` file in the /backend and add the following variables:

```env
DATABASE_URL=mongodb+srv://<username>:<password>@cluster.mongodb.net/<dbname>?retryWrites=true&w=majority&appName=<clusterName>
SECRET_KEY=your_secret_key_here
```

### 5. Start development servers

#### frontend (default port: 5173)
```bash
npm run dev
```

#### backend (default port: 3000)
```bash
cd backend
npm run server
```
