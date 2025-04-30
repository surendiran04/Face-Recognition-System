# 🎯 Face Recognition Attendance System

This is a full-stack face recognition attendance system with real-time video processing. The frontend is built with **React**, and the backend is a **Flask API** hosted in **Google Colab** using **ngrok**. MongoDB Atlas is used for storing attendance and user data, while **Google Drive** is used for storing registered face images. The system uses **ArcFace** for face recognition.

---

## 🧠 Features

- 🎥 Real-time face recognition via webcam
- 🧑‍💼 Face registration with image upload
- ✅ Attendance marking upon face match
- 🔐 Secure communication between frontend and backend
- ☁️ MongoDB Atlas for persistent data storage
- 📂 Google Drive used for storing registered face images
- 📡 Ngrok exposes backend API to public internet via Colab

---

## 🧰 Tech Stack

| Layer     | Tech Used                         |
|-----------|-----------------------------------|
| Frontend  | React                             |
| Backend   | Flask (Python, Google Colab)      |
| Model     | ArcFace                           |
| Database  | MongoDB Atlas                     |
| Storage   | Google Drive                      |
| Deployment| Ngrok (to expose Colab backend)   |

---

## ⚙️ Getting Started

### 🚀 Frontend Setup

1. Clone the repo:

   ```bash
   git clone https://github.com/yourusername/face-recognition-attendance.git
   cd face-recognition-attendance/frontend

2. Create a .env file inside the frontend directory and add your backend URL:
   ```bash
    VITE_BACKEND_URL=https://your-ngrok-url.ngrok.io
   
3. Install dependencies:

   ```bash
   npm install


 4. Run the React app:

  ```bash
   npm install

``` 
---
  
# Backend Setup (Google Colab)
Open your Google Colab notebook and upload the following files:

app.py – Contains the Flask API routes.

db.py – Contains MongoDB Atlas connection and collections.

face_recognition.py – Handles face registration and recognition using ArcFace and Google Drive

---

📁 Folder Structure
 ```bash
/frontend
  ├── public
  ├── src
  └── .env

Colab Files
  ├── app.py
  ├── db.py
  └── face_recognition.py


