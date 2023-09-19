import { FaGithub, FaLinkedin, FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';

import '../../styles/contact.css';

const Form = () => {
  return (
    <div className="form-container">
      <h2>Contact Me</h2>
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" placeholder="Your Name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Your Email" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" placeholder="Your Message" required></textarea>
        </div>
        <button type="submit">Send</button>
      </form>
      <div className="social-footer">
        <p>Connect with me on social media:</p>
        <div className="social-links">
          <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/yourlinkedin" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="https://twitter.com/yourtwitter" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          <a href="https://www.facebook.com/yourfacebook" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
          <a href="https://www.instagram.com/yourinstagram" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        </div>
      </div>
    </div>
  );
};

export default Form;
