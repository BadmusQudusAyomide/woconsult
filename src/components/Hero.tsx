import React, { useMemo, useState } from "react";

const Hero: React.FC = () => {
  const slides = useMemo(
    () => [
      {
        url: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=1600&q=80",
        alt: "Airplane wing over clouds at sunset",
      },
      {
        url: "https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&w=1600&q=80",
        alt: "Jet engine close-up on runway",
      },
      {
        url: "https://images.unsplash.com/photo-1526413232644-8a1a3f1a19a6?auto=format&fit=crop&w=1600&q=80",
        alt: "Aircraft taking off with blue sky",
      },
    ],
    []
  );

  const [current, setCurrent] = useState(0);

  const goPrev = () =>
    setCurrent((idx) => (idx - 1 + slides.length) % slides.length);
  const goNext = () => setCurrent((idx) => (idx + 1) % slides.length);

  return (
    <section
      id="home"
      className="relative h-[70vh] md:h-[80vh] w-full overflow-hidden"
    >
      {/* Slides */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={slide.url}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
            aria-hidden={index !== current}
          >
            <img
              src={slide.url}
              alt={slide.alt}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
          </div>
        ))}
      </div>

      {/* Content overlay */}
      <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white drop-shadow-md">
            Welcome to <span className="text-primary-300">Wo Consult</span>
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-200">
            Your trusted partner for global education and visa guidance.
          </p>
        </div>
      </div>

      {/* Controls */}
      <button
        onClick={goPrev}
        aria-label="Previous slide"
        className="absolute left-3 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-3"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>
      <button
        onClick={goNext}
        aria-label="Next slide"
        className="absolute right-3 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-3"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path d="M8.25 4.5L15.75 12l-7.5 7.5" />
        </svg>
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 inset-x-0 z-10 flex items-center justify-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              index === current
                ? "w-6 bg-white"
                : "w-2.5 bg-white/60 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
