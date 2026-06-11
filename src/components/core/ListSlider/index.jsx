import React from 'react';
import Slider from 'react-slick';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import './ListSlider.css';

const CustomArrow = ({ className, style, onClick, direction }) => (
  <div
    className={className}
    style={{
      ...style,
      display: 'block',
      background: 'rgba(0, 0, 0, 0.5)',
      borderRadius: '50%',
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      zIndex: 2,
      [direction]: '10px', // left or right positioning
    }}
    onClick={onClick}
  >
    {direction === 'left' ? <FaArrowLeft /> : <FaArrowRight />}
  </div>
);

const ListSlider = ({ type, items, title, autoplaySpeed }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: parseInt(autoplaySpeed),
    nextArrow: <CustomArrow direction="right" />,
    prevArrow: <CustomArrow direction="left" />,
  };

  return (
    <div className="mt-2 bg-white rounded-xl shadow-md overflow-hidden">
      <div className="p-3 pb-0">
        <h6 className="text-primary font-bold text-sm">{title}</h6>
        <Slider {...settings}>
          {items.map((item, index) => (
            <div key={index} className="image-slide relative">
              <img
                src={`/assets/${type}/${index + 1}.png`}
                alt={item.name}
                className="w-full"
              />
              <div className="image-caption absolute bottom-2 left-2 flex items-center gap-2 bg-white/80 rounded-md p-1">
                <span className="name font-medium">{item.name}</span>
                <img
                  src={`/assets/staff/${item.image}`}
                  alt={item.name}
                  className="w-8 h-8 rounded-full object-cover"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ListSlider;
