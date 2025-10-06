# SMART-AI-CHATBOT
Smart AI ChatBot – A web-based AI chatbot built with Python Flask and Mistral AI. The frontend uses HTML, CSS, and JavaScript, allowing users to chat in real-time with an intelligent AI assistant. Fully integrated backend connects to Mistral AI for dynamic responses.
Features

Real-time chat with AI using Mistral AI API

Responsive and user-friendly frontend built with HTML, CSS, and JavaScript

Flask backend handles chat requests and communicates with Mistral AI

Easy to run locally with minimal setup

Demo

💬 Users can type messages and get instant AI-generated replies.

Installation

Clone the repository

git clone https://github.com/your-username/smart-ai-chatbot.git
cd smart-ai-chatbot/backend


Create a virtual environment (optional but recommended)

python -m venv venv
source venv/bin/activate      # Linux/Mac
venv\Scripts\activate         # Windows


Install dependencies

pip install -r requirements.txt


Set up environment variables
Create a .env file in backend/:

MISTRAL_API_KEY=your_mistral_api_key_here


Run the backend

python app.py


Open the frontend
Go to your browser: http://127.0.0.1:5000/

Usage

Type a message in the chat box

Press Enter or click the Send button

The AI will respond in real-time using Mistral AI

Folder Structure
chatbot/
│
├── backend/
│   ├── app.py
│   ├── .env
│   └── requirements.txt
│
└── frontend/
    ├── index.html
    ├── style.css
    └── script.js

Technologies Used

Backend: Python, Flask, Mistral AI API

Frontend: HTML, CSS, JavaScript

Environment Management: dotenv for secure API key storage

Future Enhancements

Add typing indicator and AI message animations

Save chat history in local storage or a database

Deploy online (Heroku, Render, or Vercel) for public access

Integrate voice input/output for interactive chatting

License

This project is open-source and available under the MIT License
.
