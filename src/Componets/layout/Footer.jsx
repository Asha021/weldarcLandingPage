import React from "react";
// import { FaClock,  } from 'react-icons/fa'; // Keep only these
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaClock,
  // FaMapMarkerAlt,
  // FaGlobeAsia,
} from "react-icons/fa";
import { GiIndiaGate } from "react-icons/gi";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
// import { useEffect } from "react";

const infoData = [
  {
    title: "Service Area",
    value: "PAN India",
    color: "#ff0057",
    icon: <GiIndiaGate />,
  },
  {
    title: "Time Operational",
    value: "08.00 AM – 06.00 PM",
    color: "#ff9900",
    icon: <FaClock />,
  },
  {
    title: "Location",
    value: "Ballabhgarh, India",
    color: "#00d9ff",
    icon: <FaMapMarkerAlt />,
  },
];

const Footer = () => {
 const navigate = useNavigate();

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 90,
        behavior: 'smooth',
      });
    }
  };

  return (
    <footer className="bg-dark text-light pt-5 pb-4">
      <div className="container">
        <div className="row gx-4 gy-4">
          {infoData.map((item, i) => (
            <div className="col-md-4" key={i}>
              <div
                className="text-white h-100 px-4 py-4 rounded-4 d-flex align-items-center"
                style={{
                  background: "linear-gradient(135deg, #111, #1a1a1a)",
                  border: `1.5px solid ${item.color}`,
                  boxShadow: `0 0 20px ${item.color}33`,
                  minHeight: "120px",
                }}
              >
                {/* Icon on Left */}
                <div
                  className="me-4 d-flex align-items-center justify-content-center rounded-circle flex-shrink-0"
                  style={{
                    width: "70px",
                    height: "70px",
                    backgroundColor: `${item.color}22`,
                    color: item.color,
                    fontSize: "2rem",
                    boxShadow: `0 0 8px ${item.color}44`,
                  }}
                >
                  {item.icon}
                </div>

                {/* Text Content */}
                <div>
                  <h5
                    className="text-uppercase fw-semibold mb-2"
                    style={{
                      fontSize: "1.25rem",
                      color: item.color,
                      letterSpacing: "0.6px",
                    }}
                  >
                    {item.title}
                  </h5>
                  <p
                    className="mb-0 text-light"
                    style={{
                      fontSize: "1.15rem",
                      lineHeight: "1.7",
                      marginBottom: 0,
                    }}
                  >
                    {item.value}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Main Footer Content */}
        <div className="row mt-5">
          {/* About Us */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold text-danger">About Us</h5>
            <p>
              With over 25 years of experience, we offer the most economical and
              reliable industrial solutions across India.
            </p>
            <p className="fw-semibold mt-4 text-danger">Follow Us</p>
            <div className="d-flex gap-3 fs-5">
              <a href="#" className="text-light">
                <FaLinkedinIn />
              </a>
              <a href="#" className="text-light">
                <FaFacebookF />
              </a>
              <a href="#" className="text-light">
                <FaInstagram />
              </a>
            </div>
          </div>

 <div className="col-md-2 mb-4">
        <h6 className="fw-bold text-danger">Useful Links</h6>
        <ul className="list-unstyled">
          <li><div onClick={() => scrollToSection('home')} className="text-light" style={{ cursor: "pointer" }}>Home</div></li>
          <li><div onClick={() => scrollToSection('popular-products')} className="text-light" style={{ cursor: "pointer" }}>Products</div></li>
          <li><div onClick={() => scrollToSection('Difference')} className="text-light" style={{ cursor: "pointer" }}>Difference</div></li>
          <li><div onClick={() => navigate("/contactus")} className="text-light" style={{ cursor: "pointer" }}>Contact Us</div></li>
        </ul>
      </div>

      <div className="col-md-2 mb-4">
        <h6 className="fw-bold text-danger">Quick Links</h6>
        <ul className="list-unstyled">
          <li><div onClick={() => scrollToSection('Why Chosse')} className="text-light" style={{ cursor: "pointer" }}>Why Choose</div></li>
          <li><div className="text-light">Privacy Policy</div></li>
          <li><div className="text-light">Terms</div></li>
        </ul>
      </div>



          {/* Contact Info */}
          <div className="col-md-4 mb-4">
            <h6 className="fw-bold text-danger">Contact Us</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <FaPhoneAlt className="me-2 text-danger" />
                +91-9313103366
              </li>
              <li className="mb-2">
                <FaEnvelope className="me-2 text-danger" />
                info@weldarcindia.com
              </li>
              <li className="d-flex align-items-start">
                <FaMapMarkerAlt className="me-2 text-danger mt-1" />
                <div>
                  Mansoori Weldarc India Pvt Ltd
                  <br />
                  23/7 Mathura Road Near Castrol India,
                  <br />
                  Ballabhgarh, Faridabad, Haryana 121004
                </div>
              </li>
            </ul>
          </div>
        </div>

        <hr className="text-light" />

        {/* Bottom Footer */}
        <div className="d-flex flex-column flex-md-row justify-content-between text-center text-md-start pt-3">
          <small>
            © 2024 Mansoori Weldarc India Pvt Ltd. All rights reserved.
          </small>
          <a
            className="text-decoration-none text-white"
            href="https://www.arawebtechnologies.com/"
          >
            <small>
              Designed & Developed by <strong>Ara Web Technologies</strong>
            </small>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
