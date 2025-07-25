import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    city: "",
    machineType: "",
    product: "",
    hearAbout: "",
    message: "",
  });

  // const scriptUrl = "https://script.google.com/macros/s/AKfycbzlMNz7PAudh9Dz_3zxGLAQCaFucHpqNbtxLreNvlmyyQWTHOaO2rxSWFibkznGVd0/exec";

  const productOptions = {
    LaserCutting: [
      "Open type fiber laser cutting machine",
      "Enclosed Exchangable table",
      "One type plates & pipes",
    ],
    PlasmaCutting: [
      "CNC Flame plasma cutting machine hypercut",
      "CNC Flame plasma cutting machine sharpcut",
      "Gantry type plasma cutting machine sharpcut",
      "Table type CNC Plasma Cutting Machine",
    ],
    HBeam: [
      "Gantry Welding Machine",
      "Verical Tack Machine",
      "Horizontal Tack Welding",
      "H-Beam Welding Machine(PTW)",
    ],
    WeldingAutamation: [
      "Round Welding Automation",
      "Linear Welding Automation",
    ],
    FormingMachine: [
      "Gear Box Driven Forming Machine",
      "Chain Driven Forming Machine",
    ],
    WeldingMachine: [
      "MIG Welding Machine",
      "ARC Welding Machine",
      "TIG Welding Machine",
      "AC DC TIG Welding Machine",
    ],
    PowerSource: [
      "Power Source RAYCUS/IPG",
      "Laser head WSX/RAYTOOLS",
      "BM111 Laser Cutting Head",
    ],
    SparesAccessories: ["Fuel GAS Type Argon Welding Torch"],
  };

  const [productList, setProductList] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => {
      const newState = {
        ...prev,
        [name]: value,
      };
      if (name === "machineType") {
        setProductList(productOptions[value] || []);
        newState.product = ""; // reset product
      }
      return newState;
    });
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  const scriptUrl = "https://script.google.com/macros/s/AKfycbzlMNz7PAudh9Dz_3zxGLAQCaFucHpqNbtxLreNvlmyyQWTHOaO2rxSWFibkznGVd0/exec";
  const encoded = new URLSearchParams(formData).toString();

  try {
    await fetch(scriptUrl, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: encoded,
    });

    alert("Submitted!");

    // Clear form
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      city: "",
      machineType: "",
      product: "",
      hearAbout: "",
      message: "",
    });
    setProductList([]);
  } catch (error) {
    console.error("Submit error:", error);
  }
};



  return (
    <div
      className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
      style={{ backgroundColor: "rgba(0,0,0,0.5)", zIndex: 1050 }}
    >
      <div
        className="bg-white rounded shadow-lg p-4 w-100 mx-3"
        style={{ maxWidth: "720px", position: "relative" }}
      >
        <button
          className="btn-close position-absolute top-0 end-0 m-3"
          onClick={() => navigate("/")}
          aria-label="Close"
        ></button>
        <h3 className="text-center my-3 fs-2 fw-bold text-danger">
          Request a Quote
        </h3>
        <form className="custom-form" onSubmit={handleSubmit}>
          <div className="row g-3">
            <div className="col-12 col-md-6">
              <input
                type="text"
                name="name"
                value={formData.name}
                placeholder="Name*"
                onChange={handleChange}
                className="form-control"
              />
            </div>
            <div className="col-12 col-md-6">
              <input
                type="email"
                name="email"
                value={formData.email}
                placeholder="Email*"
                onChange={handleChange}
                className="form-control"
              />
            </div>
            <div className="col-12 col-md-6">
              <input
                type="text"
                name="phone"
                value={formData.phone}
                placeholder="Phone or Whatsapp*"
                maxLength={10}
                onChange={handleChange}
                className="form-control"
              />
            </div>
            <div className="col-12 col-md-6">
              <input
                type="text"
                name="company"
                value={formData.company}
                placeholder="Company*"
                onChange={handleChange}
                className="form-control"
              />
            </div>
            <div className="col-12 col-md-6">
              <input
                type="text"
                name="city"
                value={formData.city}
                placeholder="City*"
                onChange={handleChange}
                className="form-control"
              />
            </div>
            <div className="col-12 col-md-6">
              <select
                name="machineType"
                value={formData.machineType}
                className="form-select"
                onChange={handleChange}
              >
                <option value="" disabled>
                  Machine Type*
                </option>
                {Object.keys(productOptions).map((key) => (
                  <option key={key} value={key}>
                    {key}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-12 col-md-6">
              <select
                className="form-select"
                name="product"
                onChange={handleChange}
                value={formData.product}
              >
                <option value="" disabled>
                  Product you are interested in*
                </option>
                {productList.map((product, i) => (
                  <option key={i} value={product}>
                    {product}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-12 col-md-6">
              <select
                className="form-select"
                name="hearAbout"
                value={formData.hearAbout}
                onChange={handleChange}
              >
                <option value="" disabled>
                  How did you hear about us*
                </option>
                <option value="1">Search Engine(Google/Yahoo/Other)</option>
                <option value="2">Social Media(Facebook/Twitter/Other)</option>
                <option value="3">Reference (From Contacts)</option>
                <option value="4">Trade Show</option>
              </select>
            </div>
            <div className="col-12">
              <textarea
                value={formData.message}
                name="message"
                onChange={handleChange}
                className="form-control"
                rows="4"
                placeholder="Message"
              ></textarea>
            </div>
            <div className="col-12 mt-2">
              <div className="form-check d-flex align-items-start gap-2">
                <input
                  type="checkbox"
                  
                  className="form-check-input mt-1"
                  id="consentCheckbox"
                />
                <label
                  htmlFor="consentCheckbox"
                  className="form-check-label"
                  style={{ fontSize: "12px", lineHeight: "1.5" }}
                >
                  I hereby consent to Mansoori Weldarc India using the
                  previously entered information to contact me about related
                  product and feature updates, current offers, and services. I
                  can unsubscribe from these communications at any time.
                  <br />
                  For more information on data protection, please refer to our{" "}
                  See our{" "}
                  <a
                    href="/privacy-policy"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    privacy policy
                  </a>
                  .
                </label>
              </div>
            </div>
            <div className="col-12 d-flex justify-content-center mt-3">
              <button className="btn btn-danger px-4" type="submit">
                SUBMIT
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
