
# 🛠️ Task Tracker Backend

This is the **backend server** for the Task Tracker web application, built using **Node.js**, **Express.js**, and **MongoDB** (with native driver or Mongoose). It provides RESTful APIs for authentication, project management, and task tracking.

---

## 📦 Tech Stack

- **Node.js**
- **Express.js**
- **MongoDB**
- **JWT (JSON Web Token)**
- **bcryptjs**
- **dotenv**

---

## 📁 Folder Structure

```
task-tracker-backend/
├── configs/            # Configuration logic for DB...
├── controllers/        # Business logic for APIs
├── middleware/         # Auth middleware, error handling
├── models/             # MongoDB models/schemas
├── routes/             # API routes
├── utils/              # Helper functions
├── .env                # Environment variables
├── app.js              # Main Express app
├── server.js           # Entry point
└── package.json
```

---

## 🔧 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/ramu-nukavarapu/task-tracker-backend.git
   cd task-tracker-backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure Environment Variables**

   Create a `.env` file in the root directory:

   ```
   PORT=3000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **API Base URL**
   ```
   http://localhost:3000/
   ```

---

## 🛡️ API Endpoints Overview

| Method | Endpoint             | Description                  |
|--------|----------------------|------------------------------|
| POST   | `/user/signup`   | Register new user            |
| POST   | `/user/login`    | Login user and get token     |
| GET   | `/user/me`    | Get user info    |
| GET    | `/project`      | Get all projects             |
| POST   | `/project`      | Create a new project         |
| GET    | `/project/:id`      | Get all tasks in a project             |
| GET    | `/project/:id/task`      | Add a task to a project             |
| DELETE    | `/project/:id`      | Delete a project             |
| GET    | `/task/:id`     | Get tasks for a project      |
| PUT  | `/task/:id`     | Update a task to a project      |
| DELETE   | `/task/:id`     | Delete a task to a project      |

---

## ✅ Features

- User authentication with JWT
- Protected routes using middleware
- CRUD operations for projects and tasks
- Secure password hashing using bcrypt
- Modular structure with clean code separation

---

## 🧪 Testing

You can test the APIs using tools like:

- [Postman](https://www.postman.com/)
- [Thunder Client (VS Code)](https://www.thunderclient.com/)

---

## 👨‍💻 Author

Created by **Ramu Nukavarapu**
📧 bhagyaramu.nukavarapu@gmail.com
🔗 [GitHub: @ramu-nukavarapu](https://github.com/ramu-nukavarapu)
