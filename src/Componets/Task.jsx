// import React, { useState, useEffect } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import Table from "./Table";
// import InquiryForm from "./InquiryForm";
// import RelatedProduct from "./RelatedProduct";
// import { galleryData, specificationData, technicalData } from "./data";
// import Gallary from "./Gallary";
// import { useNavigate } from "react-router-dom";
// import TableData from "./TableData";

// const Task = () => {
//   const [mainImage, setMainImage] = useState(galleryData?.[0]?.url);
//   const [activeTab, setActiveTab] = useState("overview");
//   const navigate = useNavigate();

//   // Prevent background scroll
//   useEffect(() => {
//     document.body.style.overflow = "hidden";
//     return () => {
//       document.body.style.overflow = "auto";
//     };
//   }, []);

//   return (
//     <div
//       className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-75"
//       style={{ zIndex: 1050, overflowY: "auto" }}
//     >
//       <div
//         className="container bg-white rounded-4 p-4 mx-auto my-5 position-relative"
//         style={{ maxWidth: "1000px", boxShadow: "0 0 25px rgba(0,0,0,0.3)" }}
//       >
//         {/* ✖ Close Icon */}
//         <div
//           className="position-absolute top-0 end-0 p-3 fs-3 text-secondary fw-bold"
//           style={{ cursor: "pointer" }}
//           onClick={() => navigate("/")}
//         >
//           &times;
//         </div>

//         <div className="row">
//           {/* Image Section */}
//           <div className="col-12 col-lg-6">
//             <div className="mt-4">
//               <img
//                 src={mainImage}
//                 alt="Main"
//                 className="img-fluid rounded mb-3"
//               />
//               <div className="d-flex justify-content-around flex-wrap mb-3">
//                 {galleryData.map((img, i) => (
//                   <img
//                     key={i}
//                     src={img?.url}
//                     alt={`thumb-${i}`}
//                     className="img-thumbnail"
//                     style={{ width: "30%", cursor: "pointer" }}
//                     onClick={() => setMainImage(img?.url)}
//                   />
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Details Section */}
//           <div className="col-12 col-lg-6">
//             <div className="mt-4 mt-lg-0">
//               <div className="text-center my-3">
//                 <span
//                   style={{
//                     fontSize: "25px",
//                     fontWeight: "bold",
//                     color: "#dc3545",
//                   }}
//                 >
//                   CNC Flame/plasma Cutting Machine
//                 </span>
//               </div>

//               <div className="my-4">
//                 {/* Tab Buttons */}
//                 <div className="d-flex flex-wrap justify-content-center gap-2 gap-lg-3 mb-3">
//                   <button
//                     className={`btn custom-tab-btn ${
//                       activeTab === "overview" ? "active" : ""
//                     }`}
//                     onClick={() => setActiveTab("overview")}
//                   >
//                     Overview
//                   </button>
//                   <button
//                     className={`btn custom-tab-btn ${
//                       activeTab === "product" ? "active" : ""
//                     }`}
//                     onClick={() => setActiveTab("product")}
//                   >
//                     Specifications
//                   </button>
//                   <button
//                     className={`btn custom-tab-btn ${
//                       activeTab === "machine" ? "active" : ""
//                     }`}
//                     onClick={() => setActiveTab("machine")}
//                   >
//                     Technical Parameters
//                   </button>
//                 </div>

//                 {activeTab === "overview" && (
//                   <div className="characteristics">
//                     <div
//                       className="d-grid gap-1"
//                       style={{ width: "90%", margin: "auto" }}
//                     >
//                       <h4 className="text-center mt-2 fw-semibold fs-6">
//                         Characteristics
//                       </h4>
//                       <ul
//                         style={{
//                           fontSize: "15px",
//                           color: "black",
//                           fontWeight: 400,
//                           lineHeight: "30px",
//                           listStyle: "none",
//                           paddingLeft: 0,
//                         }}
//                       >
//                         {[
//                           "Quality Machine at Reasonable Price",
//                           "Value for money",
//                           "User friendly Controller",
//                           "Transverse & Longitudinal Rack & Pinion",
//                           "Dual Drive for Accurate and Reliable Performance",
//                         ].map((text, index) => (
//                           <li
//                             key={index}
//                             style={{
//                               display: "flex",
//                               alignItems: "center",
//                               marginBottom: "8px",
//                             }}
//                           >
//                             <i
//                               className="fas fa-check"
//                               style={{ color: "red", marginRight: "10px" }}
//                             ></i>
//                             {text}
//                           </li>
//                         ))}
//                       </ul>

