
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Carousel, CarouselSlide } from "@/components/ui/carousel";

const SocialProof = () => {
  const testimonials = [
    {
      name: "Prof. Maria Silva",
      role: "Professora Universitária",
      content: "O Teachlyze revolucionou minha forma de ensinar. A correção automática me economiza horas de trabalho.",
      rating: 5
    },
    {
      name: "João Santos",
      role: "Estudante",
      content: "O Health Buddy tem sido fundamental no meu desenvolvimento pessoal. É como ter um terapeuta digital 24/7.",
      rating: 5
    },
    {
      name: "Ana Costa",
      role: "Coordenadora Pedagógica",
      content: "A plataforma oferece insights valiosos sobre o desempenho dos alunos. Imprescindível para gestão educacional moderna.",
      rating: 5
    },
    {
      name: "Carlos Mendes",
      role: "Professor de Ensino Médio",
      content: "O chatbot personalizado é incrível! Ajuda os alunos a desenvolverem pensamento crítico sem dar respostas prontas.",
      rating: 5
    },
    {
      name: "Juliana Alves",
      role: "Psicóloga",
      content: "O Health Buddy respeita totalmente a privacidade dos usuários. A segurança dos dados é um diferencial importante.",
      rating: 5
    }
  ];

  return (
    <section className="py-16 px-4 bg-secondary/20">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-3xl font-bold text-center mb-12 cyberpunk-gradient"
        >
          O que dizem nossos usuários
        </motion.h2>
        <Carousel className="w-full max-w-6xl mx-auto" autoplay={5000}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <CarouselSlide key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="p-4 rounded-lg cyberpunk-border bg-background/50 backdrop-blur-sm h-[200px] flex flex-col justify-between"
                >
                  <div>
                    <div className="flex mb-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                      ))}
                    </div>
                    <p className="text-gray-400 text-sm line-clamp-3">{testimonial.content}</p>
                  </div>
                  <div>
                    <p className="font-bold text-base">{testimonial.name}</p>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  </div>
                </motion.div>
              </CarouselSlide>
            ))}
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default SocialProof;
