// import React, { useState } from "react";
// import { category, products } from "./Data";
// import {useNavigate} from "react-router-dom"
// import { Link } from "react-router-dom";
// import { DynamicPro } from "./DynamicPro";
// // import { useParams } from "react-router-dom";

// const ProductSec = () => {
//   const categories = category();
//   const navigate = useNavigate();
//   // const {slug} = useParams();
//   const [activeFilter, setActiveFilter] = useState("all");
//   const [showAll, setShowAll] = useState(false);

//   // Filter logic
//   const filteredProducts =
//     activeFilter === "all"
//       ? products
//       : products.filter((p) => p.category === activeFilter);

//   const visibleProduct = showAll
//     ? filteredProducts
//     : filteredProducts.slice(0, 8);

//   // const visibleProduct = filteredProducts.slice(0,visibleCount)
//   const handleToggle = () => {
//     setShowAll((prev) => !prev);
//   };

//   return (
//     <section className="py-5" id="popular-products">
//       <div className="container product-section">
//         <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center mb-3">
//           <ul
//             className="nav nav-pills flex-wrap justify-content-center gap-2 py-2"
//             id="productFilter"
//             style={{
//               fontWeight: "600",
//               fontSize: "0.95rem",
//               backgroundColor: "#fff",
//               borderRadius: "8px",
//               boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
//               marginBottom: "30px",
//             }}
//           >
//             {categories.map((cat, i) => {
//               const isActive = activeFilter === cat.filter;
//               return (
//                 <li className="nav-item" key={i}>
//                   <a
//                     className={`nav-link px-3 py-2 ${isActive ? "active" : ""}`}
//                     href="#"
//                     onClick={(e) => {
//                       e.preventDefault();
//                       setActiveFilter(cat.filter);
//                     }}
//                     style={{
//                       color: isActive ? "#fff" : "#CC1F25",
//                       backgroundColor: isActive ? "#CC1F25" : "#fff",
//                       border: "1px solid #CC1F25",
//                       borderRadius: "30px",
//                       transition: "all 0.3s ease",
//                     }}
//                     onMouseEnter={(e) => {
//                       e.target.style.backgroundColor = "#CC1F25";
//                       e.target.style.color = "#fff";
//                     }}
//                     onMouseLeave={(e) => {
//                       if (!isActive) {
//                         e.target.style.backgroundColor = "#fff";
//                         e.target.style.color = "#CC1F25";
//                       }
//                     }}
//                   >
//                     {cat.name}
//                   </a>
//                 </li>
//               );
//             })}
//           </ul>
//         </div>

//         {/* Product Grid */}
//         <div className="row g-4" id="productGrid">
//           {visibleProduct.map((product, index) => (
//             <div
//               key={index}
//               className="col-12 col-md-6 col-lg-3 product-card"
//               data-category={product.category}
//             >
//               <div
//                 className="card border shadow-sm h-100 position-relative overflow-hidden"
//                 style={{ borderRadius: "12px", transition: "transform 0.3s" }}
//                 onClick={() => (window.location.href = product.link)}
//                 onMouseEnter={(e) =>
//                   (e.currentTarget.style.transform = "scale(1.02)")
//                 }
//                 onMouseLeave={(e) =>
//                   (e.currentTarget.style.transform = "scale(1)")
//                 }
//               >
//                 <div
//                   className="card-img-top overflow-hidden"
//                   style={{ maxHeight: "200px" }}
//                 >
//                   <img
//                     src={product.image}
//                     alt={product.title}
//                     className="img-fluid w-100"
//                     style={{ objectFit: "cover", height: "200px" }}
//                   />
//                 </div>
//                 <div className="card-body d-flex border-top flex-column justify-content-between">
//                   <div>
//                     <h6 className="card-title fw-bold text-dark">
//                       {product.name}
//                     </h6>
//                     <p
//                       className="card-text text-muted small"
//                       dangerouslySetInnerHTML={{ __html: product.description }}
//                     ></p>
//                   </div>
//                  <div className="d-flex  align-content-center justify-content-around">
//                     <Link
//                     to={product.seeMoreLink}
//                     onClick={(e) => e.stopPropagation()}
//                     className="mt-3 btn btn-outline-danger py-2 btn-sm align-self-start"
//                     // onClick={() => navigate("/task")}// prevent parent click
//                     style={{ borderRadius: "20px", fontWeight: 600 }}
//                   >
//                     READ MORE
//                   </Link>
//                    <Link to={product.inquiryLink}
//                    onClick={(e) => e.stopPropagation()}
//                     // href={product.link}
//                     className="mt-3 btn btn-danger px-4 py-2 btn-sm align-self-start"
//                   //  onClick={() => navigate("/contactus")}
//                     style={{ borderRadius: "20px", fontWeight: 600 }}
//                   >
//                     Inquiry
//                   </Link>
//                  </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {filteredProducts.length > 8 && (
//           <div className="d-flex justify-content-center">
//             <button
//               id="seeMoreBtn"
//               onClick={handleToggle}
//               className="btn btn-danger ms-lg-3 mt-3 mt-lg-5"
//               style={{ borderRadius: "5px", fontWeight: 500 }}
//             >
//               {showAll ? "See Less" : "See More"}
//             </button>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// };

