import React, { useState } from "react";

const InquiryForm = () => {
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

  const [selectedMachine, setSelectedMachine] = useState("");
  const [productList, setProductList] = useState([]);

  const handleMachineChange = (e) => {
    const value = e.target.value;
    setSelectedMachine(value);
    setProductList(productOptions[value] || []);
  };

  // const InquiryForm = () => {
  return (
    <div className=" container shadow-sm my-5 py-3 px-3">
      <h3
        className="text-center my-4  fs-2 fw-bold"
        style={{ color: "#dc3545" }}
      >
        Request a Quote
      </h3>
   <form className="custom-form container px-2 px-sm-3 px-md-4">
  <div className="row g-3">
    {/* 1st Row */}
    <div className="col-12 col-md-6">
      <input type="text" placeholder="Name*" className="form-control" />
    </div>
    <div className="col-12 col-md-6">
      <input type="email" placeholder="Email*" className="form-control" />
    </div>

    {/* 2nd Row */}
    <div className="col-12 col-md-6">
      <input
        type="text"
        placeholder="Phone or Whatsapp*"
        className="form-control"
      />
    </div>
    <div className="col-12 col-md-6">
      <input type="text" placeholder="Company*" className="form-control" />
    </div>

    {/* 3rd Row */}
    <div className="col-12 col-md-6">
      <input type="text" placeholder="City*" className="form-control" />
    </div>
    <div className="col-12 col-md-6">
      <select className="form-select" onChange={handleMachineChange}>
        <option value="Machine Type">Machine Type*</option>
        <option value="LaserCutting">Laser Cutting</option>
        <option value="PlasmaCutting">Plasma Cutting</option>
        <option value="HBeam">H-Beam (PWT)</option>
        <option value="WeldingAutamation">Welding Autamation</option>
        <option value="FormingMachine">Forming Machine</option>
        <option value="WeldingMachine">Welding Machine</option>
        <option value="PowerSource">Power Source</option>
        <option value="SparesAccessories">Spares & Accessories</option>
      </select>
    </div>

    {/* 4th Row */}
    <div className="col-12 col-md-6">
      <select className="form-select">
        <option value="Product you are interested in">Product you are interested in*</option>
        {productList.map((product, i) => (
          <option key={i} value={product}>
            {product}
          </option>
        ))}
      </select>
    </div>
    <div className="col-12 col-md-6">
      <select className="form-select">
        <option  >
          How did you hear about us*
        </option>
        <option value="1">Search Engine(Google/Yahoo/Other)</option>
        <option value="2">Social Media(Facebook/Twitter/Other)</option>
        <option value="3">Reference (From Contacts)</option>
        <option value="4">Trade Show</option>
      </select>
    </div>

    {/* Message */}
    <div className="col-12">
      <textarea
        className="form-control"
        rows="4"
        placeholder="Message"
      ></textarea>
    </div>

    {/* Consent */}
    <div className="col-12 mt-3">
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
          I hereby consent to Mansoori Weldarc India using the previously
          entered information to contact me about related product and feature
          updates, current offers, and services. I can unsubscribe from these
          communications at any time.
          <br />
          For more information on data protection, please refer to our{" "}
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

    {/* Submit Button */}
    <div className="col-12 d-flex justify-content-center mt-3">
      <button className="btn btn-danger px-4" type="submit">
        SUBMIT
      </button>
    </div>
  </div>
</form>

    </div>
  );
};

export default InquiryForm;
