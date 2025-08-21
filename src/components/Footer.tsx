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
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="relative">
        <div className="container-custom py-16 lg:py-20">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="mb-6">
                <h3 className="text-3xl lg:text-4xl font-bold text-primary-400 mb-4">
                  Woconsult
                </h3>
                <div className="w-20 h-1 bg-primary-500 rounded-full mb-6"></div>
              </div>
              <p className="text-gray-300 mb-8 leading-relaxed text-lg">
                Your trusted partner for international education consulting. We
                help students achieve their dreams of studying abroad with
                expert guidance, personalized support, and proven success rates.
              </p>

              {/* Contact Info */}
              <div className="space-y-3 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center">
                    <span className="text-sm">📧</span>
                  </div>
                  <span className="text-gray-300">info@woconsult.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center">
                    <span className="text-sm">📞</span>
                  </div>
                  <span className="text-gray-300">+44 123 456 7890</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center">
                    <span className="text-sm">📍</span>
                  </div>
                  <span className="text-gray-300">London, United Kingdom</span>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h5 className="text-lg font-semibold mb-4 text-white">
                  Follow Us
                </h5>
                <div className="flex space-x-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      className="w-12 h-12 bg-gray-800 hover:bg-primary-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg"
                      aria-label={social.name}
                    >
                      <span className="text-lg">{social.icon}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Site Map */}
            <div>
              <h4 className="text-xl font-bold mb-6 text-white flex items-center">
                <span className="w-8 h-0.5 bg-primary-500 mr-3"></span>
                SITE MAP
              </h4>
              <ul className="space-y-3">
                {footerLinks.main.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-primary-400 transition-all duration-300 hover:translate-x-1 inline-block"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Universities */}
            <div>
              <h4 className="text-xl font-bold mb-6 text-white flex items-center">
                <span className="w-8 h-0.5 bg-primary-500 mr-3"></span>
                UNIVERSITIES
              </h4>
              <ul className="space-y-3">
                {footerLinks.universities.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-primary-400 transition-all duration-300 hover:translate-x-1 inline-block"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Quick Links */}
          <div className="border-t border-gray-700 pt-8 mb-8">
            <h4 className="text-xl font-bold mb-6 text-white text-center">
              QUICK LINKS
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {footerLinks.quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-300 hover:text-primary-400 transition-all duration-300 text-center py-2 px-4 rounded-lg hover:bg-gray-800"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
              <div className="flex flex-wrap items-center justify-center lg:justify-start space-x-6 text-sm text-gray-400">
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

              <div className="text-sm text-gray-400 text-center lg:text-right">
                © {currentYear} – Woconsult Education Ltd. All rights reserved.
              </div>
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
          className="w-16 h-16 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
          aria-label="Contact us on WhatsApp"
        >
          <span className="text-2xl group-hover:rotate-12 transition-transform duration-300">
            💬
          </span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
