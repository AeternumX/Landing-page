
import React from "react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "O que é o Teachlyze?",
      answer: "Teachlyze é uma plataforma educacional completa que centraliza gestão de usuários, criação de turmas, correção de atividades e muito mais, tudo integrado com IA para otimizar o processo de ensino."
    },
    {
      question: "Como o Health Buddy funciona?",
      answer: "O Health Buddy é um companheiro digital que utiliza IA avançada para oferecer suporte emocional personalizado, combinando psicologia positiva e neurociência para promover bem-estar."
    },
    {
      question: "As plataformas são seguras?",
      answer: "Sim, utilizamos criptografia AES-256 e seguimos todas as diretrizes da LGPD para garantir a segurança e privacidade dos seus dados."
    },
    {
      question: "Posso experimentar antes de assinar?",
      answer: "Sim, oferecemos um período de teste gratuito para que você possa explorar todas as funcionalidades das nossas plataformas."
    },
    {
      question: "Qual o suporte oferecido?",
      answer: "Oferecemos suporte técnico em horário comercial, além de documentação completa e tutoriais para ajudar no uso das plataformas."
    }
  ];

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-3xl font-bold text-center mb-12 cyberpunk-gradient"
        >
          Perguntas Frequentes
        </motion.h2>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <AccordionItem value={`item-${index}`} className="cyberpunk-border">
                  <AccordionTrigger className="text-lg font-semibold px-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-4 text-gray-400">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
