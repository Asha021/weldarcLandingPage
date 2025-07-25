import React from "react";

const Table = () => {
  return (
    <div className='tble' >
    <div
      className="table-container d-grid gap-1"
      style={{ width: "90%", margin: "auto", marginTop: "50px" }}
    >
      <h3 className="text-center mb-4 fw-bold">Characteristics</h3>
      table
      <div className="container-fluid my-4 px-0">
        <div className="table-responsive">
          <table
            className="table text-center"
            style={{
              borderCollapse: "collapse",
              width: "100%",
            }}
          >
            <thead>
              <tr>
                {[
                  "Model Name",
                  "Track Width",
                  "Working Width",
                  "Over All Width",
                  "Over All Length",
                  "Working Length",
                ].map((head, index) => (
                  <th
                    key={index}
                    style={{
                      fontWeight: "500",
                      backgroundColor: "pink",
                      fontSize: "14px",
                      border: "1px solid pink",
                    }}
                  >
                    {head}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                {
                  model: "SharpCut-2508",
                  track: "2500 mm",
                  working: "1800 mm",
                  overallW: "2700 mm",
                  overallL: "8000 mm",
                  workingL: "6500 mm",
                },
                {
                  model: "SharpCut-3008",
                  track: "3000 mm",
                  working: "2000 mm",
                  overallW: "3200 mm",
                  overallL: "8500 mm",
                  workingL: "7000 mm",
                },
                {
                  model: "SharpCut-3508",
                  track: "3500 mm",
                  working: "2300 mm",
                  overallW: "3700 mm",
                  overallL: "9000 mm",
                  workingL: "7500 mm",
                },
                {
                  model: "SharpCut-4008",
                  track: "4000 mm",
                  working: "2600 mm",
                  overallW: "4200 mm",
                  overallL: "9500 mm",
                  workingL: "8000 mm",
                },
                {
                  model: "SharpCut-4508",
                  track: "4500 mm",
                  working: "2900 mm",
                  overallW: "4700 mm",
                  overallL: "10000 mm",
                  workingL: "8500 mm",
                },
              ].map((item, index) => (
                <tr key={index} style={{ fontSize: "12px" }}>
                  <td style={{ border: "1px solid pink" }}>{item.model}</td>
                  <td style={{ border: "1px solid pink" }}>{item.track}</td>
                  <td style={{ border: "1px solid pink" }}>{item.working}</td>
                  <td style={{ border: "1px solid pink" }}>{item.overallW}</td>
                  <td style={{ border: "1px solid pink" }}>{item.overallL}</td>
                  <td style={{ border: "1px solid pink" }}>{item.workingL}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
     </div>
  );
};
export default Table;
