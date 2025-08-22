import React, { useEffect, useMemo, useState } from "react";

const GalleryCarousel: React.FC = () => {
  const images = useMemo(
    () => [
      "https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=1600&q=80", // airplane wing over clouds
      "https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&w=1600&q=80", // jet engine close-up
      "https://images.unsplash.com/photo-1526413232644-8a1a3f1a19a6?auto=format&fit=crop&w=1600&q=80", // aircraft taking off
      "https://images.unsplash.com/photo-1485988412941-77a35537dae4?auto=format&fit=crop&w=1600&q=80", // airport runway night
    ],
    []
  );
  const [current, setCurrent] = useState(0);
  const goPrev = () =>
    setCurrent((i) => (i - 1 + images.length) % images.length);
  const goNext = () => setCurrent((i) => (i + 1) % images.length);

  // autoplay every 5s
  useEffect(() => {
    const id = window.setInterval(() => {
      setCurrent((i) => (i + 1) % images.length);
    }, 5000);
    return () => window.clearInterval(id);
  }, [images.length]);

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="relative h-64 md:h-80 w-full overflow-hidden rounded-2xl shadow">
          {images.map((src, idx) => (
            <img
              key={src}
              src={src}
              alt="Gallery"
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
                idx === current ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
          <button
            onClick={goPrev}
            aria-label="Previous"
            className="absolute left-3 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>
          <button
            onClick={goNext}
            aria-label="Next"
            className="absolute right-3 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path d="M8.25 4.5L15.75 12l-7.5 7.5" />
            </svg>
          </button>
          <div className="absolute bottom-3 inset-x-0 flex items-center justify-center gap-2">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`h-2.5 rounded-full ${
                  idx === current ? "w-6 bg-white" : "w-2.5 bg-white/60"
                }`}
                aria-label={`Go to image ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GalleryCarousel;
