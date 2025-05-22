from flask import Flask, request, jsonify
from flask_cors import CORS
import smtplib
from email.message import EmailMessage

app = Flask(__name__)
CORS(app)

@app.route("/api/contact", methods=["POST"])
def contact():
    data = request.get_json()

    name = data.get("name")
    email = data.get("email")
    message = data.get("message")

    if not all([name, email, message]):
        return jsonify({"error": "All fields are required"}), 400

    import os

    sender_email = os.environ.get("EMAIL_USER")
    sender_password = os.environ.get("EMAIL_PASS")
    receiver_email = os.environ.get("RECEIVER_EMAIL", "alexnjugi11@gmail.com")

    msg = EmailMessage()
    msg.set_content(f"From: {name}\nEmail: {email}\n\n{message}")
    msg["Subject"] = "New Contact Form Message"
    msg["From"] = sender_email
    msg["To"] = receiver_email

    try:
        with smtplib.SMTP_SSL("smtp.gmail.com", 465) as smtp:
            smtp.login(sender_email, sender_password)
            smtp.send_message(msg)
        return jsonify({"success": True}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(debug=True)
