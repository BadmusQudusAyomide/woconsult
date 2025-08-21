import React, { useState } from "react";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: "HOME", href: "#home" },
    {
      name: "STUDY ABROAD",
      href: "#study-abroad",
      submenu: [
        { name: "STUDY IN UK", href: "#uk" },
        { name: "STUDY IN IRELAND", href: "#ireland" },
        { name: "STUDY IN CANADA", href: "#canada" },
        { name: "STUDY IN USA", href: "#usa" },
        { name: "STUDY IN AUSTRALIA", href: "#australia" },
      ],
    },
    {
      name: "ABOUT US",
      href: "#about",
      submenu: [
        { name: "WHO WE ARE", href: "#who-we-are" },
        { name: "OUR TEAM", href: "#our-team" },
      ],
    },
    {
      name: "SERVICES",
      href: "#services",
      submenu: [
        { name: "STUDENT VISA", href: "#student-visa" },
        { name: "SPOUSE VISA", href: "#spouse-visa" },
      ],
    },
    { name: "BLOGS", href: "#blogs" },
    {
      name: "REQUIREMENTS",
      href: "#requirements",
      submenu: [
        { name: "BANGLADESH", href: "#bangladesh" },
        { name: "NIGERIA", href: "#nigeria" },
        { name: "GHANA", href: "#ghana" },
      ],
    },
    {
      name: "GALLERY",
      href: "#gallery",
      submenu: [
        { name: "EDUCATION EXPO", href: "#expo" },
        { name: "CAMPUS VISITS", href: "#campus" },
        { name: "OTHERS", href: "#others" },
      ],
    },
    { name: "CONTACT US", href: "#contact" },
  ];

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-primary-600">Woconsult</h1>
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
                      className="w-3.5 h-3.5 text-gray-500 group-hover:text-primary-600"
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
                  <div className="absolute left-0 mt-2 w-56 bg-white border border-gray-100 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="py-2">
                      {item.submenu.map((subitem) => (
                        <a
                          key={subitem.name}
                          href={subitem.href}
                          className="block px-4 py-2 text-[13px] text-gray-700 hover:bg-gray-50 hover:text-primary-600"
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

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="mailto:info@woconsult.com"
              className="text-primary-600 hover:text-primary-700 text-sm font-medium"
            >
              info@woconsult.com
            </a>
            <button className="btn-primary">Apply Now</button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex items-center gap-2 text-gray-700 hover:text-primary-600 px-3 py-2 rounded-md border border-gray-200"
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

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
              {navigation.map((item) => (
                <div key={item.name}>
                  <a
                    href={item.href}
                    className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-md"
                  >
                    {item.name}
                  </a>
                  {item.submenu && (
                    <div className="pl-4 space-y-1">
                      {item.submenu.map((subitem) => (
                        <a
                          key={subitem.name}
                          href={subitem.href}
                          className="block px-3 py-2 text-sm text-gray-600 hover:text-primary-600 hover:bg-gray-50 rounded-md"
                        >
                          {subitem.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4 border-t">
                <a
                  href="mailto:info@woconsult.com"
                  className="block px-3 py-2 text-base font-medium text-primary-600"
                >
                  info@woconsult.com
                </a>
                <button className="w-full mt-2 btn-primary">Apply Now</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
