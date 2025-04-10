import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import ProductSection from "@/components/ProductSection";
import SocialProof from "@/components/SocialProof";
import FAQ from "@/components/FAQ";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center pt-16 px-4 relative overflow-hidden">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative z-10"
            >
              <motion.h1 
                className="hero-text mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                Transformando o Futuro com Inteligência Artificial
              </motion.h1>
              <motion.p 
                className="text-xl text-gray-200 mb-8 accessible-text"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                Desenvolvemos soluções inovadoras que combinam IA avançada com experiências 
                intuitivas, tornando a tecnologia mais acessível e impactante para todos.
              </motion.p>
              <motion.div 
                className="flex gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <Button size="lg" className="button-primary">
                  Quero começar
                </Button>
                <Button size="lg" variant="outline" className="button-outline">
                  Saiba mais <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="relative"
            >
              <img  
                className="rounded-lg cyberpunk-border w-full h-[500px] object-cover"
                alt="AI Technology Visualization"
                src="https://fast.image.delivery/wxhjqyv.png" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <ProductSection />

      {/* Social Proof Section */}
      <SocialProof />

      {/* FAQ Section */}
      <FAQ />
    </div>
  );
};

export default Home;
