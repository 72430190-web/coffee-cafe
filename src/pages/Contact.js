import { Link } from 'react-router-dom';

export default function Contact() {
  return (
    <div className="contact-page">

      <section className="contact-hero">
        <div className="contact-hero-content">
          <div className="hero-tag">We'd love to hear from you</div>
          <h1 className="contact-title">Get in <em>Touch</em></h1>
        </div>
      </section>

      <section className="contact-body container">
        <div className="contact-grid">

          {/* Left - Info */}
          <div className="contact-info">
            <div className="contact-block">
              <span className="contact-icon"><i className="fa-solid fa-location-dot"></i></span>
              <div>
                <h4>Visit Us</h4>
                <p>123 Brew Street<br />Beirut, Lebanon</p>
              </div>
            </div>
            <div className="contact-block">
              <span className="contact-icon"><i className="fa-solid fa-clock"></i></span>
              <div>
                <h4>Hours</h4>
                <p>Every day<br />7:00 AM – 10:00 PM</p>
              </div>
            </div>
            <div className="contact-block">
              <span className="contact-icon"><i className="fa-solid fa-envelope"></i></span>
              <div>
                <h4>Email</h4>
                <p>hello@coffeecafe.com</p>
              </div>
            </div>
            <div className="contact-block">
              <span className="contact-icon"><i className="fa-solid fa-phone"></i></span>
              <div>
                <h4>Phone</h4>
                <p>+961 1 234 567</p>
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div className="contact-form">
            <div className="form-group">
              <label>Name</label>
              <input type="text" placeholder="Your name" />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="your@email.com" />
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea rows="5" placeholder="Tell us anything..."></textarea>
            </div>
            <button className="contact-btn">Send Message</button>
          </div>

        </div>
      </section>

    </div>
  );
}