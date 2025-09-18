'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import LanguageSwitcher from './LanguageSwitcher';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = useTranslations('navigation');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3 hover:opacity-90 transition-opacity duration-200">
              <div className="relative w-12 h-12 animate-phoenix-rise">
                <Image
                  src="/iconlogo.svg"
                  alt="Foenix Tech Logo"
                  width={48}
                  height={48}
                  className="w-full h-full object-contain"
                  priority
                />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Foenix</h1>
                <p className="text-xs text-gray-500 -mt-1">From Ashes to Excellence</p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="#services"
              className="text-gray-700 hover:text-foenix-orange transition-colors duration-200 font-medium"
            >
              {t('services')}
            </Link>
            <Link
              href="#about"
              className="text-gray-700 hover:text-foenix-orange transition-colors duration-200 font-medium"
            >
              {t('about')}
            </Link>
            <Link
              href="#case-studies"
              className="text-gray-700 hover:text-foenix-orange transition-colors duration-200 font-medium"
            >
              {t('caseStudies')}
            </Link>
            <Link
              href="#contact"
              className="text-gray-700 hover:text-foenix-orange transition-colors duration-200 font-medium"
            >
              {t('contact')}
            </Link>
            <LanguageSwitcher />
            <Link
              href="#contact"
              className="bg-foenix-gradient text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              {t('getStarted')}
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-foenix-orange transition-colors duration-200"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
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
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white/95 backdrop-blur-md">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                href="#services"
                className="block px-3 py-2 text-gray-700 hover:text-foenix-orange transition-colors duration-200 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="#about"
                className="block px-3 py-2 text-gray-700 hover:text-foenix-orange transition-colors duration-200 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="#case-studies"
                className="block px-3 py-2 text-gray-700 hover:text-foenix-orange transition-colors duration-200 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Case Studies
              </Link>
              <Link
                href="#contact"
                className="block px-3 py-2 text-gray-700 hover:text-foenix-orange transition-colors duration-200 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Link
                href="#contact"
                className="block mx-3 mt-4 bg-foenix-gradient text-white px-6 py-2 rounded-full font-semibold text-center hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
