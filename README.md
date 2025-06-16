# 🔗 URL Shortener – Node.js + MongoDB Based Application

This project is a **URL shortening service** similar to Bitly or TinyURL, developed using **Node.js**, **Express.js**, **MongoDB**, and **EJS**. It allows users to convert long, complex URLs into short, easy-to-share links that redirect to the original URL.

---

## 📌 Table of Contents

- [🚀 Features](#-features)
- [📂 Project Structure](#-project-structure)
- [📋 Technologies Used](#-technologies-used)
- [⚙️ Installation & Setup](#️-installation--setup)
- [🧪 How to Use](#-how-to-use)
- [🧠 How It Works](#-how-it-works)
- [🛠️ Testing the Application](#️-testing-the-application)
- [📄 License](#-license)

---

## 🚀 Features

✅ Shorten any long URL to a 5-character unique short URL  
✅ Redirects short URLs to their corresponding original long URLs  
✅ Stores all mappings in MongoDB  
✅ Clean and simple UI using EJS  
✅ Auto-handles repeated URLs and generates unique codes  
✅ Customizable base URL via `.env`

---

## 📂 Project Structure

```bash
URL-Shortner--main/
│
├── config/
│   └── db.js              # Database connection logic using Mongoose
│
├── models/
│   └── Url.js             # Mongoose schema for URL documents
│
├── routes/
│   └── index.js           # Express route definitions and URL logic
│
├── views/
│   └── index.ejs          # Frontend page (form to enter URLs)
│
├── .env                   # Environment variables like Mongo URI and base URL
├── package.json           # Project metadata and dependencies
├── server.js              # Main Express server
└── README.md              # Project documentation
