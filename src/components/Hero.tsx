import React, { useMemo, useState } from "react";

const Hero: React.FC = () => {
  const slides = useMemo(
    () => [
      {
        url: "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=1600&q=80",
        alt: "Student with graduation cap and diploma symbolizing scholarships",
      },
      {
        url: "https://source.unsplash.com/P5aY_FocXAI/1600x900",
        alt: "Air Transat airplane in flight over blue sky",
      },
      {
        url: "https://source.unsplash.com/VV9VyibHYXI/1600x900",
        alt: "Graduation ceremony with speaker addressing students",
      },
      {
        url: "https://source.unsplash.com/ivG8LkDrtjs/1600x900",
        alt: "Two men in yellow and black suits (themed image)",
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
      className="relative h-[50vh] sm:h-[55vh] md:h-[60vh] lg:h-[65vh] xl:h-[70vh] w-full overflow-hidden"
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


      {/* Controls */}
      <button
        onClick={goPrev}
        aria-label="Previous slide"
        className="absolute left-2 sm:left-3 md:left-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 sm:p-3 transition-all duration-200 hover:scale-110"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
        >
          <path d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>
      <button
        onClick={goNext}
        aria-label="Next slide"
        className="absolute right-2 sm:right-3 md:right-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 sm:p-3 transition-all duration-200 hover:scale-110"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
        >
          <path d="M8.25 4.5L15.75 12l-7.5 7.5" />
        </svg>
      </button>

      {/* Indicators */}
      <div className="absolute bottom-2 sm:bottom-3 md:bottom-4 inset-x-0 z-10 flex items-center justify-center gap-1 sm:gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-2 sm:h-2.5 rounded-full transition-all duration-300 ${
              index === current
                ? "w-6 sm:w-8 bg-white"
                : "w-2 sm:w-2.5 bg-white/60 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
