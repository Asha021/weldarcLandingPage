import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const WeldarcMac = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section id="Difference"
      className="py-5"
      style={{
        backgroundImage: "url('/about-us-banner.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        position: "relative",
      }}
    >
      {/* Overlay */}
      <div
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          position: "absolute",
          inset: 0,
          zIndex: 0,
        }}
      ></div>

      <div className="container position-relative" style={{ zIndex: 1 }}>
        <h2
          className="text-center fw-bold mb-5 display-5"
          style={{ color: "#fff" }}
          data-aos="fade-down"
        >
        Compare Weldarc with Other Brands
        </h2>

      <div className="row justify-content-center g-4">
  {/* OUR MACHINE CARD */}
  <div className="col-12 col-md-6 col-lg-5" data-aos="zoom-in-right">
    <div
      className="card border-0 shadow-lg text-white h-100 d-flex flex-column"
      style={{
        borderRadius: "20px",
        backdropFilter: "blur(14px)",
        background: "rgba(255,255,255,0.1)",
        boxShadow: "0 8px 30px rgba(0,0,0,0.3)",
        transition: "0.4s ease",
        overflow: "hidden",
        minHeight: "100%",
      }}
    >
      {/* Ribbon badge */}
      <div
        className="position-absolute top-0 start-0 bg-danger text-white px-3 py-1"
        style={{
          borderTopLeftRadius: "20px",
          borderBottomRightRadius: "12px",
          fontSize: "0.85rem",
          fontWeight: "600",
          zIndex: 1,
        }}
      >
        Our Pick
      </div>

      <img
        src="/8.webp"
        alt="Weldarc Machine"
        className="rounded-top img-fluid"
        style={{
          objectFit: "cover",
          height: "220px",
          width: "100%",
        }}
      />

      <div className="card-body d-flex flex-column" style={{ flexGrow: 1 }}>
        <h4 className="text-center text-light fw-bold mb-3">Weldarc Machine</h4>
        <ul className="list-unstyled ps-3" style={{ overflowY: "auto", maxHeight: "200px",color: "#FFAFAF" }}>
          <li style={{ color: "#00ffcc" }}  className="mb-2 fw-medium">✅ 120 m/min Cutting Speed</li>
          <li  style={{ color: "#00ffcc" }}  className="mb-2 fw-medium">✅ 3 KW High-Power Laser</li>
          <li  style={{ color: "#00ffcc" }}  className="mb-2 fw-medium">✅ Auto-Focus Laser Head</li>
          <li  style={{ color: "#00ffcc" }}  className="mb-2 fw-medium">✅ Cuts Steel up to 25mm</li>
          <li  style={{ color: "#00ffcc" }}  className="mb-2 fw-medium">✅ Dual-Drive Gantry System</li>
        </ul>
      </div>
    </div>
  </div> 

  {/* OTHER MACHINE CARD */}
  <div className="col-12  col-md-6 col-lg-5" data-aos="zoom-in-left">
    <div
      className="card border-0 shadow-lg text-white h-100 d-flex flex-column"
      style={{
        borderRadius: "20px",
        backdropFilter: "blur(14px)",
        background: "rgba(255,255,255,0.1)",
        boxShadow: "0 8px 30px rgba(0,0,0,0.3)",
        transition: "0.4s ease",
        overflow: "hidden",
        minHeight: "100%",
      }}
    >
      <img
        src="/5.webp"
        alt="Other Machine"
        className="rounded-top mt-3 img-fluid"
        style={{
          objectFit: "cover",
          height: "220px",
          width: "100%",
        }}
      />

      <div className="card-body d-flex flex-column" style={{ flexGrow: 1 }}>
        <h4 className="text-center text-light fw-bold mb-3">Other Machine</h4>
        <ul className="list-unstyled ps-3" style={{ overflowY: "auto", maxHeight: "200px", color: "#FFAFAF"  }}>
          <li style={{ color: "#FFAFAF"}} className="mb-2  fw-medium">❌ Only 60 m/min Speed</li>
          <li style={{ color: "#FFAFAF"}} className="mb-2  fw-medium">❌ Lower Laser Power</li>
          <li style={{ color: "#FFAFAF"}} className="mb-2  fw-medium">❌ Manual Laser Head</li>
          <li style={{ color: "#FFAFAF"}} className="mb-2  fw-medium">❌ Max 10mm Cutting Thickness</li>
          <li style={{ color: "#FFAFAF"}} className="mb-2  fw-medium">❌ Single-Drive System</li>
        </ul>
      </div>
    </div>
  </div>
</div>
      </div>
    </section>
  );
};

export default WeldarcMac;
