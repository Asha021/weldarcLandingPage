import React from 'react';

const Gallary = () => {
  const images = [
    'https://5.imimg.com/data5/SELLER/Default/2025/4/504437548/IN/GI/YA/35093048/cnc-plasma-cutting-machine.jpg',
    'https://5.imimg.com/data5/SELLER/Default/2024/11/464738811/IV/WQ/FK/24101273/cnc-table-top-plasma-cutting-machine-500x500.jpeg',
    'https://5.imimg.com/data5/SELLER/Default/2025/4/504437548/IN/GI/YA/35093048/cnc-plasma-cutting-machine.jpg',
    'https://wxfengwei.usa18.wondercdn.com/uploads/image/5da198dc7b404.jpg'
  ];

  return (
    <div className="container py-5 px-3">
      <h3 className="text-center fs-2 mb-4 fw-bold" style={{ color: "#dc3545" }}>
        Cutting Sample
      </h3>
      <div className="row g-3 justify-content-center">
        {images.map((src, index) => (
          <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={index}>
            <div className="rounded border" style={{ borderColor: "#E0E0E0" }}>
              <img
                src={src}
                alt={`img-${index}`}
                className="img-fluid rounded"
                style={{ width: "100%", height: "auto", objectFit: "cover" }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallary;
