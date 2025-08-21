import React, { useEffect, useMemo, useState } from "react";

type Destination = {
  name: string;
  flagUrl: string;
  image: string;
  description: string;
};

const DestinationsCarousel: React.FC = () => {
  const items: Destination[] = useMemo(
    () => [
      {
        name: "UK",
        flagUrl: "https://flagcdn.com/w160/gb.png",
        image:
          "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=1600&q=80",
        description:
          "The United Kingdom is a melting pot of academic excellence, culture, and opportunity.",
      },
      {
        name: "IRELAND",
        flagUrl: "https://flagcdn.com/w160/ie.png",
        image:
          "https://images.unsplash.com/photo-1543349689-9a4d426bee8e?auto=format&fit=crop&w=1600&q=80",
        description:
          "Home of leading MNC's, supportive learning environment & innovative culture.",
      },
      {
        name: "CANADA",
        flagUrl: "https://flagcdn.com/w160/ca.png",
        image:
          "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1600&q=80",
        description:
          "Immigration friendly country, job focused courses & post study work permit.",
      },
      {
        name: "AUSTRALIA",
        flagUrl: "https://flagcdn.com/w160/au.png",
        image:
          "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d2?auto=format&fit=crop&w=1600&q=80",
        description:
          "Globally recognized qualifications, scholarships & bursaries.",
      },
      {
        name: "USA",
        flagUrl: "https://flagcdn.com/w160/us.png",
        image:
          "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80",
        description:
          "Merit based scholarships and assistance & numerous study choices.",
      },
    ],
    []
  );

  const [current, setCurrent] = useState(0);
  const goPrev = () => setCurrent((i) => (i - 1 + items.length) % items.length);
  const goNext = () => setCurrent((i) => (i + 1) % items.length);

  const currentItem = items[current];

  // autoplay every 6s
  useEffect(() => {
    const id = window.setInterval(() => {
      setCurrent((i) => (i + 1) % items.length);
    }, 6000);
    return () => window.clearInterval(id);
  }, [items.length]);

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Header Section */}
        <div className="text-center mb-10 sm:mb-12">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Choose Your Favorite Destination!
          </h3>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Discover amazing study destinations around the world
          </p>
        </div>

        {/* Mobile Carousel - Hidden on laptop */}
        <div className="lg:hidden">
          <div className="relative overflow-hidden rounded-2xl shadow">
            {/* image block */}
            <div className="relative h-64 sm:h-72 md:h-80 w-full">
              <img
                src={currentItem.image}
                alt={currentItem.name}
                className="absolute inset-0 h-full w-full object-cover"
              />
              {/* circular flag overlapping bottom middle */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-10">
                <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full ring-4 ring-white shadow-xl bg-white overflow-hidden flex items-center justify-center">
                  <img
                    src={currentItem.flagUrl}
                    alt={`${currentItem.name} flag`}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* info card - larger height */}
            <div className="bg-white/95 backdrop-blur px-4 sm:px-6 pt-12 sm:pt-14 pb-6 sm:pb-8 min-h-48 sm:min-h-56 flex flex-col items-center text-center">
              <h4 className="text-lg sm:text-xl md:text-2xl font-extrabold text-gray-900 tracking-wide mb-2">
                {currentItem.name}
              </h4>
              <p className="text-gray-700 text-xs sm:text-sm md:text-base mb-4 sm:mb-5 max-w-3xl">
                {currentItem.description}
              </p>
              <button className="btn-primary text-sm sm:text-base">
                Learn More
              </button>
            </div>

            <button
              onClick={goPrev}
              aria-label="Previous"
              className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 sm:p-3 transition-all duration-200 hover:scale-110"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4 sm:w-5 sm:h-5"
              >
                <path d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>
            <button
              onClick={goNext}
              aria-label="Next"
              className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 sm:p-3 transition-all duration-200 hover:scale-110"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4 sm:w-5 sm:h-5"
              >
                <path d="M8.25 4.5L15.75 12l-7.5 7.5" />
              </svg>
            </button>
            <div className="absolute bottom-2 sm:bottom-3 inset-x-0 flex items-center justify-center gap-1 sm:gap-2">
              {items.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrent(idx)}
                  className={`h-2 sm:h-2.5 rounded-full transition-all duration-300 ${
                    idx === current
                      ? "w-6 sm:w-8 bg-white"
                      : "w-2 sm:w-2.5 bg-white/60"
                  }`}
                  aria-label={`Go to ${items[idx].name}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Laptop Grid - 3 cards side by side, hidden on mobile */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-8">
          {items.slice(0, 3).map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative h-64 w-full">
                <img
                  src={item.image}
                  alt={item.name}
                  className="absolute inset-0 h-full w-full object-cover"
                />
                {/* Flag badge */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-10">
                  <div className="w-20 h-20 rounded-full ring-4 ring-white shadow-xl bg-white overflow-hidden flex items-center justify-center">
                    <img
                      src={item.flagUrl}
                      alt={`${item.name} flag`}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="bg-white p-6">
                <h4 className="text-2xl font-extrabold text-gray-900 tracking-wide mb-3 text-center">
                  {item.name}
                </h4>
                <p className="text-gray-700 text-base mb-6 text-center leading-relaxed">
                  {item.description}
                </p>
                <button className="w-full btn-primary text-base">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DestinationsCarousel;
