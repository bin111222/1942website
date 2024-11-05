import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import Logo from './Logo'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const leftNavItems = [
    { name: 'Home', href: '/' },
    { name: 'Case Studies', href: '/case-studies' },
  ]

  const rightNavItems = [
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'dark-glass' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="h-24 flex items-center justify-between">
          {/* Left Menu */}
          <div className="hidden md:flex space-x-12">
            {leftNavItems.map((item) => (
              <Link key={item.name} href={item.href}>
                <a className="text-dark-50 hover:text-accent-primary transition-colors">
                  {item.name}
                </a>
              </Link>
            ))}
          </div>

          {/* Centered Logo */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <Logo />
          </div>

          {/* Right Menu */}
          <div className="hidden md:flex space-x-12">
            {rightNavItems.map((item) => (
              <Link key={item.name} href={item.href}>
                <a className="text-dark-50 hover:text-accent-primary transition-colors">
                  {item.name}
                </a>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-dark-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden dark-glass"
          >
            <div className="px-4 py-4 space-y-3">
              {[...leftNavItems, ...rightNavItems].map((item) => (
                <Link key={item.name} href={item.href}>
                  <a className="block text-dark-50 hover:text-accent-primary transition-colors">
                    {item.name}
                  </a>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
} 