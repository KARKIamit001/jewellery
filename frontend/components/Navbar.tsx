 "use client"

//  use client 
// nexxt   server side rendering
// react   client side rendering

import { useState } from "react"
import Link from "next/link"
import { Search, ShoppingBag, Heart, Menu, Facebook, Twitter, Instagram, ChevronDown } from "lucide-react"

export default function Navbar() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="bg-black text-white py-3 px-4 md:px-8">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center">
              <svg
                className="w-5 h-5 mr-2"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="1" y="3" width="15" height="13"></rect>
                <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
                <circle cx="5.5" cy="18.5" r="2.5"></circle>
                <circle cx="18.5" cy="18.5" r="2.5"></circle>
              </svg>
              <span>Free Delivery</span>
            </div>
            <div className="hidden md:flex items-center">
              <svg
                className="w-5 h-5 mr-2"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="8 12 12 16 16 12"></polyline>
                <line x1="12" y1="8" x2="12" y2="16"></line>
              </svg>
              <span>Returns Policy</span>
            </div>
          </div>

          <div className="flex items-center space-x-6">
            <div className="hidden md:flex items-center">
              <span className="mr-2">Follow Us</span>
              <div className="flex space-x-3">
                <Link href="#" className="hover:text-gray-300">
                  <Facebook size={16} />
                </Link>
                <Link href="#" className="hover:text-gray-300">
                  <Twitter size={16} />
                </Link>
                <Link href="#" className="hover:text-gray-300">
                  <Instagram size={16} />
                </Link>
                <Link href="#" className="hover:text-gray-300">
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 2C6.5 2 2 6.5 2 12c0 4.4 2.9 8.2 7 9.5 0-.5 0-1.1.2-1.7.2-.6 1.2-4.1 1.2-4.1s-.3-.6-.3-1.4c0-1.3.8-2.3 1.7-2.3.8 0 1.2.6 1.2 1.3 0 .8-.5 2-.8 3.1-.2.9.4 1.6 1.3 1.6 1.5 0 2.7-1.6 2.7-3.9 0-2-1.4-3.4-3.4-3.4-2.3 0-3.7 1.7-3.7 3.5 0 .7.2 1.4.6 1.8.1.1.1.2.1.3-.1.3-.3 1-.3 1.1-.1.2-.2.2-.3.2-1-.4-1.6-1.7-1.6-2.8 0-2.7 1.9-5.1 5.5-5.1 2.9 0 5.1 2.1 5.1 4.8 0 2.9-1.8 5.2-4.3 5.2-.8 0-1.6-.4-1.9-1 0 0-.4 1.7-.5 2.1-.2.7-.7 1.6-1 2.1.8.2 1.6.3 2.4.3 5.5 0 10-4.5 10-10S17.5 2 12 2z"></path>
                  </svg>
                </Link>
              </div>
            </div>
            <Link href="/login" className="hover:text-gray-300">
              Login
            </Link>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="border-b py-4 px-4 md:px-8">
        <div className="container mx-auto flex justify-between items-center">
          {/* Search Bar */}
          <div className="relative w-64 hidden md:block">
            <input
              type="text"
              placeholder="Search"
              className="w-full py-2 pl-4 pr-10 bg-gray-100 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-300"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="absolute right-3 top-2.5 text-gray-500">
              <Search size={18} />
            </button>
          </div>

          {/* Logo */}
          <div className="flex items-center justify-center">
            <Link href="/" className="flex flex-col items-center">
              <div className="w-16 h-16 relative mb-1">
                <div className="w-full h-full border-2 border-gray-700 rounded-md flex items-center justify-center">
                  <span className="text-2xl font-bold text-gray-700">M</span>
                </div>
              </div>
              <span className="text-2xl font-semibold tracking-wider text-gray-800">MARKETO</span>
            </Link>
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-6">
            <Link href="/wishlist" className="relative">
              <Heart size={24} className="text-gray-700" />
              <span className="absolute -top-2 -right-2 bg-gray-700 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </Link>
            <Link href="/cart" className="relative">
              <ShoppingBag size={24} className="text-gray-700" />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="border-b py-3 px-4 md:px-8">
        <div className="container mx-auto flex items-center">
          <div className="flex items-center mr-8">
            <Menu size={20} className="mr-2" />
            <span className="font-medium">All Categories</span>
            <ChevronDown size={16} className="ml-1" />
          </div>
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="font-medium hover:text-gray-600">
              HOME
            </Link>
            <Link href="/about" className="font-medium hover:text-gray-600">
              ABOUT
            </Link>
             <Link href="/contact" className="font-medium hover:text-gray-600">
              CONTACT
            </Link>
            <Link href="/products" className="font-medium hover:text-gray-600">
              PRODUCTS
            </Link>
            <Link href="/blog" className="font-medium hover:text-gray-600">
              BLOG
            </Link>
            <Link href="/gallery" className="font-medium hover:text-gray-600">
              GALLERY
            </Link>

            <Link href="/dashboard" className="font-medium hover:text-gray-600">
              DASHBOARD
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
