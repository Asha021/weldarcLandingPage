import React from "react";
import { Link } from "react-router-dom";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { DynamicPro } from "./layout/Home/Product/DynamicPro";
// import SCrollToTop from './layout/Scroll/ScrollToTop';
// import { useParams } from 'react-router-dom';

// Product Data (you can move this to a separate file if needed)
// const productList = [
//   {
//     id: 1,
//     title: "H-BEAM WELDING MACHINE",
//     image:
//       "public/5.webp",
//       subtitle:"Top edge sheet metal laser cutting, CE&ISO certified.",
//   },
//   {
//     id: 2,
//     title: "H-BEAM WELDING MACHINE (PTW)",
//     image:
//       "public/6.webp",
//       subtitle:"Top edge sheet metal laser cutting, CE&ISO certified.",
//   },
//   {
//     id: 3,
//     title: "CNC PLASMA CUTTING MACHINE",
//     image:
//       "public/8.webp",
//       subtitle:"Top edge sheet metal laser cutting, CE&ISO certified.",
//   },
// ];

const RelatedProduct = () => {
  const navigate = useNavigate();
  const { slug } = useParams();
  const product = DynamicPro.find((p) => p.slug === slug);

  const relatedProducts = DynamicPro.filter(
    (p) => p.category === product.category && p.slug !== product.slug
  );

  // const relatedProducts = DynamicPro.filter(
  //   (p) => p.category === product.category
  // );

  return (
    <div className="py-5" style={{ backgroundColor: "rgb(249, 250, 251)" }}>
      <div className="container">
        <h2 className="text-center fw-bold mb-5" style={{ color: "#dc3545" }}>
          Related Products
        </h2>
        <div className="row g-3">
          {relatedProducts.map((item) => (
            <div className="col-12 col-sm-6 col-md-4" key={item.id}>
              <div
                className="card h-100 shadow-sm border"
                style={{
                  borderRadius: "20px",
                  transition: "transform 0.3s ease",
                }}
              >
                <img
                  src={item.image}
                  className="card-img-top"
                  alt={`Card ${item.id}`}
                  style={{ padding: "20px" }}
                />
                <div
                  className="card-body border-top text-center"
                  style={{ background: "whitesmoke" }}
                >
                  <h5 className="card-title mb-3 fw-semibold">{item.name}</h5>
                  <p>{item.description}</p>
                  <div className="d-flex justify-content-center gap-2">
                    <Link
                      to={`/product/${item.slug}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        // window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                      className="mt-3 btn btn-outline-danger py-2 btn-sm align-self-start"
                      style={{ borderRadius: "20px", fontWeight: 600 }}
                    >
                      READ MORE
                    </Link>

                    <Link
                      to="/contactus"
                      onClick={(e) => e.stopPropagation()}
                      // href={product.link}
                      className="mt-3 btn btn-danger px-4 py-2 btn-sm align-self-start"
                      //  onClick={() => navigate("/contactus")}
                      style={{ borderRadius: "20px", fontWeight: 600 }}
                    >
                      Inquiry
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RelatedProduct;
