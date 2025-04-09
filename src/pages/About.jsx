import React from "react";
import { motion } from "framer-motion";
import { 
  Lightbulb,
  Target,
  Heart,
  RefreshCw,
  Code
} from "lucide-react";

const About = () => {
  const team = [
    {
      name: "Pedro Silva",
      role: "Founder, Analista de Negócios e Product Owner",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
    },
    {
      name: "Jorge Ramiro",
      role: "Founder, Líder Técnico, Backend",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d"
    },
    {
      name: "Jord Allef",
      role: "Founder, Frontend",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
    },
    {
      name: "Diego Rodrigues",
      role: "Backend",
      image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef"
    },
    {
      name: "Abnara",
      role: "UX/UI Designer",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
    }
  ];

  const values = [
    {
      icon: <Lightbulb className="h-8 w-8 text-primary" />,
      title: "Inovação Contínua",
      description: "Buscamos constantemente o avanço tecnológico, explorando novos caminhos para tornar a IA mais acessível e eficiente."
    },
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      title: "Ética e Transparência",
      description: "Priorizamos a responsabilidade no uso da tecnologia, garantindo que nossas soluções respeitem privacidade, segurança e integridade."
    },
    {
      icon: <Heart className="h-8 w-8 text-primary" />,
      title: "Impacto Positivo",
      description: "Desenvolvemos produtos que melhoram a vida das pessoas, reduzindo barreiras e democratizando o acesso à tecnologia."
    },
    {
      icon: <RefreshCw className="h-8 w-8 text-primary" />,
      title: "Adaptabilidade e Evolução",
      description: "Nossas soluções são projetadas para crescer e evoluir junto com as necessidades do mercado e da sociedade."
    },
    {
      icon: <Code className="h-8 w-8 text-primary" />,
      title: "Excelência Técnica",
      description: "Mantemos padrões elevados de desenvolvimento, utilizando tecnologias de ponta para criar produtos escaláveis e confiáveis."
    }
  ];

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto">
        {/* Mission & Vision */}
        <section className="mb-24">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-center mb-16 cyberpunk-gradient"
          >
            Nossa História
          </motion.h1>
          
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="product-card"
            >
              <h2 className="text-2xl font-bold mb-4 cyberpunk-gradient">Missão</h2>
              <p className="accessible-text">
                Criar soluções inovadoras baseadas em Inteligência Artificial para transformar e otimizar 
                diferentes setores, promovendo eficiência, acessibilidade e impacto positivo no dia a dia das 
                pessoas.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="product-card"
            >
              <h2 className="text-2xl font-bold mb-4 cyberpunk-gradient">Visão</h2>
              <p className="accessible-text">
                Ser referência global no desenvolvimento de IA aplicada, criando tecnologias que impulsionam 
                a educação, o bem-estar e a automação de processos, sempre pautadas em ética, inovação e 
                impacto social.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Values */}
        <section className="mb-24">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-3xl font-bold text-center mb-16 cyberpunk-gradient"
          >
            Nossos Valores
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="product-card"
              >
                {value.icon}
                <h3 className="text-xl font-bold mt-4 mb-2">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Team */}
        <section>
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-3xl font-bold text-center mb-16 cyberpunk-gradient"
          >
            Nossa Equipe
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="team-card text-center"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-primary/20"
                />
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-gray-400">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
