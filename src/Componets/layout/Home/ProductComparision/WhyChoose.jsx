import React, { useEffect, useRef,useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const features = [
  {
    title: "Research & Technology",
    description:
      "We deliver innovative solutions through original thinking, driving future-ready machinery and systems.",
    image: "/6.webp",
    icon: "fa-solid fa-lightbulb",
    bg: "#F9F9F9",
  },
  {
    title: "Customized Solutions",
    description:
      "Tailored engineering built around your industry’s requirements with scalable, adaptable systems.",
    image: "/5.webp",
    icon: "fa-solid fa-puzzle-piece",
    bg: "#FFF7F3",
  },
  {
    title: "Service & Support",
    description:
      "We stand with you — from consultation to commissioning, training, and post-sales service.",
    image: "/8.webp",
    icon: "fa-solid fa-headset",
    bg: "#F4FBFF",
  },
  {
    title: "Precision Machinery",
    description:
      "Engineered with high tolerance and efficiency, our systems guarantee accurate and reliable operations.",
    image: "/6.webp",
    icon: "fa-solid fa-screwdriver-wrench",
    bg: "#F8F8F8",
  },
];

const WhyChoose = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const sectionRefs = useRef([]);

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

const scrollToFeature = (index) => {
  const offset = 120; // adjust based on your fixed navbar height
  const el = sectionRefs.current[index];
  if (el) {
    setActiveIndex(index);
    const y = el.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
};

  // const scrollToFeature = (index) => {
  //   setActiveIndex(index);
  //   // Your scroll logic here (like scrolling to the feature section)
  // };

  return (
    <section className="py-4" id="Why Chosse">
      <div className="container ">
        {/* Heading Section */}
        <div className="text-center position-relative mb-5" data-aos="fade-up">
          <h2 className="fw-bold display-4 my-1" style={{ color: "#000", textTransform: "uppercase", letterSpacing: "1.5px", position: "relative", zIndex: 1 }}>
            Why Choose <span style={{ color: "#CC1F25" }}>Mansoori Weldarc</span>
          </h2>
          <p className="mt-2" style={{ fontSize: "1.1rem", fontWeight: "500", color: "#555", maxWidth: "700px", margin: "0 auto" }}>
            Delivering precision, power & performance that redefine industry standards
          </p>
          <div className="mx-auto mt-3" style={{ width: "120px", height: "4px", background: "linear-gradient(to right, #CC1F25, #F77F00)", borderRadius: "4px" }}></div>
          <div className="d-none d-md-block" style={{ position: "absolute", top: "-30px", left: "50%", transform: "translateX(-50%)", zIndex: 0, opacity: 0.05, fontSize: "8rem", fontWeight: "900", color: "#CC1F25", textTransform: "uppercase", whiteSpace: "nowrap" }}>
            Excellence
          </div>
        </div>

        {/* Fixed Sidebar Options */}
       <div className="row" >
  {/* Sidebar Column */}
  <div className="col-lg-3 mb-4">
  <div className="position-sticky" style={{ top: '110px', zIndex: 10 }}>
    <div className="card border-0  overflow-hidden">
      {/* <div className="card-header bg-white text-center fw-bold fs-5 py-3 border-bottom">
        Features
      </div> */}
      <div className="list-group list-group-flush">
        {features.map((feature, index) => (
          <div
            key={index}
            onClick={() => scrollToFeature(index)}
         className={`list-group-item border border-2 border-black rounded-3  mb-2 btn-outline-danger list-group-item-action py-3 px-4 custom-hover ${activeIndex === index ? 'active-feature' : ''}`}
            // className=" list-group-item-action py-3 px-4 but"
            style={{
              cursor: 'pointer',
              fontWeight: 500,
               borderTop:"4px solid black !important "
              // borderLeft: '4px solid transparent',
            }}
          >
            {feature.title}
          </div>
        ))}
      </div>
    </div>
  </div>
</div>

{/* </div> */}


          {/* Dynamic Content Section (all visible) */}
          <div className="col-lg-9 mt-3">
            {features.map((item, index) => (
              <div
                key={index}
                ref={(el) => (sectionRefs.current[index] = el)}
              className="row my-hover border-2 border border-danger rounded-3 g-3 mb-4 py-3 px-md-4"
                style={{ backgroundColor: item.bg }}
                data-aos="fade-up"
              >
                <div className="col-md-6">
                  <div
                    className="rounded"
                    style={{
                      height: "250px",
                      backgroundImage: `url(${item.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      width: "100%",
                    }}
                  ></div>
                </div>
                <div className="col-md-6">
                  <div>
                    <div className="d-flex align-items-center mb-2">
                      <i className={`${item.icon} me-2`} style={{ fontSize: "1.5rem", color: "#CC1F25" }}></i>
                      <h5 className="mb-0 fw-semibold">{item.title}</h5>
                    </div>
                    <p style={{ fontSize: "0.95rem", marginBottom: 0 }}>{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
