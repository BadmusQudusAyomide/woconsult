import React, { useState } from "react";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdowns, setOpenDropdowns] = useState<string[]>([]);

  const navigation = [
    { name: "HOME", href: "/" },
    {
      name: "STUDY ABROAD",
      href: "/apply",
      submenu: [
        { name: "STUDY IN UK", href: "/apply" },
        { name: "STUDY IN IRELAND", href: "/apply" },
        { name: "STUDY IN CANADA", href: "/apply" },
        { name: "STUDY IN USA", href: "/apply" },
        { name: "STUDY IN AUSTRALIA", href: "/apply" },
      ],
    },
    {
      name: "ABOUT US",
      href: "/#about",
      submenu: [
        { name: "WHO WE ARE", href: "/#who-we-are" },
      ],
    },
    {
      name: "SERVICES",
      href: "/#services",
    },
    { name: "CONTACT US", href: "/#contact" },
  ];

  const toggleDropdown = (itemName: string) => {
    setOpenDropdowns((prev) =>
      prev.includes(itemName)
        ? prev.filter((name) => name !== itemName)
        : [...prev, itemName]
    );
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setOpenDropdowns([]);
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="inline-flex items-center gap-3">
              <img
                src="/Woconsult%20Logo.png"
                alt="W.O Consult Limited Logo"
                className="h-14 w-auto sm:h-16 object-contain"
                loading="eager"
              />
              <span className="hidden sm:inline text-lg sm:text-xl font-extrabold tracking-tight text-gray-900">
                <span className="text-primary-600">W.O</span> Consult Limited
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                <a
                  href={item.href}
                  className="flex items-center gap-1 text-[13px] tracking-wide text-gray-700 hover:text-primary-600 px-2 py-2 transition-colors duration-200"
                >
                  <span>{item.name}</span>
                  {item.submenu && (
                    <svg
                      className="w-3.5 h-3.5 text-gray-500 group-hover:text-primary-600 transition-transform duration-200 group-hover:rotate-180"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.25 8.29a.75.75 0 01-.02-1.08z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </a>
                {item.submenu && (
                  <div className="absolute left-0 mt-2 w-56 bg-white border border-gray-100 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 transform origin-top">
                    <div className="py-2">
                      {item.submenu.map((subitem) => (
                        <a
                          key={subitem.name}
                          href={subitem.href}
                          className="block px-4 py-3 text-[13px] text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors duration-200"
                        >
                          {subitem.name}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop Contact: Email & WhatsApp */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="mailto:w.oconsultltd@gmail.com"
              className="inline-flex items-center gap-2 text-sm text-gray-700 hover:text-primary-600"
              aria-label="Email us"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="hidden xl:inline">w.oconsultltd@gmail.com</span>
            </a>
            <a
              href="https://wa.me/2348135388082"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-gray-700 hover:text-primary-600"
              aria-label="WhatsApp"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.52 3.48A11.94 11.94 0 0012.06 0C5.52 0 .22 5.3.22 11.84c0 2.09.55 4.13 1.6 5.93L0 24l6.39-1.67a11.82 11.82 0 005.67 1.45h.01c6.54 0 11.84-5.3 11.84-11.84 0-3.16-1.23-6.13-3.39-8.31zM12.06 21.2h-.01A9.36 9.36 0 016.9 19.8l-.4-.24-3.79.99 1.01-3.69-.26-.38a9.33 9.33 0 01-1.49-5.04C1.97 6.7 6.24 2.43 12.06 2.43c2.5 0 4.85.97 6.62 2.73a9.28 9.28 0 012.75 6.61c0 5.82-4.27 10.99-9.37 10.99zm5.4-7.01c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.46-.89-.77-1.5-1.72-1.68-2.01-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.21-.24-.58-.49-.5-.67-.5-.17-.01-.37-.01-.57-.01s-.52.07-.8.37c-.27.3-1.05 1.02-1.05 2.48 0 1.46 1.07 2.88 1.22 3.08.15.2 2.1 3.2 5.08 4.49.71.31 1.26.5 1.69.65.71.23 1.35.2 1.86.12.57-.08 1.77-.72 2.02-1.41.25-.69.25-1.28.17-1.41-.07-.13-.27-.2-.57-.35z"/>
              </svg>
              <span className="hidden xl:inline">+2348135388082</span>
            </a>
          </div>

          {/* Contact Info removed per request */}

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex items-center gap-2 text-gray-700 hover:text-primary-600 px-3 py-2 rounded-md border border-gray-200 transition-colors duration-200"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
              <span className="text-sm font-medium">Menu</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar Navigation */}
      {isMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
            onClick={closeMenu}
          ></div>

          {/* Sidebar */}
          <div className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out lg:hidden">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h2 className="text-xl font-bold text-primary-600">Menu</h2>
              <button
                onClick={closeMenu}
                className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
              >
                <svg
                  className="h-6 w-6 text-gray-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Navigation Items */}
            <div className="overflow-y-auto h-full pb-20">
              <nav className="p-4">
                {navigation.map((item) => (
                  <div key={item.name} className="mb-2">
                    <div className="flex items-center justify-between">
                      <a
                        href={item.href}
                        onClick={closeMenu}
                        className="flex-1 block px-4 py-3 text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-lg transition-colors duration-200"
                      >
                        {item.name}
                      </a>
                      {item.submenu && (
                        <button
                          onClick={() => toggleDropdown(item.name)}
                          className="p-2 text-gray-500 hover:text-primary-600 transition-colors duration-200"
                        >
                          <svg
                            className={`w-5 h-5 transition-transform duration-200 ${
                              openDropdowns.includes(item.name)
                                ? "rotate-45"
                                : ""
                            }`}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                            />
                          </svg>
                        </button>
                      )}
                    </div>

                    {/* Dropdown Submenu */}
                    {item.submenu && openDropdowns.includes(item.name) && (
                      <div className="ml-4 mt-2 space-y-1 animate-slideDown">
                        {item.submenu.map((subitem) => (
                          <a
                            key={subitem.name}
                            href={subitem.href}
                            onClick={closeMenu}
                            className="block px-4 py-2 text-sm text-gray-600 hover:text-primary-600 hover:bg-gray-50 rounded-lg transition-colors duration-200"
                          >
                            {subitem.name}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>

              {/* Contact Info in Sidebar */}
              <div className="p-4 border-t border-gray-200 mt-4">
                <a
                  href="mailto:w.oconsultltd@gmail.com"
                  className="block w-full mb-2 text-center btn-secondary"
                  onClick={closeMenu}
                >
                  Email: w.oconsultltd@gmail.com
                </a>
                <a
                  href="https://wa.me/2348135388082"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center btn-primary"
                  onClick={closeMenu}
                >
                  WhatsApp: +2348135388082
                </a>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  );
};

export default Header;
