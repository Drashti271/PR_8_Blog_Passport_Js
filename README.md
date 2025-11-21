# 📘 PR_8_BLOG_PASSPORT-JS 

This documentation provides an overview of the folder structure and purpose of each component in the **Blog Project with Passport.js Authentication**.

---

## 📁 1. Project Structure Overview

```
PR_8_BLOG_PASSPORT-JS
├── configs/
│   ├── db.js
│   └── dotenv.js
├── controllers/
│   ├── admin.controller.js
│   └── blog.controller.js
├── middlewares/
├── models/
├── node_modules/
├── public/
├── routers/
│   ├── admin.route.js
│   ├── blog.route.js
│   └── index.js
├── uploads/
├── views/
├── .env
├── .gitignore
├── bun.lock
├── index.js
├── package.json
└── package-lock.json
```

---

## 📂 2. Detailed Folder & File Explanation

### **1. configs/**

* **db.js** → MongoDB or database connection configuration.
* **dotenv.js** → Loads environment variables from `.env` file.

### **2. controllers/**

* **admin.controller.js** → Handles admin-related logic like signup, login, dashboard, etc.
* **blog.controller.js** → Handles blog CRUD operations.

### **3. middlewares/**

Used for Passport authentication, authorization, session checks, etc.

### **4. models/**

Contains Mongoose schemas like `User`, `Blog`, etc.

### **5. public/**

Contains static files (CSS, JS, images).

### **6. routers/**

* **admin.route.js** → Admin routes (signup, login, logout).
* **blog.route.js** → Blog-related routes (create, update, delete, view).
* **index.js** → Main combined router export.

### **7. uploads/**

Stores uploaded images/files.

### **8. views/**

EJS Templates for frontend rendering.

### **9. index.js**

Main server file. Loads Express, connects DB, initializes Passport, registers routes, etc.

---

## 🚀 3. How the Project Works (Flow Diagram Style)

1. **User visits website** → Routes handle request.
2. **Passport.js** checks authentication.
3. **Controllers** process logic.
4. **Models** interact with database.
5. **Views (EJS)** display output to user.

---

## 🔐 4. Authentication System (Passport.js)

* Local Strategy is used for email/password login.
* Sessions are stored via express-session.
* Middleware protects admin dashboard & blog routes.

---

## ✔ 5. Key Features

* Admin signup/login
* Blog create, edit, delete
* Image uploads
* Authentication using Passport.js
* MVC Structure

---

---

## 📄 6. Installation & Run Guide

### **Step 1: Install Dependencies**

```
npm install
```

### **Step 2: Configure Environment Variables**

Create a `.env` file:

```
PORT=5000
MONGO_URL=your_mongodb_url
SESSION_SECRET=your_secret
```

### **Step 3: Run the Project**

```
npm start
```

Server will start at:

```
http://localhost:5000
```

---

If you want, I can also add:
✅ Code examples
✅ Setup guide (installation, run commands)
✅ API documentation