//                       <h4 className="mt-4 fw-semibold fs-6">
//                         Applicable Materials
//                       </h4>
//                       <p style={{ fontSize: "14px", lineHeight: "26px" }}>
//                         CNC plasma cutting machine is controlled by ADPS
//                         compared to ancient plasma cutting torch. The cutting is
//                         straight forward...
//                       </p>
//                     </div>
//                   </div>
//                 )}

//                 {activeTab === "product" && (
//                   <div className="text-center">
//                     <table
//                       className="table table-bordered"
//                       style={{ minWidth: "250px" }}
//                     >
//                       <thead>
//                         <tr>
//                           <th
//                             style={{
//                               textAlign: "start",
//                               backgroundColor: "#ffecec",
//                             }}
//                           >
//                             Name
//                           </th>
//                           <th
//                             style={{
//                               textAlign: "start",
//                               backgroundColor: "#ffecec",
//                             }}
//                           >
//                             Data
//                           </th>
//                         </tr>
//                       </thead>
//                       <tbody>
//                         {specificationData.map((item, index) => (
//                           <tr key={index} style={{ textAlign: "start" }}>
//                             <td>{item.name}</td>
//                             <td>{item.data}</td>
//                           </tr>
//                         ))}
//                       </tbody>
//                     </table>
//                   </div>
//                 )}

//                 {activeTab === "machine" && (
//                   <div>
//                     <h5 className="fw-bold mt-5 mb-3">Technical Parameters</h5>
//                     <table
//                       className="table table-bordered"
//                       style={{ minWidth: "250px" }}
//                     >
//                       <thead>
//                         <tr>
//                           <th
//                             style={{
//                               textAlign: "start",
//                               backgroundColor: "#ffecec",
//                             }}
//                           >
//                             Name
//                           </th>
//                           <th
//                             style={{
//                               textAlign: "start",
//                               backgroundColor: "#ffecec",
//                             }}
//                           >
//                             Data
//                           </th>
//                         </tr>
//                       </thead>
//                       <tbody>
//                         {technicalData.map((item, index) => (
//                           <tr key={index}>
//                             <td>{item.name}</td>
//                             <td>{item.data}</td>
//                           </tr>
//                         ))}
//                       </tbody>
//                     </table>
//                   </div>
//                 )}

//                 {/* PDF Download */}
//                 <div className="card mt-3 shadow-sm border-0">
//                   <div className="card-body">
//                     <h6 className="fw-bold text-uppercase text-secondary">
//                       Download PDF Datasheet
//                     </h6>
//                     <p className="mb-2 small">
//                       Click on download button to get our Product PDF.
//                     </p>
//                     <a href="#" className="btn btn-danger">
//                       <i className="bi bi-file-earmark-arrow-down me-1"></i>
//                       Download PDF
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Other Components */}
//         <TableData />
//         <Gallary />
//         <InquiryForm />
//         <RelatedProduct />
//       </div>
//     </div>
//   );
// };

// export default Task;

import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "./Table";
import InquiryForm from "./InquiryForm";
import RelatedProduct from "./RelatedProduct";
import { galleryData, specificationData, technicalData } from "./data";
import Gallary from "./Gallary";
import { useNavigate } from "react-router-dom";
import TableData from "./TableData";
import { DynamicPro } from "./layout/Home/Product/DynamicPro";
import { useParams } from "react-router-dom";

