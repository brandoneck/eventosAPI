# 🎉 Events API

A simple REST API for managing events, built with Node.js and Express.
This project includes authentication using JWT and is designed with scalability in mind, with future integration of MongoDB and Mongoose.

---

## 🚀 Tech Stack

* Node.js
* Express.js
* JSON Web Tokens (JWT)
* MongoDB *(planned)*
* Mongoose *(planned)*

---

## 📂 Project Structure

```
src/
  controllers/
  routes/
  middlewares/
  services/
index.js
```

---

## 🔐 Authentication

This API uses JWT (JSON Web Tokens) for authentication.

### Flow:

1. User logs in with credentials
2. Server validates the user
3. A JWT is generated and returned
4. Client sends the token in each request

Example header:

```
Authorization: Bearer <token>
```

---

## 📌 Endpoints

### 🔹 Auth

* `POST /login`
  Authenticate user and receive a token

---

### 🔹 Events

* `GET /eventos`
  Get all events *(protected route)*

* `POST /eventos`
  Create a new event *(protected route)*

---

## ⚙️ Getting Started

### 1. Install dependencies

```
npm install
```

---

### 2. Run the server

```
npm run dev
```

---

## 🔑 Environment Variables

Create a `.env` file in the root directory:

```
PORT=3000
JWT_SECRET=your_secret_key
```

---

## 🛠️ Future Improvements

* Integrate MongoDB with Mongoose
* Add user registration
* Implement password hashing with bcrypt
* Add refresh tokens
* Improve validation and error handling

---

## 📄 Notes

This project is intended for learning and demonstration purposes.
It focuses on backend fundamentals such as authentication, routing, and API design.

---

## 👨‍💻 Author

Brandon Lara
