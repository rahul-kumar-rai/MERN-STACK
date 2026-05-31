#MERN Stack Architecture
```
                ┌────────────────────┐
                │     React Frontend │
                │  React + Redux RTK │
                └─────────┬──────────┘
                          │ API Calls
                          ▼
                ┌────────────────────┐
                │  Express.js Server │
                │  REST API Backend  │
                └─────────┬──────────┘
                          │
          ┌───────────────┼────────────────┐
          ▼               ▼                ▼
 ┌──────────────┐ ┌──────────────┐ ┌──────────────┐
 │ MongoDB Atlas│ │ Cloudinary   │ │ Razorpay API │
 │ Product/User │ │ Image Upload │ │ Payments     │
 └──────────────┘ └──────────────┘ └──────────────┘
```

## Backend

- Start backend 

```
npm init 

```
- required package install
```
npm i express cloudinary bcryptjs cors dotenv jsonwebtoken mongoose multer nodemailer razorpay
```
- Folder stracture 
```
backend/
├── src/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── services/
│   ├── utils/
│   ├── uploads/
│   └── server.js
│
├── .env
|── package.json
└── README.md

```
- command using cmd for make folders
```
mkdir config controllers middleware models routes services utils uploads
```
## Authentication System
- Registration Flow
```
User Register
    ↓
Validate Input
    ↓
Hash Password (bcrypt)
    ↓
Save User in MongoDB
    ↓
Generate JWT Token
    ↓
Send Token to Frontend
```
- Login flow 

```
User Login
    ↓
Compare Password
    ↓
Generate JWT
    ↓
Store Token
    ↓
Protected Routes Access

```

- JWT Authentication Architecture

```
Frontend Login
      ↓
Backend Generates JWT
      ↓
Token Stored in Browser
      ↓
Frontend Sends Token in Headers
      ↓
Auth Middleware Verifies JWT
      ↓
Access Granted

```

## Product Management System

```
{
  title,
  description,
  price,
  stock,
  category,
  images,
  ratings,
  reviews,
  createdBy
}

```

## Features
- Add Product
- Edit Product
- Delete Product
- Upload Images
- Product Search
- Category Filter
- Pagination
- Product Reviews

## Backend skills 
- REST API Design
- Authentication
- Authorization
- Middleware
- File Uploads
- Payment Integration
- MongoDB Modeling
- Error Handling
- Async/Await
- MVC Architecture

# step by step setup 
- creating server and listing on index.js file
- mongodb connection and using db connection after server starting
- req and res sending using express.json()
- router connecting 
- controllers and routers connects
- password protected bcriptjs
- store in database 
- api response class 