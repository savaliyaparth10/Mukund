import React, { useEffect, useState } from "react";
import logo from "../assets/naturx visiting card.png";

export const Footer = () => {
  const [Footer, setFooter] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://naturalx.in/admin/api/get_extra_details"
        );
        const result = await response.json();
        if (result.status === 1) {
          setFooter(result.data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <footer className="bg-black text-white py-8 ">
      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-14">
          {/* Logo & Social Links */}
          <div className="w-full flex flex-col items-center">
            <div className="mt-2">
              <img
                src={logo}
                alt="NaturX Logo"
                className="w-[155px] object-contain"
                loading="lazy"
              />
            </div>
            <div className="flex space-x-4 mt-2">
              {/* Social Media Links */}
              {[
                { link: "#", label: "Twitter", icon: "M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" },
                { link: "#", label: "YouTube", icon: "M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" },
                { link: "#", label: "GitHub", icon: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" },
                { link: "#", label: "LinkedIn", icon: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  className="hover:text-gray-300"
                  aria-label={social.label}
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    role="img"
                    aria-hidden="true"
                  >
                    <path d={social.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Address */}
          <div className="flex flex-col items-center text-center">
            {Footer?.address_1_title && (
              <h3 className="text-lg font-semibold mb-4">
                <a
                  href={Footer?.address_1_link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {Footer?.address_1_title}
                </a>
              </h3>
            )}
            {Footer?.address1?.split("\r\n").map((line, index) => (
              <p key={index} className="text-gray-300">
                <a
                  href={Footer?.address_1_link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {line}
                </a>
              </p>
            ))}
          </div>

          {/* Footer Menu */}
          <div className="flex flex-col items-center text-center">
            <h3 className="text-lg font-semibold mb-4">FOOTER MENU</h3>
            <ul className="space-y-2">
              {[
                { label: "Home", href: "#home" },
                { label: "Services", href: "#services" },
                { label: "Projects", href: "#blog" },
                { label: "About", href: "#about" },
                { label: "Contact us", href: "#contact" },
              ].map((menu, index) => (
                <li key={index}>
                  <a
                    href={menu.href}
                    className="text-gray-300 hover:text-white"
                    aria-label={menu.label}
                  >
                    {menu.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
