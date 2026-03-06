# User Management API (Node.js & TypeScript)

A robust Backend RESTful API built with **Node.js**, **TypeScript**, and **MongoDB Atlas**. This project demonstrates the implementation of CRUD operations with strict type safety and error handling.

## 🚀 Features
* **Full CRUD**: Create, Read, Update, and Delete users.
* **TypeScript**: Strongly typed request/response handling.
* **MongoDB Atlas**: Cloud database integration using Mongoose.
* **Validation**: 
    * Validates MongoDB ObjectIDs (Returns 400 for invalid formats).
    * Handles duplicate email entries (Returns 400).
    * Standardized error responses (404 for Not Found, 500 for Server Errors).

## 🛠️ Tech Stack
* **Runtime**: Node.js
* **Language**: TypeScript (ES Modules)
* **Framework**: Express.js
* **Database**: MongoDB Atlas (Mongoose ODM)
* **Development**: Nodemon, ts-node

## 📁 Project Structure
```text
dist/               # Compiled JavaScript files
src/
├── controllers/    # Business logic
├── models/         # Database schemas
├── routes/         # API endpoints
└── app.ts          # Application entry point
```

## ⚙️ Installation & Setup
Clone the repository.
Install dependencies: `npm install`

Create a `.env` file based on `.env.example` and add your MONGO_URI.

Run in development mode: `npm run dev`

## 📡 API Endpoints Documentation

| Method | Endpoint | Functionality | Success Status | Request Body (JSON) |
| :--- | :--- | :--- | :---: | :--- |
| **POST** | `/api/user` | Create a new user | `201 Created` | `{"name": "...", "email": "...", "password": "..."}` |
| **GET** | `/api/user/:id` | Get user details by ID | `200 OK` | *None* |
| **GET** | `/api/users` | Get all users list | `200 OK` | *None* |
| **PUT** | `/api/update/user/:id` | Update existing user data | `200 OK` | `{"name": "...", "email": "..."}` |
| **DELETE** | `/api/delete/user/:id` | Remove user from database | `200 OK` | *None* |

Developed by [Shahd Sameh](https://github.com/SH-AHD) - Computer science student @ Ain Shams University.
