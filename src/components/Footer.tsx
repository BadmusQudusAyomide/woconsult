import React from "react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    main: [
      { name: "HOME", href: "#home" },
      { name: "ABOUT", href: "#about" },
      { name: "STUDY ABROAD", href: "#study-abroad" },
      { name: "SERVICES", href: "#services" },
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
      { name: "WHO WE ARE", href: "#who-we-are" },
      { name: "WHAT WE DO", href: "#what-we-do" },
      { name: "OUR PROMISE", href: "#our-promise" },
      { name: "SERVICES", href: "#services" },
      { name: "CONTACT", href: "#contact" },
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
    <footer className="bg-primary-600 text-white relative">

      <div className="relative">
        <div className="container-custom py-16 lg:py-20">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <img
                    src="/Woconsult Logo.png"
                    alt="Woconsult Logo"
                    className="h-10 w-auto sm:h-12 object-contain"
                    loading="lazy"
                  />
                  <h3 className="text-3xl lg:text-4xl font-bold text-white">
                    Wo Consult
                  </h3>
                </div>
                <div className="w-20 h-1 bg-white/60 rounded-full mb-6"></div>
              </div>
              <p className="text-white/90 mb-8 leading-relaxed text-lg">
                Your trusted partner for international education consulting. We
                help students achieve their dreams of studying abroad with
                expert guidance, personalized support, and proven success rates.
              </p>

              {/* Contact Info */}
              <div className="space-y-3 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-white/15 rounded-full flex items-center justify-center">
                    <span className="text-sm">📧</span>
                  </div>
                  <a href="mailto:w.oconsultltd@gmail.com" className="text-white/90 hover:text-white transition-colors">w.oconsultltd@gmail.com</a>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-white/15 rounded-full flex items-center justify-center">
                    <span className="text-sm">📞</span>
                  </div>
                  <a href="tel:+2348135388082" className="text-white/90 hover:text-white transition-colors">+2348135388082</a>
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
                      className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg"
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
                <span className="w-8 h-0.5 bg-white/60 mr-3"></span>
                SITE MAP
              </h4>
              <ul className="space-y-3">
                {footerLinks.main.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-white/90 hover:text-white transition-all duration-300 hover:translate-x-1 inline-block"
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
                <span className="w-8 h-0.5 bg-white/60 mr-3"></span>
                UNIVERSITIES
              </h4>
              <ul className="space-y-3">
                {footerLinks.universities.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-white/90 hover:text-white transition-all duration-300 hover:translate-x-1 inline-block"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Quick Links */}
          <div className="border-t border-white/15 pt-8 mb-8">
            <h4 className="text-xl font-bold mb-6 text-white text-center">
              QUICK LINKS
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {footerLinks.quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-white/90 hover:text-white transition-all duration-300 text-center py-2 px-4 rounded-lg hover:bg-white/10"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-white/15 pt-8">
            <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
              <div className="flex flex-wrap items-center justify-center lg:justify-start space-x-6 text-sm text-white/80">
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-200"
                >
                  Terms of Service
                </a>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-200"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-200"
                >
                  Code of Conduct
                </a>
              </div>

              <div className="text-sm text-white/80 text-center lg:text-right">
                © {currentYear} – Wo Consult. All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* WhatsApp Float Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href="https://wa.me/2348135388082"
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
