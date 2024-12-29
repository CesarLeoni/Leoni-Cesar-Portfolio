import { useState, useEffect, useRef } from 'react';
import { RiMenu3Line, RiCloseLine } from '@remixicon/react';
import { gsap } from 'gsap';
import { NAVIGATION_LINKS } from '../constants';

const Navbar = ({ toggleSnowflakes, showSnowflakes }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const snowButtonRef = useRef(null);
  const magicTextRef = useRef(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const offset = -85;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY + offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
    setIsMobileMenuOpen(false);
  };

  // GSAP animation for Mobile Menu links when it opens
  useEffect(() => {
    if (isMobileMenuOpen) {
      gsap.fromTo(
        '.mobile-nav-link',
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.5,
          stagger: 0.1,
          ease: 'power2.out',
        }
      );
      
      // Animate "Christmas Magic" text and Snowflakes button from left with a delay
      gsap.fromTo(
        magicTextRef.current,
        { opacity: 0, x: -50 },  // Start from left
        {
          opacity: 1,
          x: 0,  // Final position
          duration: 0.6,
          delay: 0.6,  // Delay for synchronization
          ease: 'power2.out',
        }
      );

      gsap.fromTo(
        snowButtonRef.current,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          delay: 0.6,  // Delay to sync with the text
          ease: 'power2.out',
        }
      );
    } else {
      gsap.to('.mobile-nav-link', {
        opacity: 1,
        x: -50,
        duration: 1,
        stagger: 0.1,
        ease: 'power2.out',
        onComplete: () => {
          const menu = mobileMenuRef.current;
          if (menu) menu.style.display = 'none';
        },
      });

      gsap.to(magicTextRef.current, {
        opacity: 0,
        x: -50,
        duration: 1,
        ease: 'power2.out',
      });

      gsap.to(snowButtonRef.current, {
        opacity: 0,
        x: -50,
        duration: 1,
        ease: 'power2.out',
      });
    }
  }, [isMobileMenuOpen]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-md">
      {/* Desktop Menu */}
      <div
        ref={navRef}
        className="mx-auto hidden max-w-4xl items-center justify-center rounded-full border border-white py-4 px-8 backdrop-blur-sm lg:flex"
      >
        <div className="flex w-full items-center justify-between gap-12">
          <div>
            <a href="/" className="nav-link nav-name">
              <span className="uppercase text-lg hover:text-stone-300">Leoni Cesar</span>
            </a>
          </div>
          <div>
            <ul className="flex items-center gap-8">
              {NAVIGATION_LINKS.map((item, index) => (
                <li key={index}>
                  <a
                    className="nav-link text-base font-medium text-white hover:text-stone-300"
                    href={item.href}
                    onClick={(e) => handleLinkClick(e, item.href)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="py-2 backdrop-blur-md border-b lg:hidden">
        <div className="flex items-center justify-between">
          <div>
            <a href="#">
              <span className="pl-2 text-2xl">Leoni Cesar</span>
            </a>
          </div>
          <div className="flex items-center">
            <button
              className="focus:outline-none lg:hidden"
              onClick={toggleMobileMenu}
              aria-label={isMobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            >
              {isMobileMenuOpen ? (
                <RiCloseLine className="m-2 h-8 w-8" />
              ) : (
                <RiMenu3Line className="m-2 h-8 w-8" />
              )}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div>
            <ul className="my-4 ml-4 flex flex-col gap-6 backdrop-blur-md">
              {NAVIGATION_LINKS.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="mobile-nav-link block w-full text-lg"
                    onClick={(e) => handleLinkClick(e, item.href)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* "Christmas Magic" Text and Snowflakes Toggle Button */}
            <div className="mt-6 mb-3 ml-4 flex items-center gap-4">
              {/* Christmas Magic Text */}
              <span
                ref={magicTextRef}
                className="text-lg font-semibold text-white"
              >
                Christmas Magic
              </span>

              {/* Snowflakes Toggle Button */}
              <button
                ref={snowButtonRef}
                className={`relative w-16 h-8 rounded-full ${showSnowflakes ? 'bg-purple-700' : 'bg-purple-900'}`}
                onClick={toggleSnowflakes}
              >
                <span
                  className={`absolute top-0.5 left-0.5 w-7 h-7 bg-white rounded-full transition-all ${
                    showSnowflakes ? 'translate-x-8' : 'translate-x-0'
                  }`}
                ></span>
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
