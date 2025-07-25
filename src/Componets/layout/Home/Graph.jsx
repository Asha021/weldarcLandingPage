// import React from "react";

// const data = [
//   { power: "1000W", items: [6, 3, 2] },
//   { power: "1500W", items: [10, 5, 3] },
//   { power: "2000W", items: [16, 8, 6] },
//   { power: "3000W", items: [20, 10, 8] },
//   { power: "4000W", items: [25, 12, 10] },
//   { power: "6000W", items: [30, 16, 12] },
//   { power: "8000W", items: [40, 20, 16] },
//   { power: "12000W", items: [50, 25, 20] },
//   { power: "15000W", items: [60, 30, 25] },
//   { power: "20000W", items: [70, 35, 30] },
//   { power: "30000W", items: [80, 40, 35] },
// ];

// const materials = ["Carbon steel", "Stainless steel", "Aluminum Brass"];
// const thicknessSteps = Array.from({ length: 20 }, (_, i) => (i + 1) * 5);

// const Graph = () => {
//   return (
//     <div
//       className="graph-container"
//       style={{
//         background: "#FCE7E7",
//         padding: "2rem",
//         borderRadius: "12px",
//         overflowX: "auto",
//         fontFamily: "sans-serif",
//       }}
//     >
//       <h2 style={{ textAlign: "center", fontWeight: "700", marginBottom: "1.5rem" }}>
//         CUTTING ABILITY REFERENCE TABLE
//       </h2>

//       <div
//         style={{
//           display: "grid",
//           gridTemplateColumns: "120px 160px repeat(20, 40px)",
//           minWidth: "1000px",
//           border: "1px solid #ccc",
//           background: "#fff",
//           fontSize: "13px",
//         }}
//       >
//         {/* Header Row */}
//         <div
//           style={{
//             gridColumn: "1 / 3",
//             textAlign: "center",
//             fontWeight: "bold",
//             background: "#f8f8f8",
//             padding: "10px",
//             borderRight: "1px solid #ccc",
//             borderBottom: "1px solid #ccc",
//           }}
//         >
//           Laser Power
//         </div>
//         {thicknessSteps.map((t, i) => (
//           <div
//             key={i}
//             style={{
//               textAlign: "center",
//               fontWeight: "600",
//               borderRight: "1px solid #eee",
//               borderBottom: "1px solid #ccc",
//               padding: "10px",
//             }}
//           >
//             {t}mm
//           </div>
//         ))}

//         {/* Table Rows */}
//         {data.map((row, i) => (
//           <React.Fragment key={i}>
//             {materials.map((mat, m) => (
//               <React.Fragment key={m}>
//                 {m === 0 && (
//                   <div
//                     style={{
//                       gridRow: "span 3",
//                       background: "#EFEFEF",
//                       fontWeight: "bold",
//                       display: "flex",
//                       alignItems: "center",
//                       justifyContent: "center",
//                       borderRight: "1px solid #ccc",
//                       borderBottom: "1px solid #eee",
//                       padding: "10px",
//                       textAlign: "center",
//                     }}
//                   >
//                     {row.power}
//                   </div>
//                 )}
//                 <div
//                   style={{
//                     fontSize: "12px",
//                     fontWeight: "500",
//                     background: "#fff",
//                     borderRight: "1px solid #ccc",
//                     borderBottom: "1px solid #eee",
//                     display: "flex",
//                     alignItems: "center",
//                     paddingLeft: "10px",
//                   }}
//                 >
//                   {mat}
//                 </div>
//                 {thicknessSteps.map((_, j) => {
//                   const max = row.items[m];
//                   return (
//                     <div
//                       key={j}
//                       style={{
//                         height: 18,
//                         display: "flex",
//                         alignItems: "center",
//                         justifyContent: "center",
//                         borderRight: "1px solid #eee",
//                         borderBottom: "1px solid #eee",
//                       }}
//                     >
//                       {j < max - 1 && (
//                         <div
//                           style={{
//                             width: "80%",
//                             height: 6,
//                             background: "#bbb",
//                             borderRadius: 2,
//                           }}
//                         />
//                       )}
//                       {j === max - 1 && (
//                         <div
//                           style={{
//                             width: "80%",
//                             height: 6,
//                             background: "orange",
//                             borderRadius: 2,
//                           }}
//                         />
//                       )}
//                     </div>
//                   );
//                 })}
//               </React.Fragment>
//             ))}
//           </React.Fragment>
//         ))}
//       </div>

//       {/* Note */}
//       <div style={{ marginTop: "1.5rem", fontSize: "13px", color: "#333" }}>
//         <strong>Notice:</strong> The above parameters are for reference only!
//         <br />
//         The cutting speed will be influenced by fiber laser, material quality, gas, optical lens and cutting patterns, etc.
//         <br />
//         Actual process parameters will vary according to the situation at site.
//       </div>

//       {/* Legend */}
//       <div style={{ marginTop: 10, fontSize: 12, color: "#666" }}>
//         <span
//           style={{
//             display: "inline-block",
//             width: 24,
//             height: 6,
//             background: "orange",
//             borderRadius: 2,
//             marginRight: 8,
//             verticalAlign: "middle",
//           }}
//         />
//         Maximum cutting thickness (not recommended for long-term use)
//       </div>
//     </div>
//   );
// };

// export default Graph;
import React from 'react';

const Graph = () => {
  return (
    <div
      style={{
        backgroundColor: 'rgb(255, 234, 234)',
        padding: '2rem',
        borderRadius: '10px',
        textAlign: 'center',
      }}
    >
      <h2
  style={{
    fontWeight: 800,
    marginBottom: '1.5rem',
    fontSize: '1.75rem',
    // color: '',
    letterSpacing: '0.5px',
    textTransform: 'uppercase',
    borderBottom: '2px solid black',
    display: 'inline-block',
    paddingBottom: '6px',
  }}
>
  Cutting Ability Reference Table
</h2>

      <img
        src="public/table.png"
        alt="Cutting Ability Table"
        style={{
          maxWidth: '100%',
          height: 'auto',
          display: 'inline-block',
        }}
      />
    </div>
  );
};

export default Graph;
