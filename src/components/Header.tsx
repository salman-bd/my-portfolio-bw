"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"

function NavLink({
  href,
  text,
  isActive,
  onClick,
}: {
  href: string
  text: string
  isActive: boolean
  onClick?: () => void
}) {
  return (
    <Link
      href={href}
      className={`transition duration-150 ease-in-out relative ${
        isActive
          ? "text-black dark:text-white"
          : "text-black dark:text-white hover:text-gray-800 dark:hover:text-gray-200"
      }`}
      onClick={onClick}
    >
      <span>{text}</span>
      {isActive && (
        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-black dark:bg-white transform origin-left transition-transform duration-300"></span>
      )}
    </Link>
  )
}

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMenuOpen) {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [isMenuOpen])

  const navItems = [
    { href: "/", text: "Home" },
    { href: "/personal", text: "Personal Life" },
    { href: "/education", text: "Education" },
    { href: "/career", text: "Career" },
    { href: "/work", text: "Work" },
    { href: "/contact", text: "Contact" },
  ]

  return (
    <header className="bg-white dark:bg-black shadow-lg sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="/my_image.jpg?height=40&width=40"
              alt="Salman's photo"
              width={40}
              height={40}
              className="rounded-full"
            />
          </Link>
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <NavLink key={item.href} href={item.href} text={item.text} isActive={pathname === item.href} />
            ))}
          </div>
          <button
            className="md:hidden focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-black dark:text-white" />
            ) : (
              <Menu className="w-6 h-6 text-black dark:text-white" />
            )}
          </button>
        </div>
      </nav>
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-black shadow-lg transition-all duration-300 ease-in-out">
          <div className="flex flex-col space-y-4 px-6 pt-2 pb-3 sm:px-3">
            {navItems.map((item) => (
              <NavLink
                key={item.href}
                href={item.href}
                text={item.text}
                isActive={pathname === item.href}
                onClick={() => setIsMenuOpen(false)}
              />
            ))}
          </div>
        </div>
      )}
    </header>
  )
}

