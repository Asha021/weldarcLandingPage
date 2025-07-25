import React from 'react';
import { FaLock } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaFilePdf } from 'react-icons/fa';
import { FaMicroscope } from 'react-icons/fa';

const CTA = () => {
  return (
    <section id='Download'  className="py-5 mt-5 position-relative" style={{ background: 'linear-gradient(120deg, #fff0f0, #ffeaea)' }}>
      <div
        className="container position-relative"
        style={{
          zIndex: 2,
        }}
      >
        <div 
          className="glass-card border-0 rounded-4 shadow-lg px-4 px-md-5 py-5 d-flex flex-column flex-md-row align-items-center justify-content-between gap-4"
          data-aos="fade-up"
        >
          {/* Text Section */}
          <div className="text-center text-md-start">
            <h2 className="fw-bold text-dark mb-2" style={{ letterSpacing: '0.5px' }}>
              Looking for a Complete Industrial Solution?
            </h2>
            <p className="mb-0 text-muted" style={{ fontSize: '1.1rem' }}>
              Contact us today for a free consultation or more information.
            </p>
          </div>

          {/* CTA Button */}
          <a
            href="/brochure.pdf"
            className="btn btn-danger px-4 py-3 d-flex align-items-center fw-semibold shadow border-0"
            style={{
              borderRadius: '12px',
              fontSize: '1rem',
              transition: 'all 0.3s ease',
            }}
          >
            Download Brochure <FaFilePdf className="ms-2" />
          </a>
        </div>
      </div>

     {/* Floating Big Lock Icon */}
<div
  className="position-absolute top-0 start-50 translate-middle z-1"
  style={{
    width: '70px',
    height: '70px',
    background: 'linear-gradient(145deg, #dc3545, #a50000)',
    color: 'white',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '2rem',
    boxShadow: '0 12px 24px rgba(220, 53, 69, 0.4)',
    transform: 'translate(-50%, -50%)',
    border: '5px solid white',
  }}
>
 <FaMicroscope /> 
</div>

    </section>
  );
};

export default CTA;
