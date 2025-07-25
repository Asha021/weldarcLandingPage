// Data.js

// Export products array
export const products = [
 {
  
  image:"public/weldarcimg/1.webp",
  name:"OPEN TYPE SINGLE TABLE MACHINE",
  category: "LaserCutting", // ✅ MUST MATCH the category filter
  // title: "Laser Machine",
  description: "Top edge sheet metal laser cutting, CE&ISO certified.",
  seeMoreLink: "/product",
  inquiryLink: "/contactus"
}
,
  {
    image: "public/weldarcimg/2.webp",
    name:"ENCLOSED EXCHANGABLE TABLE MACHINE",
  
    description: "Top edge sheet metal laser cutting, CE&ISO certified.",
    seeMoreLink: "/product",
    inquiryLink: "/contactus"
  },
  {
    image: "public/weldarcimg/3.webp",
        name:"OPEN TYPE PLATES AND PIPES",
    // category: "HBeam",
    title: "H-BEAM WELDING MACHINE",
    description: "Top edge sheet metal laser cutting, CE&ISO certified.",
    seeMoreLink: "/product",
  inquiryLink: "/contactus"
  },
  {
    image: "public/weldarcimg/4.webp",
        name:"OPEN TYPE EXCHANGABLE TABLE",
    category: "Laser Cutting",
    title: "Laser Cutting",
    description: "Top edge sheet metal laser cutting, CE&ISO certified.",
    seeMoreLink: "/product",
  inquiryLink: "/contactus"
  },
  {
    image: "public/weldarcimg/5.webp",
    category: "HBeam",
        name:"H-BEAM WELDING MACHINE",
    title: "H-BEAM WELDING MACHINE",
    description: "Top edge sheet metal laser cutting, CE&ISO certified.",
    seeMoreLink: "/product",
  inquiryLink: "/contactus"
  },
  {
    image: "public/weldarcimg/6.webp",
    category: "HBeam",
      name: "H-BEAM WELDING MACHINE(PTW)",
    title: "H-BEAM WELDING MACHINE",
    description: "Top edge sheet metal laser cutting, CE&ISO certified.",
    seeMoreLink: "/product",
  inquiryLink: "/contactus"
  },
  {
    image: "public/weldarcimg/7.webp",
    // category: "HBeam",
      name: "ROBOTIC WELDING HAND AND MACHINE",
    title: "H-BEAM WELDING MACHINE",
    description: "Top edge sheet metal laser cutting, CE&ISO certified.",
  seeMoreLink: "/product",
  inquiryLink: "/contactus"
  },
  {
    image: "public/weldarcimg/8.webp",
    // category: "HBeam",
    name: "CNC PLASMA CUTTING MACHINE",
     category: "PlasmaCutting",
    title: "Plasma Cutter",
    description: "Top edge sheet metal laser cutting, CE&ISO certified.",
   seeMoreLink: "/product",
  inquiryLink: "/contactus"
  }
];

// Export categories array
export const category = () => {
  const categories = [
    { name: "All", filter: "all" },
    { name: "Laser Cutting", filter: "LaserCutting" },
    { name: "Plasma Cutting", filter: "PlasmaCutting" },
    { name: "H-Beam (PWT)", filter: "HBeam" },
    { name: "Welding Autamation", filter: "WeldingAutamation" },
    { name: "Forming Machine", filter: "FormingMachine" },
    { name: "Welding Machine", filter: "WeldingMachine" },
    { name: "Power Source", filter: "PowerSource" },
    { name: "Spares & Accessories", filter: "SparesAccessories" }
  ];
  return categories;
};
