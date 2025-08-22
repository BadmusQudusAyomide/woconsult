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

              {/* Contact Info removed per request */}
            </div>
          </div>
        </>
      )}
    </header>
  );
};

export default Header;