// export default ProductSec;





import React, { useState } from "react";
import { category, products } from "./Data";
import {useNavigate} from "react-router-dom"
import { Link } from "react-router-dom";
import { DynamicPro } from "./DynamicPro";
// import { useParams } from "react-router-dom";

const ProductSec = () => {
  const categories = category();
  const navigate = useNavigate();
  // const {slug} = useParams();
  const [activeFilter, setActiveFilter] = useState("all");
  const [showAll, setShowAll] = useState(false);

  // Filter logic
  const filteredProducts =
    activeFilter === "all"
      ? products
      : products.filter((p) => p.category === activeFilter);

  const visibleProduct = showAll
    ? filteredProducts
    : filteredProducts.slice(0, 8);

  // const visibleProduct = filteredProducts.slice(0,visibleCount)
  const handleToggle = () => {
    setShowAll((prev) => !prev);
  };

  return (
    <section className="py-5" id="popular-products">
      <div className="container product-section">
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center mb-3">
          <ul
            className="nav nav-pills flex-wrap justify-content-center gap-2 py-2"
            id="productFilter"
            style={{
              fontWeight: "600",
              fontSize: "0.95rem",
              backgroundColor: "#fff",
              borderRadius: "8px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
              marginBottom: "30px",
            }}
          >
            {/* {categories.map((cat, i) => {
              const isActive = activeFilter === cat.filter;
              return (
                <li className="nav-item" key={i}>
                  <a
                    className={`nav-link px-3 py-2 ${isActive ? "active" : ""}`}
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveFilter(cat.filter);
                    }}
                    style={{
                      color: isActive ? "#fff" : "#CC1F25",
                      backgroundColor: isActive ? "#CC1F25" : "#fff",
                      border: "1px solid #CC1F25",
                      borderRadius: "30px",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = "#CC1F25";
                      e.target.style.color = "#fff";
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) {
                        e.target.style.backgroundColor = "#fff";
                        e.target.style.color = "#CC1F25";
                      }
                    }}
                  >
                    {cat.name}
                  </a>
                </li>
              );
            })} */}
          </ul>
        </div>

        {/* Product Grid */}
        <div className="row g-4" id="productGrid">
          {DynamicPro.map((product, index) => (
            <div
              key={index}
              className="col-12 col-md-6 col-lg-3 product-card"
              data-category={product.category}
            >
              <div
                className="card border shadow-sm h-100 position-relative overflow-hidden"
                style={{ borderRadius: "12px", transition: "transform 0.3s" }}
                onClick={() => (window.location.href = product.link)}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "scale(1.02)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              >
                <div
                  className="card-img-top overflow-hidden"
                  style={{ maxHeight: "200px" }}
                >
                  <img
                    src={product.image}
                    alt={product.title}
                    className="img-fluid w-100"
                    style={{ objectFit: "cover", height: "200px" }}
                  />
                </div>
                <div className="card-body d-flex border-top flex-column justify-content-between">
                  <div>
                    <h6 className="card-title fw-bold text-dark">
                      {product.name}
                    </h6>
                    <p
                      className="card-text text-muted small"
                      dangerouslySetInnerHTML={{ __html: product.description }}
                    ></p>
                  </div>
                 <div className="d-flex  align-content-center justify-content-around">
                    <Link
                    to={`/product/${product.slug}`}
                    onClick={(e) => e.stopPropagation()}
                    className="mt-3 btn btn-outline-danger py-2 btn-sm align-self-start"
                    // onClick={() => navigate("/task")}// prevent parent click
                    style={{ borderRadius: "20px", fontWeight: 600 }}
                  >
                    READ MORE
                  </Link>
                   <Link to="/contactus"
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

        {filteredProducts.length > 8 && (
          <div className="d-flex justify-content-center">
            <button
              id="seeMoreBtn"
              onClick={handleToggle}
              className="btn btn-danger ms-lg-3 mt-3 mt-lg-5"
              style={{ borderRadius: "5px", fontWeight: 500 }}
            >
              {showAll ? "See Less" : "See More"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductSec;
