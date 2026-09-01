# 🏨 Hotel Booking REST API

A **Node.js & Express REST API** for managing hotels, rooms, users, and hotel bookings.

The project follows an **MVC-style architecture** and uses **MongoDB with Mongoose** for data persistence. Authentication is implemented using **JSON Web Tokens (JWT)**, with role-based authorization for admin-only hotel and room management.

---

## ✨ Features

- 🔐 User registration and login
- 🔑 Password hashing with `bcryptjs`
- 🎫 JWT-based authentication with one-day token expiration
- 👑 Role-based authorization for admin-only operations
- 🏨 CRUD operations for users, hotels, rooms, and bookings
- 🔗 MongoDB document relationships using Mongoose references
- 🔎 Hotel search and filtering by city, star rating, and hotel name
- ↕️ Sorting and pagination for hotel listings
- 🔄 Populated hotel, user, and room data in related responses
- ⚙️ Environment-based configuration using `dotenv`

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| 🟢 **Node.js** | JavaScript runtime |
| 🚂 **Express 5** | REST API framework |
| 🍃 **MongoDB** | Database |
| 🦋 **Mongoose** | MongoDB ODM |
| 🔐 **JSON Web Tokens** | Authentication |
| 🔒 **bcryptjs** | Password hashing |
| ⚙️ **dotenv** | Environment configuration |

---

## 📁 Project Structure

    .
    ├── app.js                    # Express app and route registration
    ├── server.js                 # Environment loading, DB connection, server startup
    ├── config/
    │   └── db.js                 # MongoDB connection
    ├── controllers/              # Request handlers and database operations
    ├── middlewares/
    │   ├── authMiddleware.js     # JWT authentication
    │   └── adminMiddleware.js    # Admin role authorization
    ├── models/                   # Mongoose schemas and models
    ├── routes/                   # API route definitions
    ├── .env                      # Local environment variables (not committed)
    └── package.json

---

## 🚀 Getting Started

### 📋 Prerequisites

