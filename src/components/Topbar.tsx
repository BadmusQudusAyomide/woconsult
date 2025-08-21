import React, { useEffect, useMemo, useState } from "react";

type SocialLink = {
  name: string;
  icon: JSX.Element;
  href: string;
};

const IconSeparator: React.FC = () => (
  <span className="mx-3 text-gray-300">|</span>
);

const Topbar: React.FC = () => {
  const socialLinks: SocialLink[] = useMemo(
    () => [
      {
        name: "Facebook",
        href: "https://facebook.com",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path d="M22 12.06C22 6.477 17.523 2 11.94 2 6.357 2 1.88 6.477 1.88 12.06c0 4.99 3.657 9.129 8.437 9.94v-7.03H7.898v-2.91h2.419V9.845c0-2.39 1.423-3.708 3.6-3.708 1.043 0 2.135.187 2.135.187v2.35h-1.203c-1.186 0-1.557.737-1.557 1.492v1.792h2.648l-.423 2.91h-2.225v7.03C18.343 21.19 22 17.05 22 12.06z" />
          </svg>
        ),
      },
      {
        name: "Instagram",
        href: "https://instagram.com",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h10zm-5 3.5A5.5 5.5 0 1 0 17.5 13 5.507 5.507 0 0 0 12 7.5zm0 2A3.5 3.5 0 1 1 8.5 13 3.504 3.504 0 0 1 12 9.5zM18 6.75a.75.75 0 1 0 .75.75A.75.75 0 0 0 18 6.75z" />
          </svg>
        ),
      },
      {
        name: "LinkedIn",
        href: "https://linkedin.com",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path d="M4.983 3.5C4.983 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.103 1 2.5 1s2.483 1.12 2.483 2.5zM.5 8h4V23h-4V8zM8.5 8h3.837v2.043h.055c.534-1.013 1.84-2.082 3.788-2.082 4.053 0 4.8 2.667 4.8 6.137V23h-4v-6.667c0-1.59-.028-3.633-2.213-3.633-2.215 0-2.555 1.73-2.555 3.52V23h-4V8z" />
          </svg>
        ),
      },
      {
        name: "Email",
        href: "mailto:application@engeducation.com",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4-8 5L4 8V6l8 5 8-5v2z" />
          </svg>
        ),
      },
    ],
    []
  );

  const phoneNumbers = useMemo(
    () => [
      "+44 20 7946 0958",
      "+1 415 555 0132",
      "+234 700 123 4567",
      "+880 9611 234567",
    ],
    []
  );
  const [currentPhoneIndex, setCurrentPhoneIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = phoneNumbers[currentPhoneIndex];
    const typingSpeed = isDeleting ? 40 : 80;
    const pauseBeforeDeleteMs = 1200;

    let timeoutId: number | undefined;

    if (!isDeleting && typedText === current) {
      // pause before starting to delete
      timeoutId = window.setTimeout(
        () => setIsDeleting(true),
        pauseBeforeDeleteMs
      );
      return () => clearTimeout(timeoutId);
    }

    if (isDeleting && typedText === "") {
      setIsDeleting(false);
      setCurrentPhoneIndex((idx) => (idx + 1) % phoneNumbers.length);
      return;
    }

    timeoutId = window.setTimeout(() => {
      const nextText = isDeleting
        ? current.substring(0, typedText.length - 1)
        : current.substring(0, typedText.length + 1);
      setTypedText(nextText);
    }, typingSpeed);

    return () => clearTimeout(timeoutId);
  }, [typedText, isDeleting, currentPhoneIndex, phoneNumbers]);

  return (
    <div className="bg-secondary-900 text-gray-200 text-sm">
      <div className="container-custom py-2">
        {/* Centered row with icons and email, separated by | */}
        <div className="flex items-center justify-center">
          {socialLinks.map((link, index) => (
            <React.Fragment key={link.name}>
              <a
                href={link.href}
                target={link.name === "Email" ? undefined : "_blank"}
                rel={link.name === "Email" ? undefined : "noreferrer"}
                className="flex items-center gap-2 text-gray-100 hover:text-white"
              >
                {link.icon}
                <span className="hidden sm:inline">
                  {link.name === "Email"
                    ? "application@engeducation.com"
                    : link.name}
                </span>
              </a>
              {index < socialLinks.length - 1 && <IconSeparator />}
            </React.Fragment>
          ))}
        </div>

        {/* Auto-typing phone number line */}
        <div className="mt-1 text-center text-gray-300">
          <span className="font-medium">Phone:</span>{" "}
          <span className="tabular-nums">{typedText}</span>
          <span className="ml-1 inline-block w-2 h-4 bg-gray-400 animate-pulse align-middle" />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
