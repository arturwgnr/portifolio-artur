import "./contact.scss";
import { useState } from "react";

export default function Contact() {
  const [messageSent, setMessageSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessageSent(true);
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-image">
        <img src="/assets/handshk.png" alt="Handshake illustration" />
      </div>
      <div className="contact-form-container">
        <div className="text">
          <h2>Get in Touch</h2>
          <p>The future doesn't wait</p>
        </div>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="Your email" required />
          <textarea placeholder="Your message" required />
          <button type="submit">Send</button>
          {messageSent && <span>Thanks! Your message has been sent.</span>}
        </form>
      </div>
    </section>
  );
}
