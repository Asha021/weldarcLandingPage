import React from "react";

const HeroSec = () => {
  return (
   <section id="home" className="hero-section">
  <div className="hero-overlay">
    <div className="text-center text-white py-5">
 <h1
  className="hero-title display-4 fw-bold text-uppercase"
  data-aos="fade-up"
  style={{
    background: "linear-gradient(90deg, #FF3C3C, #FFD700)", // red to gold/yellow
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    textShadow: "2px 2px 8px rgba(0, 0, 0, 0.4)",
    letterSpacing: "2px"
  }}
>
  Welding & Machine
</h1>

<p
  className="lead fw-bold text-uppercase"
  data-aos="fade-up"
  data-aos-delay="200"
  style={{
    background: "linear-gradient(to right, #ffffff 80%, #f95f0b 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    textShadow: "1px 1px 4px rgba(0,0,0,0.4)",
    fontSize: "1.5rem",
    letterSpacing: "1.2px"
  }}
>
  We Build the Best
</p>

</div>
  </div>

</section>

  );
  
};

export default HeroSec;