- [Node.js](https://nodejs.org/) and npm
- A running MongoDB instance **or** MongoDB Atlas database

### 📥 Installation

Clone the repository:

    git clone <your-repository-url>
    cd <project-directory>
    npm install

### 🔧 Environment Variables

Create a `.env` file in the project root:

    PORT=3000
    MONGO_URI=mongodb://127.0.0.1:27017/hotel_booking
    JWT_SECRET=replace-with-a-long-random-secret

> ⚠️ **Never commit your `.env` file or expose your JWT secret.**

### ▶️ Run the Server

    node server.js

The API will be available at:

    http://localhost:3000

> ℹ️ There are currently no npm scripts defined in `package.json`, so the server is started directly using `node server.js`. A development watcher such as `nodemon` can be added separately if needed.

---

# 🔐 Authentication

Authentication is handled through the `/auth` endpoints.

### 📝 Register

    POST /auth/register
    Content-Type: application/json

Example request:

    {
      "firstName": "Ahmed",
      "lastName": "Ali",
      "email": "ahmed@example.com",
      "phone": "01012345678",
      "password": "strong-password"
    }

### 🔑 Login

    POST /auth/login
    Content-Type: application/json

Example request:

    {
      "email": "ahmed@example.com",
      "password": "strong-password"
    }

A successful login returns a JWT:

    {
      "message": "Login successful",
      "token": "<jwt-token>"
    }

Use the returned token for protected endpoints:

    Authorization: Bearer <jwt-token>

---

# 📡 API Endpoints

The API returns **JSON responses**.

> Replace `:id` with the corresponding MongoDB document ID.

## 👤 Authentication

| Method | Endpoint | Authentication | Description |
|---|---|---|---|
| `POST` | `/auth/register` | None | Create a user account |
| `POST` | `/auth/login` | None | Validate credentials and return a JWT |

---

## 👥 Users

| Method | Endpoint | Description |
|---|---|---|
| `POST` | `/users` | Create a user |
| `GET` | `/users` | List all users |
| `GET` | `/users/:id` | Get one user |
| `PATCH` | `/users/:id` | Update a user |
| `DELETE` | `/users/:id` | Delete a user |

---

## 🏨 Hotels

| Method | Endpoint | Authentication | Description |
|---|---|---|---|
| `POST` | `/hotels` | Admin JWT | Create a hotel |
| `GET` | `/hotels` | None | List hotels |
| `GET` | `/hotels/:id` | None | Get one hotel |
| `PATCH` | `/hotels/:id` | Admin JWT | Update a hotel |
| `DELETE` | `/hotels/:id` | Admin JWT | Delete a hotel |

### 🔎 Hotel Search & Filtering

Hotel listings support search, filtering, sorting, and pagination.

Example:

    /hotels?search=hilton&city=Cairo&starRating=5&sort=-name&page=1&limit=10

| Parameter | Description | Default |
|---|---|---|
| `search` | Case-insensitive match against hotel name | — |
| `city` | Exact city match | — |
| `starRating` | Exact star-rating match | — |
| `sort` | Mongoose sort expression | `name` |
| `page` | Page number | `1` |
| `limit` | Results per page | `10` |

---

## 🚪 Rooms

| Method | Endpoint | Authentication | Description |
|---|---|---|---|
| `POST` | `/rooms` | Admin JWT | Create a room |
| `GET` | `/rooms` | None | List rooms with hotel details populated |
| `GET` | `/rooms/:id` | None | Get one room with hotel details populated |
| `PATCH` | `/rooms/:id` | Admin JWT | Update a room |
| `DELETE` | `/rooms/:id` | Admin JWT | Delete a room |

---

## 📅 Bookings

| Method | Endpoint | Authentication | Description |
|---|---|---|---|
| `POST` | `/bookings` | None | Create a booking |
| `GET` | `/bookings` | JWT | List bookings with user and room details populated |
| `GET` | `/bookings/:id` | None | Get one booking with user and room details populated |
| `PATCH` | `/bookings/:id` | None | Update a booking |
| `DELETE` | `/bookings/:id` | None | Delete a booking |

### Example Booking Payload

    {
      "userId": "<user-id>",
      "roomId": "<room-id>",
      "checkInDate": "2026-09-10",
      "checkOutDate": "2026-09-15",
      "totalPrice": 14000,
      "bookingStatus": "Confirmed"
    }

---

# 🗄️ Data Models

### 👤 User

- `firstName`
- `lastName`
- `email`
- `phone`
- `password` — stored as a hash
- `role` — `user` or `admin`

### 🏨 Hotel

- `name`
- `city`
- `address`
- `description` — optional
- `starRating`

### 🚪 Room

- `hotelId` — reference to a Hotel
- `roomNumber`
- `roomType`
- `pricePerNight`
- `capacity`
- `isAvailable`

### 📅 Booking

- `userId` — reference to a User
- `roomId` — reference to a Room
- `checkInDate`
- `checkOutDate`
- `totalPrice`
- `bookingStatus`

All models include:

    createdAt
    updatedAt

through Mongoose timestamps.

---

# 🌱 Database Seeding

The local workspace contains an `insertions.mongodb.js` Mongo Shell seed script with example:

- 🏨 Hotels
- 👤 Users
- 🚪 Rooms
- 📅 Bookings

The seed file is ignored by Git and is **not expected to be included in the public repository**.

If you use it locally:

1. Update the referenced MongoDB ObjectIds for your own documents.
2. Never publish real credentials or secrets.
3. Keep local seed data containing sensitive information out of version control.

---

# ⚠️ Error Responses

Typical HTTP responses include:

| Status | Meaning |
|---|---|
| `201 Created` | Resource successfully created |
| `200 OK` | Successful read, update, or delete |
| `401 Unauthorized` | Authentication is missing or JWT is invalid/expired |
| `403 Forbidden` | Authenticated user does not have admin privileges |
| `404 Not Found` | Requested document does not exist |
| `500 Internal Server Error` | Unhandled database or server error |

---

# 🛡️ Security Notes

Before using this API in production, consider adding:

- ✅ Request validation
- ✅ Unique indexing for user emails
- ✅ Stricter authorization for user and booking operations
- ✅ Protection against exposing user/password fields
- ✅ Consistent invalid-ID handling
- ✅ Centralized error handling

Always keep `.env` out of version control and use a strong, randomly generated `JWT_SECRET`.

---

# 📄 License

No license has been specified yet.

---

<div align="center">

### ⭐ If you find this project useful, consider giving it a star!

**Built with Node.js, Express & MongoDB**

</div>