
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { 
  Bot, 
  Languages, 
  Clock, 
  LineChart, 
  AlertTriangle, 
  Pencil, 
  Brain, 
  Heart, 
  Lock, 
  Shield, 
  Smartphone, 
  Workflow, 
  Sparkles,
  Zap 
} from "lucide-react";
import { Button } from "@/components/ui/button";

const ProductSection = () => {
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
      description: "Uma plataforma educacional completa, projetada para transformar a forma como professores e alunos interagem, colaboram e aprendem.",
      features: [
        { 
          icon: <Bot className="h-6 w-6" />, 
          title: "Chatbot Personalizado",
          text: "Assistente inteligente que ajuda os alunos a desenvolverem seu próprio raciocínio, sem fornecer respostas diretas"
        },
        { 
          icon: <Languages className="h-6 w-6" />, 
          title: "Suporte Multilíngue",
          text: "Plataforma disponível em múltiplos idiomas, facilitando o acesso global à educação"
        },
        { 
          icon: <Clock className="h-6 w-6" />, 
          title: "Redução de Trabalho",
          text: "Automatização inteligente que reduz significativamente o tempo gasto em tarefas administrativas"
        },
        { 
          icon: <LineChart className="h-6 w-6" />, 
          title: "Análise Comparativa",
          text: "Insights detalhados sobre desempenho de turmas e alunos, identificando pontos fortes e áreas de melhoria"
        },
        { 
          icon: <AlertTriangle className="h-6 w-6" />, 
          title: "Detecção de Plágio",
          text: "Sistema avançado que verifica similaridades com fontes online e trabalhos anteriores"
        },
        { 
          icon: <Pencil className="h-6 w-6" />, 
          title: "Correção Gramatical",
          text: "Análise em tempo real da qualidade da escrita, auxiliando alunos e professores"
        },
        { 
          icon: <Zap className="h-6 w-6" />, 
          title: "Aprendizado Adaptativo",
          text: "Sistema que se adapta ao ritmo e estilo de aprendizagem de cada aluno"
        }
      ],
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8"
    },
    {
      name: "Health Buddy",
      description: "Uma revolução no mercado de bem-estar digital, combinando IA avançada, psicologia positiva e neurociência para criar uma experiência verdadeiramente transformadora.",
      features: [
        { 
          icon: <Brain className="h-6 w-6" />, 
          title: "Sistema de Avatar Dinâmico",
          text: "Avatar que evolui e se adapta ao seu progresso pessoal" 
        },
        { 
          icon: <Heart className="h-6 w-6" />, 
          title: "Jornada de Transformação",
          text: "Experiência personalizada que cresce com você" 
        },
        { 
          icon: <Lock className="h-6 w-6" />, 
          title: "Diário Pessoal Privado",
          text: "Registro totalmente privado e criptografado de sua jornada emocional, acessível apenas por você" 
        },
        { 
          icon: <Sparkles className="h-6 w-6" />, 
          title: "Análise Emocional Avançada",
          text: "IA que identifica padrões emocionais e sugere estratégias personalizadas" 
        },
        { 
          icon: <Shield className="h-6 w-6" />, 
          title: "Privacidade Máxima",
          text: "Seus dados nunca são compartilhados e permanecem exclusivamente no seu dispositivo" 
        },
        { 
          icon: <Smartphone className="h-6 w-6" />, 
          title: "Acessibilidade Total",
          text: "Disponível em qualquer dispositivo, a qualquer momento" 
        },
        { 
          icon: <Workflow className="h-6 w-6" />, 
          title: "Gamificação Contextual",
          text: "Sistema de recompensas que motiva seu progresso" 
        }
      ],
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef"
    }
  ];

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-16 cyberpunk-gradient"
        >
          Nossas Soluções
        </motion.h2>
        <div className="space-y-32">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="product-showcase"
            >
              {/* Product Header */}
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold cyberpunk-gradient mb-4">{product.name}</h3>
                <p className="accessible-text max-w-3xl mx-auto">{product.description}</p>
              </div>

              {/* Main Content */}
              <div className="grid lg:grid-cols-2 gap-12 items-start mb-12">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className={`relative ${index % 2 === 1 ? 'lg:order-2' : ''}`}
                >
                  <img
                    ref={el => imageRefs.current[index] = el}
                    src={product.image}
                    alt={`${product.name} Interface`}
                    className="rounded-lg cyberpunk-border w-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </motion.div>

                {/* Features Grid */}
                <div 
                  ref={el => featuresRefs.current[index] = el}
                  className={`grid grid-cols-1 gap-4 ${index % 2 === 1 ? 'lg:order-1' : ''}`}
                >
                  {product.features.slice(0, 4).map((feature, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="feature-item group"
                    >
                      <div className="text-primary group-hover:scale-110 transition-transform">
                        {feature.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">{feature.title}</h4>
                        <p className="text-sm text-gray-400">{feature.text}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Additional Features */}
              <div className="grid md:grid-cols-3 gap-6">
                {product.features.slice(4).map((feature, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="product-card group h-full"
                  >
                    <div className="text-primary mb-4 group-hover:scale-110 transition-transform">
                      {feature.icon}
                    </div>
                    <h4 className="font-semibold mb-2">{feature.title}</h4>
                    <p className="text-sm text-gray-400">{feature.text}</p>
                  </motion.div>
                ))}
              </div>

              {/* CTA Section */}
              <div className="mt-12 flex justify-center gap-4">
                <Button size="lg" className="button-primary">
                  Começar Agora
                </Button>
                <Button size="lg" variant="outline" className="button-outline">
                  Saber Mais
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
