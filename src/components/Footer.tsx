import React from "react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    main: [
      { name: "HOME", href: "#home" },
      { name: "ABOUT", href: "#about" },
      { name: "STUDY ABROAD", href: "#study-abroad" },
      { name: "SERVICES", href: "#services" },
      { name: "BLOGS", href: "#blogs" },
      { name: "CONTACT", href: "#contact" },
    ],
    universities: [
      { name: "UK", href: "#uk" },
      { name: "IRELAND", href: "#ireland" },
      { name: "USA", href: "#usa" },
      { name: "CANADA", href: "#canada" },
      { name: "AUSTRALIA", href: "#australia" },
    ],
    quickLinks: [
      { name: "APPLY", href: "#apply" },
      { name: "EVENTS", href: "#events" },
      { name: "GALLERY", href: "#gallery" },
      { name: "NEWS", href: "#news" },
      { name: "CAREER", href: "#career" },
    ],
  };

  const socialLinks = [
    { name: "Twitter", href: "#", icon: "𝕏" },
    { name: "Facebook", href: "#", icon: "📘" },
    { name: "Instagram", href: "#", icon: "📷" },
    { name: "YouTube", href: "#", icon: "📺" },
    { name: "Pinterest", href: "#", icon: "📌" },
    { name: "LinkedIn", href: "#", icon: "💼" },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-primary-400 mb-4">
              Woconsult
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Your trusted partner for international education consulting. We
              help students achieve their dreams of studying abroad with expert
              guidance, personalized support, and proven success rates.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors duration-200"
                  aria-label={social.name}
                >
                  <span className="text-lg">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Site Map */}
          <div>
            <h4 className="text-lg font-semibold mb-4">SITE MAP</h4>
            <ul className="space-y-2">
              {footerLinks.main.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Universities */}
          <div>
            <h4 className="text-lg font-semibold mb-4">UNIVERSITIES</h4>
            <ul className="space-y-2">
              {footerLinks.universities.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Quick Links */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <h4 className="text-lg font-semibold mb-4">QUICK LINKS</h4>
          <div className="grid md:grid-cols-5 gap-4">
            {footerLinks.quickLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-primary-400 transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-wrap items-center space-x-6 text-sm text-gray-400">
              <a
                href="#"
                className="hover:text-primary-400 transition-colors duration-200"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="hover:text-primary-400 transition-colors duration-200"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="hover:text-primary-400 transition-colors duration-200"
              >
                Code of Conduct
              </a>
            </div>

            <div className="text-sm text-gray-400">
              © {currentYear} – Woconsult Education Ltd. All rights reserved.
            </div>
          </div>
        </div>
      </div>

      {/* WhatsApp Float Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href="https://wa.me/44123456789"
          target="_blank"
          rel="noopener noreferrer"
          className="w-16 h-16 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          aria-label="Contact us on WhatsApp"
        >
          <span className="text-2xl">💬</span>
        </a>
      </div>

      {/* Apply Now Float Button */}
      <div className="fixed bottom-6 left-6 z-50">
        <a
          href="#apply"
          className="w-16 h-16 bg-primary-600 hover:bg-primary-700 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          aria-label="Apply Now"
        >
          <span className="text-white font-bold text-sm text-center leading-tight">
            APPLY
            <br />
            NOW
          </span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
