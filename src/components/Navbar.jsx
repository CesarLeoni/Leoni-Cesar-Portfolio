import { useState, useEffect, useRef } from 'react';
import { RiMenu3Line, RiCloseLine } from '@remixicon/react';
import { gsap } from 'gsap';

// Navigation Links
const NAVIGATION_LINKS = [
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Work Experience', href: '#work' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navRef = useRef(null);

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

  // GSAP animation for the Desktop Menu links
  useEffect(() => {
    // Ensure that the elements exist
    const links = document.querySelectorAll('.nav-link');
    if (links.length > 0) {
      gsap.from(links, {
        y: 50,                   // Animate vertical movement
        duration: 1,              // Duration of animation
        stagger: 0.2,             // Stagger effect
        ease: 'power2.out',       // Easing for smooth effect
        scale: 1.1,               // Slight scale-up for entrance
      });
    }
  }, []); // Runs once after component mounts

  // GSAP animation for Mobile Menu links when it opens
  useEffect(() => {
    if (isMobileMenuOpen) {
      gsap.from('.mobile-nav-link', {
        x: -30,                  // Animate horizontal movement for mobile menu
        duration: 0.5,           // Duration of animation
        stagger: 0.05,            // Stagger effect
        ease: 'power2.out',      // Easing for smooth effect
        scale: 1.1,              // Slight scale-up for entrance
      });
    }
  }, [isMobileMenuOpen]);

  return (
    <div>
      <nav className="fixed left-0 right-0 z-50 lg:top-4">
        {/* Desktop Menu */}
        <div
          ref={navRef}
          className="mx-auto hidden max-w-xl items-center justify-center rounded-full border border-white py-2 backdrop-blur-sm lg:flex"
        >
          <div className="flex items-center justify-between gap-6">
            <div>
              <a href="/" className="nav-link">
                <span className="uppercase hover:text-stone-300">Leoni Cesar</span>
              </a>
            </div>
            <div>
              <ul className="flex items-center gap-4">
                {NAVIGATION_LINKS.map((item, index) => (
                  <li key={index}>
                    <a
                      className="nav-link text-sm text-white hover:text-stone-300"
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
        <div className="py-2 backdrop-blur-md lg:hidden">
          <div className="flex items-center justify-between">
            <div>
              <a href="#">
                <span className="pl-2 uppercase">Leoni Cesar</span>
              </a>
            </div>
            <div className="flex items-center">
              <button
                className="focus:outline-none lg:hidden"
                onClick={toggleMobileMenu}
                aria-label={isMobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              >
                {isMobileMenuOpen ? (
                  <RiCloseLine className="m-2 h-6 w-5" />
                ) : (
                  <RiMenu3Line className="m-2 h-6 w-5" />
                )}
              </button>
            </div>
          </div>
          {isMobileMenuOpen && (
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
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
