import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/60 border-b border-gray-100">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img
            src="/images/MONATE KONA LOGO.png"
            alt="Monate Kona logo"
            className="w-12 h-12 object-contain"
          />
          <Link href="/" className="font-heading font-medium text-lg text-nearblack">
            Monate Kona
          </Link>
        </div>
        <nav className="hidden md:flex gap-8 items-center font-medium text-gray-700">
          <Link href="/" className="hover:text-pink-500">Home</Link>
          <Link href="/about" className="hover:text-pink-500">About</Link>
          <Link href="/menu" className="hover:text-pink-500">Menu</Link>
          <Link href="/gallery" className="hover:text-pink-500">Gallery</Link>
          <Link href="/contact" className="hover:text-pink-500">Contact</Link>
        </nav>
        <div className="hidden md:block">
          <Link href="/menu" className="px-5 py-2 bg-pink-500 text-white rounded-full">Order Now</Link>
        </div>
        <button className="md:hidden" aria-label="Open navigation menu">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 6H20M4 12H20M4 18H20" stroke="#1B1B1B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </header>
  )
}
