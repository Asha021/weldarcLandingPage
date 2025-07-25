import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const menuItems = [
    { name: 'Home', target: 'home' },
    { name: 'Products', target: 'popular-products' },
    { name: 'Key Differences', target: 'Difference' },
    { name: 'Why Us', target: 'Why Chosse' },
    { name: 'Download', target: 'Download' },
  ];

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 90, // adjust for sticky header
        behavior: 'smooth',
      });
    }
  };

  return (
    <header className="shadow-sm sticky-top">
      {/* Top Contact Bar */}
      <div style={{ backgroundColor: '#dc3545' }} className="text-white py-2 small">
        <div className="container d-flex justify-content-between flex-wrap align-items-center gap-2">
          <div className="d-flex flex-wrap align-items-center gap-1 gap-lg-3">
            <span className="d-flex align-items-center">
              <i className="fa fa-phone me-2"></i> +91 9311102366
            </span>
            <span className="d-flex align-items-center">
              <i className="fa fa-envelope me-2"></i> info@weldarcindia.com
            </span>
          </div>
          <div className="d-flex align-items-center">
            <i className="fa fa-map-marker-alt me-2"></i> 23/7, Near JCB, Ballabgarh
          </div>
        </div>
      </div>

      {/* Navbar */}
      <nav className="navbar navbar-expand-lg bg-white">
        <div className="container">
          {/* Logo */}
          <a className="navbar-brand d-flex align-items-center" href="/">
            <img
              src="/logo.png"
              alt="Weldarc Logo"
              height="50px"
              // width='300px'
              className="me-2"
              style={{ objectFit: 'contain' }}
            />
          </a>

          {/* Toggler */}
          <button
            className="navbar-toggler border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNavbar"
            aria-controls="mainNavbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Nav Links */}
          <div className="collapse navbar-collapse" id="mainNavbar">
            <ul className="navbar-nav nav-underline ms-auto mb-3 mb-lg-0 text-center  text-lg-start gap-lg-4">
              {menuItems.map((item, i) => (
                <li className="nav-item" key={i}>
                  <button
                    className="nav-link fw-semibold text-center  w-sm-100 w-lg-auto text-dark nav-hover bg-transparent "
                    onClick={() => scrollToSection(item.target)}
                    style={{ cursor: 'pointer' }}
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <div className="text-center text-lg-start mt-3 mt-lg-0 ms-lg-4">
              <Link
                to="/contactus"
                className="btn btn-danger px-4 fw-semibold w-100 w-lg-auto"
                style={{ borderRadius: '25px', maxWidth: '200px' }}
              >
                ENQUIRE NOW
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Custom Styles */}
      <style jsx="true">{`
        .nav-hover:hover {
          color: #d1222b !important;
        }
      `}</style>
    </header>
  );
};

export default Header;
// https://script.google.com/macros/s/AKfycbxMQaHivfibX5Eh69VmPYtuWQ7eAS1ChuIpSF_DDRf8LfX3KWVdrynHgz7QGGIoI-Ly/exec