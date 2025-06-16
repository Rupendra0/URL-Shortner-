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

- ✅ Shorten any long URL to a 5-character unique short URL  
- ✅ Redirects short URLs to their corresponding original long URLs  
- ✅ Stores all mappings in MongoDB  
- ✅ Clean and simple UI using EJS  
- ✅ Auto-handles repeated URLs and generates unique codes  
- ✅ Customizable base URL via `.env`

---

## 📋 Technologies Used

- **Node.js** – JavaScript runtime environment  
- **Express.js** – Web framework for Node.js  
- **MongoDB** – NoSQL database for storing URLs  
- **Mongoose** – ODM (Object Document Mapper) for MongoDB  
- **EJS** – Templating engine for dynamic HTML rendering  
- **dotenv** – Loads environment variables from a `.env` file  

---

## ⚙️ Installation & Setup

### 1. Clone the repository
git clone <repository-url>
cd URL-Shortner--main

### 2. Install Node.js dependencies

npm install

### 3. Configure environment variables

Create a `.env` file in the root directory and add the following:

MONGO_URI=mongodb://localhost:27017/urlshortener
BASE_URL=http://localhost:5000

> Replace with your MongoDB Atlas connection string if you’re using a remote DB.

### 4. Start the server

npm start

Open your browser and go to: [http://localhost:5000](http://localhost:5000)

---

## 🧪 How to Use

1. Open the homepage in your browser.
2. Enter a valid URL (e.g., `https://example.com/very/long/url`).
3. Submit the form to generate a short URL.
4. Copy the short URL like `http://localhost:5000/abc12` and share it.
5. Visiting the short URL will automatically redirect to the original link.

---

## 🧠 How It Works

- **User Input**: User submits a long URL from the frontend form.
- **Validation**: The server checks whether the URL is valid and already exists in the database.
- **Code Generation**: If not, a unique short code is generated using a random string generator.
- **Database Save**: The short URL and long URL are stored in MongoDB.
- **Redirection**: When a user visits the short URL, the app finds the corresponding original URL and redirects to it.

---

## 🛠️ Testing the Application

- ✅ Test with a long URL to verify short URL generation
- ✅ Visit the short URL and confirm redirection to original
- ✅ Re-submit the same URL to check if duplicates are handled
- ✅ Disconnect the database and check for error handling
- ✅ Test with an invalid or non-existent short URL (should show 404 or error page)

---

## 📄 License

This project is licensed under the **MIT License**.  
You can freely use, modify, and distribute it for personal or commercial purposes.


