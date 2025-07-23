import { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./style.css";

export default function ImageSlider({ url, limit = 5 }) {
  const [images, setImages] = useState([]);
  const [current, setCurrent] = useState(0);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  async function fetchImages(url) {
    try {
      const response = await fetch(`${url}?page=1&limit=${limit}`);
      const data = await response.json();
      if (data) {
        setImages(data);
        setIsLoading(false);
      }
    } catch (e) {
      setError(e.message);
      setIsLoading(false);
    }
  }

  useEffect(() => {
    if (url !== "") fetchImages(url);
  }, [url]);
  if (isLoading) {
    console.log(images);
    return <div>Loading data...</div>;
  }
  if (error !== null) {
    return <div>Error message: {error}</div>;
  }

  function handlePrev() {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  }
  function handleNext() {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  }

  return (
    <div className="container">
      <BsArrowLeftCircleFill
        onClick={handlePrev}
        className="arrow arrow-left"
      />
      {images && images.length
        ? images.map((image, index) => (
            <img
              key={image.id}
              src={image.download_url}
              alt={image.download_url}
              className={
                current === index
                  ? "current-image"
                  : "current-image hide-current-image"
              }
            />
          ))
        : null}
      <BsArrowRightCircleFill
        onClick={handleNext}
        className="arrow arrow-right"
      />
      <span className="circle-indicators">
        {images && images.length
          ? images.map((_, index) => (
              <button
                key={index}
                className={
                  current === index
                    ? "current-indicator"
                    : "current-indicator hide-current-indicator"
                }
                onClick={()=> setCurrent(index)}
              ></button>
            ))
          : null}
      </span>
    </div>
  );
}
