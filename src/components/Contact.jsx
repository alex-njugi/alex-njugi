import React, { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false); // ✅ loading state added

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = {
      name: form.name.value,
      email: form.email.value,
      message: form.message.value
    };

    setLoading(true); // 🔄 show loading while request is in progress

    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });

      if (res.ok) {
        setStatus("✅ Message sent successfully!");
        form.reset();
      } else {
        const err = await res.json();
        setStatus("❌ Error: " + err.error);
      }
    } catch (err) {
      console.error(err);
      setStatus("❌ Server error. Try again later.");
    } finally {
      setLoading(false); // ✅ done
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2>Get In Touch</h2>
        <p>If you have a project, a question, or just want to say hello, I’d love to hear from you.</p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
          <button type="submit" disabled={loading}>
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>

        {status && <p className="contact-status">{status}</p>}
      </div>
    </section>
  );
}
