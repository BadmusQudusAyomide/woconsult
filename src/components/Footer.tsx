import React from "react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    main: [
      { name: "HOME", href: "/" },
      { name: "ABOUT", href: "/#about" },
      { name: "STUDY ABROAD", href: "/#study-abroad" },
      { name: "SERVICES", href: "/#services" },
      { name: "APPLY", href: "/apply" },
      { name: "CONTACT", href: "/#contact" },
    ],
    universities: [
      { name: "UK", href: "/#uk" },
      { name: "IRELAND", href: "/#ireland" },
      { name: "USA", href: "/#usa" },
      { name: "CANADA", href: "/#canada" },
      { name: "AUSTRALIA", href: "/#australia" },
    ],
    quickLinks: [
      { name: "WHO WE ARE", href: "/#who-we-are" },
      { name: "WHAT WE DO", href: "/#what-we-do" },
      { name: "OUR PROMISE", href: "/#our-promise" },
      { name: "SERVICES", href: "/#services" },
      { name: "APPLY", href: "/apply" },
      { name: "CONTACT", href: "/#contact" },
    ],
  };

  const socialLinks = [
    { name: "Instagram", href: "https://www.instagram.com/w.oconsult/" },
    { name: "LinkedIn", href: "https://www.linkedin.com/company/w-o-consults/" },
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
                    src="/Woconsult%20Logo.png"
                    alt="W.O Consult Limited Logo"
                    className="h-12 w-auto sm:h-14 object-contain"
                    loading="lazy"
                  />
                  <h3 className="text-3xl lg:text-4xl font-bold text-white">
                    W.O Consult Limited
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
                  <a href="https://wa.me/2348135388082" target="_blank" rel="noopener noreferrer" className="text-white/90 hover:text-white transition-colors">+2348135388082</a>
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
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {social.name === "Instagram" ? (
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                          <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm0 2h10a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3zm11 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zM12 7a5 5 0 1 0 .001 10.001A5 5 0 0 0 12 7zm0 2a3 3 0 1 1-.001 6.001A3 3 0 0 1 12 9z" />
                        </svg>
                      ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                          <path d="M4.983 3.5C4.439 3.5 4 3.94 4 4.483v15.034c0 .543.439.983.983.983h15.034c.543 0 .983-.44.983-.983V4.483A.983.983 0 0 0 20.017 3.5H4.983zM8.5 9.25a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zM7 10h3v7H7v-7zm5 0h2.858v.957h.04c.398-.754 1.37-1.548 2.82-1.548 3.017 0 3.582 1.987 3.582 4.568V17h-3v-3.357c0-.8-.014-1.828-1.114-1.828-1.115 0-1.286.872-1.286 1.77V17h-3v-7z" />
                        </svg>
                      )}
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
                © {currentYear} – W.O Consult Limited. All rights reserved.
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
