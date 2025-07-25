import React from 'react';
import { useParams } from 'react-router-dom';
import { DynamicPro } from './layout/Home/Product/DynamicPro';

const TableData = () => {
  const { slug } = useParams();
  const product = DynamicPro.find((item) => item.slug === slug);

  if (!product || !product.headers || !product.rows) {
    return null; // Skip rendering if no table data
  }

  return (
    <div className='mt-2 pb-1 pb-sm-2 pb-lg-4' style={{ backgroundColor: "rgb(249, 250, 251)" }}>
      <div className="table-container py-2 d-grid gap-1 mt-5" style={{ width: "90%", margin: "auto" }}>
        <h3 className="text-center mb-3 mt-3 fw-bold fs-2" style={{ color: "#dc3545" }}>
          Characteristics
        </h3>

        <div style={{ overflowX: "auto", WebkitOverflowScrolling: "touch" }}>
          <table className="table table-bordered text-center align-middle w-100" style={{ minWidth: "750px" }}>
            <thead className="table-danger">
              <tr className='table-header'>
              {product.name==="CNC PLASMA FLAME CUTTING MACHINES"  ?(<th style={{ border: '2px solid pink ', display:"none" }}>Specifications</th>):(  <th style={{ border: '2px solid pink ' }}>Specifications</th>)}
                {product.headers.map((header, i) => (
                  <th key={i} style={{ border: '2px solid pink' }}>{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {product.rows.map((row, i) => (
                <tr className='table-data' key={i}>
                  <td style={{ border: '2px solid pink', fontWeight: 'bold' }}>{row.label}</td>
                  {row.values.map((val, j) => (
                    <td key={j} style={{ border: '2px solid pink' }}>{val}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TableData;


// import React from 'react';
// import Data1 from './Data1';
// import tableData from './layout/Home/Product/DynamicPro';
// import { category, products } from './layout/Home/Product/Data';
// import { useParams } from 'react-router-dom';
// import { DynamicPro } from './layout/Home/Product/DynamicPro';

// const TableData = () => {
//   const {slug} = useParams();
//   const product = DynamicPro.find((item)=> item.slug === slug);

//   return (
//     <div className='mt-2  pb-1 pb-sm-2 pb-lg-4' style={{ backgroundColor: " rgb(249, 250, 251)" }}>
//       <div className="table-container py-2 d-grid gap-1 mt-5" style={{ width: "90%", margin: "auto" }}>
//         <h3 className="text-center mb-3 mt-3 fw-bold fs-2" style={{ color: "#dc3545" }}>
//           Characteristics
//         </h3>

//         {/* Scrollable Wrapper */}
//        {product?.name === "CNC FLAME/PLASMA CUTTING MACHINE"?
//         (<div style={{ overflowX: "auto", WebkitOverflowScrolling: "touch" }}>
//           <table className="table table-bordered text-center align-middle w-100" style={{ minWidth: "750px" }}>
//             <thead className="table-danger">
//               <tr className='table-header'>
//                 <th style={{ width: '16%', border: '2px solid pink' }}>Model</th>
//                 <th style={{ width: '16%', border: '2px solid pink' }}>Track Width</th>
//                 <th style={{ width: '16%', border: '2px solid pink' }}>Working Width</th>
//                 <th style={{ width: '16%', border: '2px solid pink' }}>Over All Width</th>
//                 <th style={{ width: '16%', border: '2px solid pink' }}>Over All Length</th>
//                 <th style={{ width: '16%', border: '2px solid pink' }}>Working Length</th>
//               </tr>
//             </thead>
//             <tbody>
//               {Data1.map((item, index) => (
//                 <tr className='table-data' key={index}>
//                   <td style={{ border: '2px solid pink' }}>{item.model}</td>
//                   <td style={{ border: '2px solid pink' }}>{item.trackWidth}</td>
//                   <td style={{ border: '2px solid pink' }}>{item.workingWidth}</td>
//                   <td style={{ border: '2px solid pink' }}>{item.overallWidth}</td>
//                   <td style={{ border: '2px solid pink' }}>{item.overallLength}</td>
//                   <td style={{ border: '2px solid pink' }}>{item.workingLength}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>):
//     (  <div style={{ overflowX: "auto", WebkitOverflowScrolling: "touch" }}>
//           <table className="table table-bordered text-center align-middle w-100" style={{ minWidth: "750px" }}>
//             <thead className="table-danger">
//               <tr>
//                 <th style={{ border: '2px solid pink' }}>Specifications</th>
//                 {tableData.headers.map((header, i) => (
//                   <th key={i} style={{ border: '2px solid pink' }}>{header}</th>
//                 ))}
//               </tr>
//             </thead>
//             <tbody>
//               {tableData.rows.map((row, i) => (
//                 <tr key={i}>
//                   <td style={{ border: '2px solid pink', fontWeight: 'bold' }}>{row.label}</td>
//                   {row.values.map((val, j) => (
//                     <td key={j} style={{ border: '2px solid pink' }}>{val}</td>
//                   ))}
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>)
//        }
         
     

//       </div>
//     </div>
//   );
// };

// export default TableData