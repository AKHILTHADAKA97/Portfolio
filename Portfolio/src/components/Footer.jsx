
import './Footer.css'

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-brand">Pixelor</div>
          <div className="footer-highlights">
            <div className="footer-email">pixelor@gmail.com</div>
            <div className="footer-status">
              <span className="status-dot" />
              Open To Work
            </div>
          </div>
        </div>

        <div className="footer-links-grid">
          <div className="footer-block">
            <p className="footer-heading">Navigation</p>
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#pages">Pages</a>
              </li>
              <li>
                <a href="#project">Project</a>
              </li>
              <li>
                <a href="#blog">Blog</a>
              </li>
              <li>
                <a href="#contact">Contact Us</a>
              </li>
            </ul>
          </div>

          <div className="footer-block">
            <p className="footer-heading">Social</p>
            <ul>
              <li>
                <a href="#facebook">Facebook</a>
              </li>
              <li>
                <a href="#linkedin">LinkedIn</a>
              </li>
              <li>
                <a href="#twitter">Twitter</a>
              </li>
              <li>
                <a href="#instagram">Instagram</a>
              </li>
            </ul>
          </div>

          <div className="footer-block">
            <p className="footer-heading">Quick Links</p>
            <ul>
              <li>
                <a href="#download">Download CV</a>
              </li>
              <li>
                <a href="#support">Support</a>
              </li>
              <li>
                <a href="#terms">Terms</a>
              </li>
              <li>
                <a href="#privacy">Privacy</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-author">Akhil</p>
          <div className="footer-bottom-row">
            <p className="footer-copy">Copyright © 2026 Pixelor, All Rights Reserved.</p>
            <nav>
              <a href="#privacy">Privacy Policy</a>
              <a href="#terms">Terms and Conditions</a>
              <a href="#support">Support</a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