const Task = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const navigate = useNavigate();
  const { slug } = useParams();
  const product = DynamicPro.find((p) => p.slug === slug);
  // const [mainImage, setMainImage] = useState(product?.angleImg?.[0] || product.image);
  const [mainImage, setMainImage] = useState(null);


   const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 90, // adjust for sticky header
        behavior: 'smooth',
      });
    }
  };
  
  useEffect(()=>{
    if (product?.angleImg?.[0]) {
      setMainImage(product.angleImg[0])
    }else{
      setMainImage(product.image)
    }
  },[product])

  // Prevent background scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div
      className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-75"
      style={{ zIndex: 1050, overflowY: "auto" }}
    >
      <div
        className="container bg-white rounded-4 p-4 mx-auto my-5 position-relative"
        style={{ maxWidth: "1000px", boxShadow: "0 0 25px rgba(0,0,0,0.3)" }}
      >
        {/* ✖ Close Icon */}
        <div
          className="position-absolute top-0 end-0 p-3 fs-3 text-secondary fw-bold"
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/")}
        >
          &times;
        </div>

        <div className="row">
          {/* Image Section */}
          <div className="col-12 col-lg-6">
            <div className="mt-4">
              <img
                src={mainImage}
                alt="Main"
                className="img-fluid rounded mb-3"
              />
              <div className="d-flex justify-content-around flex-wrap mb-3">
                {product.angleImg.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={`thumb-${i}`}
                    className="img-thumbnail"
                    style={{ width: "30%", cursor: "pointer" }}
                    onClick={() => setMainImage(img)}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Details Section */}
          <div className="col-12 col-lg-6">
            <div className="mt-4 mt-lg-0">
              <div className="text-center my-3">
                <span
                  style={{
                    fontSize: "25px",
                    fontWeight: "bold",
                    color: "#dc3545",
                  }}
                >
                  {product.name}
                </span>
              </div>

              <div className="my-4">
                {/* Tab Buttons */}
                <div className="d-flex flex-wrap justify-content-center gap-2 gap-lg-3 mb-3">
                  <button
                    className={`btn custom-tab-btn ${
                      activeTab === "overview" ? "active" : ""
                    }`}
                    onClick={() => setActiveTab("overview")}
                  >
                    Overview
                  </button>
                  <button
                    className={`btn custom-tab-btn ${
                      activeTab === "product" ? "active" : ""
                    }`}
                    onClick={() => setActiveTab("product")}
                  >
                    Specifications
                  </button>
                  <button
                    className={`btn custom-tab-btn ${
                      activeTab === "machine" ? "active" : ""
                    }`}
                    onClick={() => setActiveTab("machine")}
                  >
                    Technical Parameters
                  </button>
                </div>

                {activeTab === "overview" && (
                  <div className="characteristics">
                    <div
                      className="d-grid gap-1"
                      style={{ width: "90%", margin: "auto" }}
                    >
                      <h4 className="text-center mt-2 fw-semibold fs-6">
                        Characteristics
                      </h4>
                      <ul
                        style={{
                          fontSize: "15px",
                          color: "black",
                          fontWeight: 400,
                          lineHeight: "30px",
                          listStyle: "none",
                          paddingLeft: 0,
                        }}
                      >
                        {product.overView.map((text, index) => (
                          <li
                            key={index}
                            style={{
                              display: "flex",
                              alignItems: "center",
                              marginBottom: "8px",
                            }}
                          >
                            <i
                              className="fas fa-check"
                              style={{ color: "#BE1C12", marginRight: "10px" }}
                            ></i>
                            {text}
                          </li>
                        ))}
                      </ul>

                      <h4 className="mt-4 fw-semibold fs-6">
                        Applicable Materials
                      </h4>
                      <p style={{ fontSize: "14px", lineHeight: "26px" }}>
                        {product.ApplicableMaterials}
                      </p>
                    </div>
                  </div>
                )}

                {activeTab === "product" && (
                  <div className="text-center">
                    <table
                      className="table table-bordered"
                      style={{ minWidth: "250px" }}
                    >
                      <thead>
                        <tr>
                          <th
                            style={{
                              textAlign: "start",
                              backgroundColor: "#ffecec",
                            }}
                          >
                            Name
                          </th>
                          <th
                            style={{
                              textAlign: "start",
                              backgroundColor: "#ffecec",
                            }}
                          >
                            Data
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {product.Specifications.map((item, index) => (
                          <tr key={index} style={{ textAlign: "start" }}>
                            <td>{item.name}</td>
                            <td>{item.data}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                {activeTab === "machine" && (
                  <div>
                    <h5 className="fw-bold mt-5 mb-3">Technical Parameters</h5>
                    <table
                      className="table table-bordered"
                      style={{ minWidth: "250px" }}
                    >
                      <thead>
                        <tr>
                          <th
                            style={{
                              textAlign: "start",
                              backgroundColor: "#ffecec",
                            }}
                          >
                            Name
                          </th>
                          <th
                            style={{
                              textAlign: "start",
                              backgroundColor: "#ffecec",
                            }}
                          >
                            Data
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {product.TechnicalParameters.map((item, index) => (
                          <tr key={index}>
                            <td>{item.name}</td>
                            <td>{item.data}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table> 
                    {/* Scrollable tbody */}
                   
                  </div>
                )}

                {/* PDF Download */}
                <div className="card mt-3 shadow-sm border-0">
                  <div className="card-body">
                    <h6 className="fw-bold text-uppercase text-secondary">
                      Download PDF Datasheet
                    </h6>
                    <p className="mb-2 small">
                      Click on download button to get our Product PDF.
                    </p>
                    <a href="#" className="btn btn-danger">
                      <i className="bi bi-file-earmark-arrow-down me-1"></i>
                      Download PDF
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Other Components */}
        <TableData />
        <Gallary />
        <InquiryForm />
        <RelatedProduct />
      </div>
    </div>
  );
};

export default Task;
