import React from "react";
import Slider from "react-slick";
import { FaChair, FaUser, FaMapMarkerAlt } from "react-icons/fa"; // Icons for logos
import "../css/imgSlider.css"; // Import custom CSS for styling
const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Change image every 3 seconds
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {/* Image and Text Slide 1 */}
        <div className="slide">
  <img src="img-s1.jpg" alt="Slider Image 1" className="slider-image" />
  <div className="slider-text">
    <p className="text-line1">Since Jan 20, 2000</p>
    <h2 className="text-line2">Exclusive Event Management Service</h2>
    <h2 className="text-line3">A2Z Marketing</h2>
    <div className="text-line4">
      <div className="logo-text">
        <FaChair color="#faaC1D" fontSize="24px" />
        <span> Strategy</span>
      </div>
      <div className="logo-text">
        <FaUser color="#faaC1D" fontSize="24px" />
        <span> Ideation</span>
      </div>
      <div className="logo-text">
        <FaMapMarkerAlt color="#faaC1D" fontSize="24px" />
        <span> Implementation</span>
      </div>
    </div>
  </div>
</div>

        {/* Image and Text Slide 2 */}
        <div className="slide">
          <img src="img-s2.jpg" alt="Slider Image 2" className="slider-image" />
          <div className="slider-text">
            <p className="text-line1">Since Jan 20, 2000</p>
            <h2 className="text-line2">Exclusive Event Management Service</h2>
            <h2 className="text-line3">A2Z Marketing</h2>
            <div className="text-line4">
              <div className="logo-text">
                <FaChair color="#faaC1D" fontSize="24px" />
                <span> Strategy</span>
              </div>
              <div className="logo-text">
                <FaUser color="#faaC1D" fontSize="24px" />
                <span> Ideation</span>
              </div>
              <div className="logo-text">
                <FaMapMarkerAlt color="#faaC1D" fontSize="24px" />
                <span> Implementation</span>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default ImageSlider;
