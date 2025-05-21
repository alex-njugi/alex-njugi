📄 README.md — Alex Njugi Karanja's Personal Portfolio
🌐 Live Site
View Portfolio
(Replace this with your actual deployed site link)

📌 Project Overview
This is the official personal portfolio of Alex Njugi Karanja, a full-stack software developer with a front-end flair. Built with React (Vite) and styled with custom CSS, it showcases technologies, projects, bio, CV, and includes a fully functional contact form powered by a Flask backend.

🚀 Features
⚛️ React (Vite) frontend

🎨 Custom responsive styling using one centralized index.css

📱 Mobile-first, responsive design

✨ Smooth scroll, animations (AOS), and clean layout transitions

🧑‍💼 About Me section with professional and faith-based background

💼 Projects section (optional carousel or grid)

🛠 Technologies section using Swiper and official react-icons

📄 CV as a separate page

📬 Fully functional contact form via Flask API and Gmail SMTP

📎 Footer with live links to GitHub, LinkedIn, Instagram, Email

🛠️ Tech Stack
Frontend	Backend	Deployment	Tools
React	Flask (Python)	Vercel / Netlify	Vite
CSS3	Gmail SMTP via smtplib	Render / Railway	AOS
Swiper.js	flask-cors		VS Code
React Icons	EmailMessage		Git / GitHub

📁 Folder Structure
css
Copy
Edit
alex-portfolio/
├── backend/                ← Flask API for contact form
│   └── app.py
├── src/
│   └── components/
│       ├── Navbar.jsx
│       ├── Hero.jsx
│       ├── Technologies.jsx
│       ├── Projects.jsx
│       ├── About.jsx
│       ├── Contact.jsx
│       └── Footer.jsx
├── public/
│   └── images/
│       └── avatar.png
├── index.css               ← All custom styles here
├── App.jsx                 ← Routes, AOS, layout
└── main.jsx
⚙️ How to Run Locally
1. Clone the repo
bash
Copy
Edit
git clone https://github.com/alex-njugi/portfolio.git
cd portfolio
2. Install frontend dependencies
bash
Copy
Edit
npm install
3. Start the React app
bash
Copy
Edit
npm run dev
🔧 Flask Backend (Contact Form)
1. Setup
bash
Copy
Edit
cd backend
python -m venv venv
source venv/bin/activate
pip install flask flask-cors
2. Add your credentials in app.py
python
Copy
Edit
sender_email = "alexnjugi11@gmail.com"
sender_password = "your_app_password"  # from Gmail App Passwords
receiver_email = "alexnjugi11@gmail.com"
3. Start the server
bash
Copy
Edit
python app.py
The backend runs at http://localhost:5000.

📬 Contact Form Functionality
The contact form sends a POST request to your Flask API /api/contact

Flask sends the email using smtplib through Gmail's SMTP

App password is used to secure access

Responses are shown as status messages on the UI

✅ Successfully tested and working.

🔐 Security Tips
Do not hardcode your app password for deployment

Use .env + python-dotenv to hide secrets

Never push .env to GitHub

📸 Screenshots
Hero + Nav	Technologies	About

🙌 Credits
Designed and developed by Alex Njugi Karanja

Trained by Moringa School (Full-stack Dev)

AMI-certified in soft skills

Inspired by Bob Oyier

✝️ Faith Statement
I am a devoted Christian who is saved and committed to walking daily with our Lord Jesus Christ. This portfolio reflects my dedication to both technical excellence and faith-rooted integrity.

📫 Contact Me
Email: alexnjugi11@gmail.com

GitHub: @alex-njugi

LinkedIn: Alex Njugi

Instagram: @njugi_ak

