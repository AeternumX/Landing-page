import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronRight, Menu, X, Sparkles } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed w-full z-50 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto h-16 flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <NavLink to="/" className="text-2xl font-bold">
            <span className="bg-gradient-to-r from-[#00DDFF] via-[#00DDFF] to-[#0088cc] bg-clip-text text-transparent">
              AeternumX
            </span>
          </NavLink>
        </motion.div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <NavLink 
            to="/about"
            className={({ isActive }) => 
              `nav-link ${isActive ? 'active' : ''}`
            }
          >
            Sobre nós
          </NavLink>
          <NavLink 
            to="/products"
            className={({ isActive }) => 
              `nav-link ${isActive ? 'active' : ''}`
            }
          >
            Produtos
          </NavLink>
          <NavLink to="/teachlyze-signup">
            <Button variant="outline" className="button-outline">
              <Sparkles className="mr-2 h-4 w-4" />
              Beta Tester
            </Button>
          </NavLink>
          <NavLink to="/contact">
            <Button className="button-primary">
              Fale Conosco <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </NavLink>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-400 hover:text-white"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 right-0 bg-background border-b border-border/50 py-4 px-4 md:hidden"
            >
              <nav className="flex flex-col gap-4">
                <NavLink 
                  to="/about"
                  className={({ isActive }) => 
                    `nav-link ${isActive ? 'active' : ''}`
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sobre nós
                </NavLink>
                <NavLink 
                  to="/products"
                  className={({ isActive }) => 
                    `nav-link ${isActive ? 'active' : ''}`
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  Produtos
                </NavLink>
                <NavLink 
                  to="/teachlyze-signup"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Button variant="outline" className="w-full button-outline">
                    <Sparkles className="mr-2 h-4 w-4" />
                    Beta Tester
                  </Button>
                </NavLink>
                <NavLink 
                  to="/contact"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Button className="w-full button-primary">
                    Fale Conosco <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </NavLink>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
