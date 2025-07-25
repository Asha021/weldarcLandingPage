// import { div } from 'framer-motion/client';
import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { FaFacebook, FaFacebookF, FaThumbsUp, FaInstagram } from 'react-icons/fa';

const Thanku = () => {
  return (
    <div>
        <div
      className=" pt-5 d-flex flex-column justify-content-center align-items-center text-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1470&q=80')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Main Card */}
      <div className="bg-white p-4 p-md-5 py-md-4 mt-5  shadow " style={{ maxWidth: '600px', width: '100%' }}>
        <div className="mb-3">
            <FaCheckCircle size={48} className="text-success" />
        </div>
        <h2 className="fw-bold mb-3">Thanks For Submitting!</h2>
        <p className="text-muted mb-0">
          We’ve received your submission successfully. Our team will review it and get back to you shortly.
        </p>
        <p className="mt-2 text-muted mb-0">
          In the meantime, feel free to explore more on our website or follow us on social media!
        </p>
      </div>

      {/* CTA Banner */}
      <div style={{background:"#dc3545"}} className="text-white py-3 px-4 w-100 text-center">
        <strong>Want to stay updated? Connect with us online!</strong>
      </div>

      
    </div>
       <div className="container mb-5 mt-5 py-4">
      {/* Section Title */}
      {/* <h4 className="text-center fw-bold mb-4 text-dark">Stay Connected With Us</h4> */}

      <div className="row">
        {/* Facebook Like Card */}
        <div className="col-md-6 mb-3">
          <div className="bg-white border rounded shadow-sm text-center px-3 py-3 social-card h-100">
            <div className="d-flex justify-content-center align-items-center mb-2">
              <div
                className="rounded-circle d-flex justify-content-center align-items-center"
                style={{
                  width: 36,
                  height: 36,
                  backgroundColor: '#1877F2',
                }}
              >
                <FaFacebook size={18} color="#fff" />
              </div>
              <span className="fw-semibold fs-5 ms-2">Like our Facebook Page</span>
            </div>
            <div className="d-flex justify-content-center align-items-center">
              <FaThumbsUp size={12} color="#1877F2" />
              <small className="text-muted ms-2" style={{ fontSize: '10px' }}>
                Join 5k+ people who stay updated with us!
              </small>
            </div>
          </div>
        </div>

        {/* YouTube Subscribe Card */}
        <div className="col-md-6 mb-3">
          <div className="bg-white border rounded shadow-sm text-center px-3 py-3 social-card h-100">
            <div className="d-flex justify-content-center align-items-center mb-2">
              <div
                className="rounded-circle d-flex justify-content-center align-items-center"
                style={{
                  width: 36,
                  height: 36,
                  backgroundColor: '#FF0000',
                }}
              >
                <i className="fab fa-youtube text-white" style={{ fontSize: '18px' }}></i>
              </div>
              <span className="fw-semibold fs-5 ms-2">Subscribe to Our YouTube Channel</span>
            </div>
            <div className="d-flex justify-content-center align-items-center">
              <small className="text-muted" style={{ fontSize: '10px' }}>
                Watch demos, tutorials, and customer stories.
              </small>
            </div>
          </div>
        </div>

        {/* Social Share Buttons */}
        <div className="col-12 mt-3">
          <div className="bg-white border rounded shadow-sm text-center px-3 py-3 social-card">
            <div className="d-flex justify-content-center align-items-center mb-3">
              <span className="fw-semibold fs-5">Get Social. Share Weldarc with others</span>
            </div>
            <div className="d-flex justify-content-center">
              <button
                className="btn btn-sm btn-primary d-flex align-items-center px-3 py-1"
                title="Share on Facebook"
              >
                <FaFacebookF className="me-1" size={14} />
                Facebook
              </button>
              <button
                className="btn btn-sm btn-danger d-flex align-items-center px-3 py-1 ms-2"
                title="Share on Instagram"
              >
                <FaInstagram className="me-1" size={14} />
                Instagram
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Thanku;
