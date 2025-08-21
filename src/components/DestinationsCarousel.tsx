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
        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-10">
          Choose Your Favorite Destination!
        </h3>
        <div className="relative overflow-hidden rounded-2xl shadow">
          {/* image block */}
          <div className="relative h-80 md:h-96 w-full">
            <img
              src={currentItem.image}
              alt={currentItem.name}
              className="absolute inset-0 h-full w-full object-cover"
            />
            {/* circular flag overlapping bottom middle */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-10">
              <div className="w-24 h-24 md:w-28 md:h-28 rounded-full ring-4 ring-white shadow-xl bg-white overflow-hidden flex items-center justify-center">
                <img
                  src={currentItem.flagUrl}
                  alt={`${currentItem.name} flag`}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* info card - larger height */}
          <div className="bg-white/95 backdrop-blur px-6 pt-14 pb-8 min-h-56 flex flex-col items-center text-center">
            <h4 className="text-xl md:text-2xl font-extrabold text-gray-900 tracking-wide mb-2">
              {currentItem.name}
            </h4>
            <p className="text-gray-700 text-sm md:text-base mb-5 max-w-3xl">
              {currentItem.description}
            </p>
            <button className="btn-primary">Learn More</button>
          </div>

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
            {items.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`h-2.5 rounded-full ${
                  idx === current ? "w-6 bg-white" : "w-2.5 bg-white/60"
                }`}
                aria-label={`Go to ${items[idx].name}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DestinationsCarousel;
