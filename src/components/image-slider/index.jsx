import { useState } from "react"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./image-slider.css";

export default function ImageSlider({ sprites }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slideArray = Object.values(sprites.other["official-artwork"]);

  function nextSlide() {
    if (currentSlide < slideArray.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  }

  function prevSlide() {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  }

  return (
    <div className="imageSlider">
      {currentSlide > 0 ? (<button className="imageSlider__button" onClick={prevSlide}>
        <FaChevronLeft />
      </button>) : <span />}
      <img src={slideArray[currentSlide]} className="imageSlider__image" />
      {currentSlide < slideArray.length - 1 ? (<button className="imageSlider__button" onClick={nextSlide}>
        <FaChevronRight />
      </button>) : <span />}
    </div>
  );
}