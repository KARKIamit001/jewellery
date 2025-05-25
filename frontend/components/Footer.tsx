 "use client"

import React from "react"
import { MapPin, ArrowUp } from "lucide-react"

const MarketoFooter: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <footer className="w-full bg-white">
      {/* Country Selector */}
      <div className="border-b">
        <div className="container mx-auto flex flex-wrap justify-between text-gray-600">
          {["Canada", "United States", "Saudi Arabia", "United Kingdom", "Brazil", "Singapore"].map(
            (country, index) => (
              <React.Fragment key={country}>
                <button className="py-3 px-4 hover:text-gray-900 transition-colors">{country}</button>
                {index < 5 && <div className="h-full w-px bg-gray-200 hidden md:block"></div>}
              </React.Fragment>
            ),
          )}
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="text-3xl font-bold text-gray-800">
              Marketo<span className="text-green-500">.</span>
            </div>
            <div className="space-y-2">
              <p className="text-gray-500">Got Question? Call us 24/7</p>
              <p className="text-xl font-semibold text-gray-800">[80] 1017 197</p>
            </div>
            <div className="text-gray-500">
              <p>17 Princess Road, London, Greater London</p>
              <p>NW1 8JR, UK</p>
            </div>
            <button className="flex items-center gap-2 bg-red-400 hover:bg-red-500 text-white px-6 py-3 rounded-md transition-colors">
              <MapPin size={18} />
              <span>View On Map</span>
            </button>
          </div>

          {/* Safe Payments */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-800">We Using Safe Payments</h3>
            <div>
              <p className="text-gray-600 mb-2">Secured by:</p>
              <div className="flex gap-3">
                {/* Payment method icons would go here */}
                <div className="w-12 h-8 bg-gray-200 rounded"></div>
                <div className="w-12 h-8 bg-gray-200 rounded"></div>
                <div className="w-12 h-8 bg-gray-200 rounded"></div>
              </div>
            </div>
          </div>

          {/* Our Stores */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-800">Our Stores</h3>
            <ul className="space-y-3">
              {["New York", "London SF", "Cockfosters BP", "Los Angeles", "Chicago", "Las Vegas", "Albarto"].map(
                (store) => (
                  <li key={store}>
                    <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                      {store}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-800">Quick Links</h3>
            <ul className="space-y-3">
              {[
                "Support Center",
                "Term & Conditions",
                "Shipping",
                "Privacy Policy",
                "Help",
                "Products Return",
                "FAQS",
              ].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 bg-red-600 text-white p-3 rounded-none flex flex-col items-center justify-center"
        style={{ width: "50px", height: "100px" }}
      >
        <ArrowUp size={24} />
        
      </button>
    </footer>
  )
}

export default MarketoFooter
