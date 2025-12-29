import { useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion" 
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div>
      <nav className="fixed top-0 w-full z-50 bg-slate-950/20 transition-all duration-300 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14 sm:h-16 md:h-20">
            <div className="flex items-center space-x-1 group cursor-pointer">
              <div>
                <img
                  src={`${import.meta.env.BASE_URL}logo.png`}
                  alt="CodeFlow"
                  className="w-6 h-6 sm:w-8 sm:h-8"
                />
              </div>
              <span className="text-lg sm:text-xl md:text-2xl font-medium">
                <span className="text-white">Code</span>
                <span className="text-blue-400">Flow</span>
              </span>
            </div>

            {/* Nav Links */}
            <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
              <a
                href="#features"
                className="text-gray-300 hover:text-white lg:text-base"
              >
                Features
              </a>
              <a
                href="#pricing"
                className="text-gray-300 hover:text-white lg:text-base"
              >
                Pricing
              </a>
              <a
                href="#testimonials"
                className="text-gray-300 hover:text-white lg:text-base"
              >
                Testimonials
              </a>
            </div>
            <button
              className="md:hidden p-2 text-gray-300 hover:text-white"
              onClick={() => setIsMenuOpen((prev) => !prev)}
            >
              {isMenuOpen ? (
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              ) : (
                <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
        {isMenuOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, transition: { duration: 0.1 } }} className="md:hidden bg-slate-900/95 backdrop-blur-lg border-t border-slate-800">
            <div className="px-4 py-4 sm:py-6 space-y-3 sm:space-y-4">
              <a
                href="#features"
                className="block text-gray-300 hover:text-white lg:text-base text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </a>
              <a
                href="#pricing"
                className="block text-gray-300 hover:text-white lg:text-base text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </a>
              <a
                href="#testimonials"
                className="block text-gray-300 hover:text-white lg:text-base text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Testimonials
              </a>
            </div>
          </motion.div>
        )}
        </AnimatePresence>
      </nav>
    </div>
  );
};

export default Navbar;
