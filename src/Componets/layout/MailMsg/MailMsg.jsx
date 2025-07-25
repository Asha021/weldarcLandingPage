import React, { useEffect } from 'react';
import emailjs from 'emailjs-com';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const MailMsg = () => {
  useEffect(() => {
    emailjs.init('_UBcpAMpAZ68lwVNQ'); // Replace with your EmailJS Public Key
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_02h6fip', 'template_w6x3pts', e.target)
      .then(() => {
        alert('Email sent successfully!');
      }, (err) => {
        alert('Failed to send email. Error: ' + JSON.stringify(err));
      });
  };

  const handleFile = (files) => {
    if (files.length > 0) {
      alert("Selected file: " + files[0].name);
    }
  };

  return (
    <section style={{ background: 'linear-gradient(to bottom, #FF4B40, #BE1C12)', padding: '20px 0' }}>
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <img src="public/weldar-logo 1.png" style={{ height: 'auto', width: '100%', maxWidth: '200px' }} className="img-fluid" alt="Logo" />
          </div>
        </div>

        <div className="card mt-3 p-3">
          <form id="contact-form" onSubmit={handleSubmit} className="container">
            <div className="row justify-content-center">
              <div className="col-12 text-center">
                <button type="submit" className="tick-button text-center">
                  <i className="fa-solid fa-check"></i>
                </button>
              </div>

              <div className="col-12 text-center mt-3">
                <p><b>Dear [User's Name],</b></p>
                <h4>Thank you for reaching out to us! We have received your inquiry and appreciate your interest in our services.</h4>
                <p>Our team is reviewing your request, and we will get back to you as soon as possible.</p>
              </div>

              <div className="col-12 col-md-6 mt-5 px-4">
                <h5 className="mt-5">Your submitted details</h5>
                <p><b>Name:</b> [User's Name]</p>
                <p><b>Email:</b> [User's Email]</p>
                <p><b>Phone:</b> [User's Phone]</p>
                <p><b>Interested service:</b> [User's Selected service]</p>
                <p><b>Preferred time to call:</b> [Selected time slot]</p>
              </div>

              <div className="col-12 col-md-6 mt-5">
                <h3 className="text-center">COMPANY PROFILE VIDEO</h3>
                <div className="video-box text-center mt-3">
                  <iframe src="https://www.youtube.com/embed/nNYE_WR4xgo" loading="lazy" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen title="Company Profile"></iframe>
                </div>
              </div>

              <div className="col-12 mt-5 text-center">
                <button className="download-btn" onClick={() => document.getElementById('pdfInput').click()}>
                  Download Catalogue <i className="fa-regular fa-file-pdf"></i>
                </button>
                <input type="file" id="pdfInput" accept="application/pdf" style={{ display: 'none' }} onChange={(e) => handleFile(e.target.files)} />
              </div>

              <div className="col-12 text-center mt-3">
                <p style={{ fontWeight: 500 }}>
                  In the meantime, feel free to:
                  <br />Visit our website: [Your Website URL]
                  <br />Follow us on Social Media: [Your Social Media Links]
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default MailMsg;

// Add styles in your main CSS or inside a <style> tag in index.html:
// .download-btn, .tick-button { ... your styles from HTML version ... }
