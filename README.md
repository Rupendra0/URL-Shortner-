# ðŸ”— URL Shortener â€“ Node.js + MongoDB Based Application

This project is a **URL shortening service** similar to Bitly or TinyURL, developed using **Node.js**, **Express.js**, **MongoDB**, and **EJS**. It allows users to convert long, complex URLs into short, easy-to-share links that redirect to the original URL.

---

## ðŸ“Œ Table of Contents

- [ðŸš€ Features](#-features)
- [ðŸ“‚ Project Structure](#-project-structure)
- [ðŸ“‹ Technologies Used](#-technologies-used)
- [âš™ï¸ Installation & Setup](#ï¸-installation--setup)
- [ðŸ§ª How to Use](#-how-to-use)
- [ðŸ§  How It Works](#-how-it-works)
- [ðŸ› ï¸ Testing the Application](#ï¸-testing-the-application)
- [ðŸ“„ License](#-license)

---

## ðŸš€ Features

- âœ… Shorten any long URL to a 5-character unique short URL  
- âœ… Redirects short URLs to their corresponding original long URLs  
- âœ… Stores all mappings in MongoDB  
- âœ… Clean and simple UI using EJS  
- âœ… Auto-handles repeated URLs and generates unique codes  
- âœ… Customizable base URL via `.env`

---

## ðŸ“‚ Project Structure

```
URL-Shortner--main/
â”‚
â”œâ”€â”€ config/
â”‚   â””â”€â”€ db.js              # Database connection logic using Mongoose
â”‚
â”œâ”€â”€ models/
â”‚   â””â”€â”€ Url.js             # Mongoose schema for URL documents
â”‚
â”œâ”€â”€ routes/
â”‚   â””â”€â”€ index.js           # Express route definitions and URL logic
â”‚
â”œâ”€â”€ views/
â”‚   â””â”€â”€ index.ejs          # Frontend page (form to enter URLs)
â”‚
â”œâ”€â”€ .env                   # Environment variables like Mongo URI and base URL
â”œâ”€â”€ package.json           # Project metadata and dependencies
â”œâ”€â”€ server.js              # Main Express server
â””â”€â”€ README.md              # Project documentation
```

---

## ðŸ“‹ Technologies Used

- **Node.js** â€“ JavaScript runtime environment  
- **Express.js** â€“ Web framework for Node.js  
- **MongoDB** â€“ NoSQL database for storing URLs  
- **Mongoose** â€“ ODM (Object Document Mapper) for MongoDB  
- **EJS** â€“ Templating engine for dynamic HTML rendering  
- **dotenv** â€“ Loads environment variables from a `.env` file  

---

## âš™ï¸ Installation & Setup

### 1. Clone the repository

```bash
git clone <repository-url>
cd URL-Shortner--main
```

### 2. Install Node.js dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file in the root directory and add the following:

```env
MONGO_URI=mongodb://localhost:27017/urlshortener
BASE_URL=http://localhost:5000
```

> Replace with your MongoDB Atlas connection string if youâ€™re using a remote DB.

### 4. Start the server

```bash
npm start
```

Open your browser and go to: [http://localhost:5000](http://localhost:5000)

---

## ðŸ§ª How to Use

1. Open the homepage in your browser.
2. Enter a valid URL (e.g., `https://example.com/very/long/url`).
3. Submit the form to generate a short URL.
4. Copy the short URL like `http://localhost:5000/abc12` and share it.
5. Visiting the short URL will automatically redirect to the original link.

---

## ðŸ§  How It Works

- **User Input**: User submits a long URL from the frontend form.
- **Validation**: The server checks whether the URL is valid and already exists in the database.
- **Code Generation**: If not, a unique short code is generated using a random string generator.
- **Database Save**: The short URL and long URL are stored in MongoDB.
- **Redirection**: When a user visits the short URL, the app finds the corresponding original URL and redirects to it.

---

## ðŸ› ï¸ Testing the Application

- âœ… Test with a long URL to verify short URL generation
- âœ… Visit the short URL and confirm redirection to original
- âœ… Re-submit the same URL to check if duplicates are handled
- âœ… Disconnect the database and check for error handling
- âœ… Test with an invalid or non-existent short URL (should show 404 or error page)

---

## ðŸ“„ License

This project is licensed under the **MIT License**.  
You can freely use, modify, and distribute it for personal or commercial purposes.
