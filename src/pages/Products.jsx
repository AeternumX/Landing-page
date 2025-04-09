import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Bot, Brain, Shield, Zap, CheckCircle2 } from "lucide-react";

const Products = () => {
  const featuresRefs = useRef([]);
  const imageRefs = useRef([]);

  useEffect(() => {
    // Adjust image heights to match features section height
    featuresRefs.current.forEach((featuresRef, index) => {
      if (featuresRef && imageRefs.current[index]) {
        const featuresHeight = featuresRef.getBoundingClientRect().height;
        imageRefs.current[index].style.height = `${featuresHeight}px`;
      }
    });
  }, []);

  const products = [
    {
      name: "Teachlyze",
      tagline: "A Revolução no Ensino",
      description: "Uma plataforma educacional completa que transforma a maneira como professores ensinam e alunos aprendem, utilizando IA avançada para criar experiências de aprendizado personalizadas e eficientes.",
      detailedDescription: "O Teachlyze é uma solução revolucionária que combina inteligência artificial avançada com práticas pedagógicas modernas. Nossa plataforma não apenas automatiza tarefas administrativas, mas também cria um ambiente de aprendizado verdadeiramente adaptativo, onde cada aluno pode progredir no seu próprio ritmo.",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8",
      features: [
        {
          icon: <Bot className="h-6 w-6" />,
          title: "IA Avançada",
          description: "Sistema inteligente que aprende e se adapta continuamente às necessidades específicas de cada instituição"
        },
        {
          icon: <Brain className="h-6 w-6" />,
          title: "Aprendizado Adaptativo",
          description: "Conteúdo personalizado que evolui com o progresso de cada aluno"
        },
        {
          icon: <Shield className="h-6 w-6" />,
          title: "Segurança Total",
          description: "Proteção de dados de nível empresarial com criptografia avançada"
        },
        {
          icon: <Zap className="h-6 w-6" />,
          title: "Alta Performance",
          description: "Sistema otimizado para resposta instantânea mesmo com grande volume de dados"
        }
      ],
      benefits: [
        "Redução significativa no tempo gasto com tarefas administrativas",
        "Aumento expressivo no engajamento dos alunos",
        "Sistema adaptativo que evolui com cada interação",
        "Suporte técnico especializado disponível 24/7"
      ]
    },
    {
      name: "Health Buddy",
      tagline: "Seu Companheiro de Bem-estar",
      description: "Uma revolução no mercado de bem-estar digital, combinando IA avançada com psicologia positiva e neurociência para criar uma experiência verdadeiramente transformadora e personalizada.",
      detailedDescription: "O Health Buddy é mais que um aplicativo de bem-estar - é um companheiro digital que entende suas emoções e necessidades. Utilizando tecnologia de ponta em IA e princípios da neurociência, oferecemos suporte emocional personalizado e contínuo, sempre respeitando sua privacidade.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef",
      features: [
        {
          icon: <Brain className="h-6 w-6" />,
          title: "Sistema de Avatar Dinâmico",
          description: "Avatar que evolui e se adapta ao seu progresso pessoal"
        },
        {
          icon: <Bot className="h-6 w-6" />,
          title: "Jornada de Transformação",
          description: "Experiência personalizada que cresce com você"
        },
        {
          icon: <Shield className="h-6 w-6" />,
          title: "Diário Pessoal Privado",
          description: "Registro totalmente privado e criptografado de sua jornada emocional"
        },
        {
          icon: <Zap className="h-6 w-6" />,
          title: "Análise Emocional Avançada",
          description: "IA que identifica padrões emocionais e sugere estratégias personalizadas"
        }
      ],
      benefits: [
        "Acompanhamento emocional personalizado e contínuo",
        "Privacidade e segurança garantidas em cada interação",
        "Evolução contínua baseada em neurociência",
        "Suporte disponível 24 horas por dia, 7 dias por semana"
      ]
    }
  ];

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-16 cyberpunk-gradient"
        >
          Nossas Soluções
        </motion.h1>

        <div className="space-y-32">
          {products.map((product, index) => (
            <div key={product.name} className="space-y-16">
              {/* Product Header */}
              <div className="text-center max-w-4xl mx-auto">
                <motion.h2
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  className="text-3xl font-bold cyberpunk-gradient mb-2"
                >
                  {product.name}
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  className="text-xl text-primary mb-4"
                >
                  {product.tagline}
                </motion.p>
                <p className="accessible-text">
                  {product.description}
                </p>
              </div>

              {/* Product Content */}
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                {/* Product Image */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  className={`relative ${index % 2 === 1 ? 'lg:order-2' : ''}`}
                >
                  <img
                    ref={el => imageRefs.current[index] = el}
                    src={product.image}
                    alt={`${product.name} Interface`}
                    className="rounded-lg cyberpunk-border w-full object-cover"
                  />
                </motion.div>

                {/* Features Grid */}
                <div 
                  ref={el => featuresRefs.current[index] = el}
                  className={`grid grid-cols-1 gap-4 ${index % 2 === 1 ? 'lg:order-1' : ''}`}
                >
                  {product.features.map((feature, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="feature-item group"
                    >
                      <div className="text-primary group-hover:scale-110 transition-transform">
                        {feature.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">{feature.title}</h4>
                        <p className="text-sm text-gray-400">{feature.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Detailed Description and Benefits */}
              <div className="bg-secondary/10 rounded-lg p-8 space-y-8">
                <div className="max-w-3xl mx-auto">
                  <h3 className="text-xl font-semibold mb-4">Sobre o {product.name}</h3>
                  <p className="text-gray-300 mb-8">{product.detailedDescription}</p>

                  <h3 className="text-xl font-semibold mb-4">Principais Benefícios</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {product.benefits.map((benefit, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-center gap-3"
                      >
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="text-gray-300">{benefit}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="flex justify-center gap-4">
                <Button size="lg" className="button-primary">
                  Começar Agora
                </Button>
                <Button size="lg" variant="outline" className="button-outline">
                  Saiba Mais <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
