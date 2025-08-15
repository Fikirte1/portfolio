import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSun, FiMoon, FiMenu, FiX, FiDownload } from 'react-icons/fi';
import logo from '../assets/logo.png'; // <-- Add your logo image here

const Navbar = ({ isDark, setIsDark }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/projects', label: 'Projects' },
    { path: '/contact', label: 'Contact' },
    {
      path: '/Fikirte-Shawul-Res',
      label: 'Resume',
      isExternal: true,
      href: '/Fikirte-Shawul-Res.pdf',
    },
  ];

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <nav
      className="fixed w-full z-50 glass"
      role="navigation"
      aria-label="Main Navigation"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo + Text */}
          <Link to="/" className="flex items-center space-x-2">
            <motion.img
              src={logo}
              alt="Logo"
              className="w-10 h-10"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-2xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent"
            >
              Portfolio
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) =>
              item.isExternal ? (
                <a
                  key={item.path}
                  href={item.href}
                  download
                  className={`relative flex items-center space-x-1 transition-colors duration-300 ${
                    location.pathname === item.path
                      ? 'text-primary'
                      : 'text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary'
                  }`}
                  aria-current={location.pathname === item.path ? 'page' : undefined}
                >
                  <span>{item.label}</span>
                  <FiDownload size={16} />
                  {location.pathname === item.path && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                    />
                  )}
                </a>
              ) : (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative transition-colors duration-300 ${
                    location.pathname === item.path
                      ? 'text-primary'
                      : 'text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary'
                  }`}
                  aria-current={location.pathname === item.path ? 'page' : undefined}
                >
                  {item.label}
                  {location.pathname === item.path && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                    />
                  )}
                </Link>
              )
            )}
            <button
              onClick={() => setIsDark(!isDark)}
              title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-dark-light transition-colors duration-300"
            >
              {isDark ? <FiSun size={20} /> : <FiMoon size={20} />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-full hover:bg-gray-200 dark:hover:bg-dark-light transition-colors duration-300"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close Menu' : 'Open Menu'}
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <>
              <motion.div
                key="backdrop"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/30 z-40"
                onClick={() => setIsOpen(false)}
              />

              <motion.div
                key="menu"
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -50, opacity: 0 }}
                className="md:hidden py-6 bg-white dark:bg-dark z-50 relative flex flex-col items-start space-y-4 px-6 rounded-b-lg shadow-lg"
              >
                {navItems.map((item) =>
                  item.isExternal ? (
                    <a
                      key={item.path}
                      href={item.href}
                      download
                      className={`flex items-center space-x-1 transition-colors duration-300 ${
                        location.pathname === item.path
                          ? 'text-primary'
                          : 'text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary'
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      <span>{item.label}</span>
                      <FiDownload size={16} />
                    </a>
                  ) : (
                    <Link
                      key={item.path}
                      to={item.path}
                      className={`transition-colors duration-300 ${
                        location.pathname === item.path
                          ? 'text-primary'
                          : 'text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary'
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )
                )}

                <button
                  onClick={() => setIsDark(!isDark)}
                  className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors duration-300"
                >
                  {isDark ? <FiSun size={20} /> : <FiMoon size={20} />}
                  <span>{isDark ? 'Light Mode' : 'Dark Mode'}</span>
                </button>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
