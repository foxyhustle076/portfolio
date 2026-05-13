import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:foxyhustle076@gmail.com" data-cursor="disable">
                foxyhustle076@gmail.com
              </a>
            </p>
            <h4>Phone</h4>
            <p>
              <a href="tel:+919508937667" data-cursor="disable">
                +91 95089 37667
              </a>
            </p>
            <h4>Address</h4>
            <p>
              Subhash Nagar, Patna-26
            </p>
            <h4>Portfolio</h4>
            <p>
              <a href="http://www.reallygreatsite.com" target="_blank" data-cursor="disable">
                www.reallygreatsite.com
              </a>
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://www.instagram.com/foxy.hustle/"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Instagram <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>ARYAN JAIS</span>
            </h2>
            <h5>
              <MdCopyright /> 2024
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
