import React from "react";

const Partners: React.FC = () => {
  const partners = [
    { name: "University of Oxford", country: "UK", logo: "🏛️" },
    { name: "University of Cambridge", country: "UK", logo: "🎓" },
    { name: "Imperial College London", country: "UK", logo: "🔬" },
    { name: "University College London", country: "UK", logo: "🌍" },
    { name: "Trinity College Dublin", country: "Ireland", logo: "☘️" },
    { name: "University College Dublin", country: "Ireland", logo: "📚" },
    { name: "University of Toronto", country: "Canada", logo: "🍁" },
    { name: "McGill University", country: "Canada", logo: "🎯" },
    { name: "University of Melbourne", country: "Australia", logo: "🦘" },
    {
      name: "Australian National University",
      country: "Australia",
      logo: "⭐",
    },
    { name: "Harvard University", country: "USA", logo: "🎭" },
    { name: "Stanford University", country: "USA", logo: "🌲" },
  ];

  const accreditations = [
    {
      name: "British Council",
      logo: "🇬🇧",
      description: "Official UK education partner",
    },
    {
      name: "English UK",
      logo: "📖",
      description: "Quality English language education",
    },
    { name: "PTE Academic", logo: "📝", description: "Official test center" },
    {
      name: "UCAS Registration",
      logo: "🎯",
      description: "Official UK university application system",
    },
    {
      name: "ICEF Agent",
      logo: "🌐",
      description: "International education standards",
    },
  ];

  return (
    <section className="bg-gray-50 section-padding">
      <div className="container-custom"></div>
    </section>
  );
};

export default Partners;
