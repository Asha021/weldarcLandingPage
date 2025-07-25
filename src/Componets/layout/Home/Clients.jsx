import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
// import 'bootstrap/dist/css/bootstrap.min.css';

const logos = [
  { src: '/client/div.logo-item (2).png', alt: 'JCB' },
  { src: '/client/div.logo-item2.png', alt: 'JBM' },
  { src: '/client/div.logo-item (4).png', alt: 'Yamaha' },
  { src: '/client/div.logo-item (5).png', alt: 'Maruti Suzuki' },
  { src: '/client/div.logo-item (6).png', alt: 'Escorts' },
  // { src: '/client/div.logo-item (6).png', alt: 'Escorts' },
  // { src: '/client/div.logo-item (6).png', alt: 'Escorts' },
];

const Clients = () => {
  return (
    <div className="bg-white py-5 text-center container">
      <h2 className="text-danger fw-bold text-uppercase mb-5">
        WELDARC REPRESENTS
        <div className="mx-auto mt-2 bg-danger" style={{ width: '60px', height: '3px' }}></div>
      </h2>

      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        loop={true}
        breakpoints={{
          0: { slidesPerView: 2, spaceBetween: 20 },
          576: { slidesPerView: 3, spaceBetween: 30 },
          992: { slidesPerView: 5, spaceBetween: 30 },
        }}
      >
        {logos.map((logo, idx) => (
          <SwiperSlide key={idx}>
            <div className="card border-0 shadow-sm p-3 mb-3 mx-2" style={{ height: '100px' }}>
              <img
                src={logo.src}
                alt={logo.alt}
                className="img-fluid h-100 object-fit-contain"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Clients;
