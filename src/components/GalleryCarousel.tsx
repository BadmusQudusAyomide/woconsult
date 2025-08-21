import React, { useEffect, useMemo, useState } from "react";

const GalleryCarousel: React.FC = () => {
  const images = useMemo(
    () => [
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=80",
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
