from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
import os
from dotenv import load_dotenv
from mistralai import Mistral

# Load environment variables
load_dotenv()

app = Flask(__name__, static_folder="../frontend")
CORS(app)

# Initialize Mistral client with your API key
MISTRAL_API_KEY = os.getenv("MISTRAL_API_KEY")
client = Mistral(api_key=MISTRAL_API_KEY)

# Routes to serve frontend
@app.route("/")
def index():
    return send_from_directory(app.static_folder, "index.html")

@app.route("/<path:path>")
def static_files(path):
    return send_from_directory(app.static_folder, path)

# Chat endpoint
@app.route("/chat", methods=["POST"])
def chat():
    try:
        data = request.get_json()
        user_input = data.get("message", "").strip()
        if not user_input:
            return jsonify({"reply": "Please type something!"})

        # Send message to Mistral AI
        response = client.chat.complete(
            model="mistral-large-latest",  # or any other available Mistral model
            messages=[{"role": "user", "content": user_input}]
        )

        ai_reply = response.choices[0].message.content.strip()
        return jsonify({"reply": ai_reply})

    except Exception as e:
        return jsonify({"reply": f"⚠️ Error: {str(e)}"})

if __name__ == "__main__":
    app.run(debug=True, port=5000)
