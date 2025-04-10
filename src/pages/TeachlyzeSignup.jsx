import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { 
  CheckCircle2, 
  ArrowRight, 
  Shield, 
  Users, 
  FileText, 
  Clock, 
  Bot, 
  Bell,
  Sparkles,
  Target,
  Star,
  Brain,
  Zap,
  LineChart,
  BookOpen,
  MessageSquare,
  Settings,
  Award
} from "lucide-react";

const TeachlyzeSignup = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const betaTesters = JSON.parse(localStorage.getItem("betaTesters") || "[]");
      betaTesters.push(email);
      localStorage.setItem("betaTesters", JSON.stringify(betaTesters));

      setIsSuccess(true);
      toast({
        title: "Inscrição realizada com sucesso!",
        description: "Você receberá um email de confirmação em breve.",
        duration: 5000,
      });
      setEmail("");
    } catch (error) {
      toast({
        title: "Erro ao realizar inscrição",
        description: "Por favor, tente novamente mais tarde.",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const mainFeatures = [
    {
      icon: <Bot className="h-6 w-6" />,
      title: "IA Avançada",
      description: "Chatbot inteligente que aprende com o conteúdo das suas aulas e oferece suporte 24/7"
    },
    {
      icon: <Brain className="h-6 w-6" />,
      title: "Aprendizado Adaptativo",
      description: "Sistema que se adapta ao ritmo e estilo de cada aluno automaticamente"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Segurança Total",
      description: "Proteção de dados com criptografia de ponta a ponta e conformidade LGPD"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Alta Performance",
      description: "Sistema otimizado para resposta instantânea mesmo com grande volume"
    },
    {
      icon: <LineChart className="h-6 w-6" />,
      title: "Analytics Detalhado",
      description: "Insights profundos sobre desempenho e engajamento dos alunos"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Automação Inteligente",
      description: "Reduza até 70% do tempo gasto com tarefas administrativas"
    }
  ];

  const mvpFeatures = [
    {
      icon: <Users className="h-6 w-6" />,
      title: "Gestão de Turmas",
      description: "Crie e gerencie múltiplas turmas com facilidade e controle total"
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Atividades Interativas",
      description: "Sistema completo de criação e correção de atividades com feedback em tempo real"
    },
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Material Didático",
      description: "Organize e compartilhe conteúdo com seus alunos de forma estruturada"
    },
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: "Comunicação Direta",
      description: "Chat integrado para dúvidas e discussões entre alunos e professores"
    },
    {
      icon: <Bell className="h-6 w-6" />,
      title: "Sistema de Notificações",
      description: "Mantenha todos informados sobre prazos, eventos e atualizações importantes"
    },
    {
      icon: <Settings className="h-6 w-6" />,
      title: "Personalização",
      description: "Configure a plataforma de acordo com suas necessidades específicas"
    }
  ];

  const betaFeatures = [
    {
      icon: <Star className="h-6 w-6" />,
      title: "Acesso Antecipado",
      description: "Seja um dos primeiros a experimentar recursos inovadores"
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Suporte VIP",
      description: "Atendimento prioritário e dedicado durante toda a fase beta"
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Influencie o Produto",
      description: "Suas sugestões moldarão diretamente o futuro da plataforma"
    },
    {
      icon: <Sparkles className="h-6 w-6" />,
      title: "Vantagens Exclusivas",
      description: "Benefícios especiais que se estendem após o lançamento oficial"
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto">
        {/* MVP Beta Testing Hero Section */}
        <section className="text-center max-w-4xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6"
          >
            <Sparkles className="h-4 w-4" />
            <span className="text-sm font-medium">MVP em Fase Beta - Vagas Limitadas</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Seja Beta Tester do
            <span className="block cyberpunk-gradient">Teachlyze MVP</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300 mb-8"
          >
            Uma plataforma revolucionária que combina IA avançada com gestão educacional.
            Participe do programa beta e ajude a moldar o futuro da educação.
          </motion.p>

          {/* Beta Signup Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col items-center gap-4"
          >
            <form 
              onSubmit={handleSubmit} 
              className="w-full max-w-md space-y-4" 
              name="beta-signup"
              netlify
              data-netlify="true"
            >
              <Input
                type="email"
                placeholder="Seu melhor email para acesso antecipado"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="text-center"
              />
              <Button
                type="submit"
                size="lg"
                className={`w-full ${isSuccess ? 'success-button' : 'button-primary'}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Processando..."
                ) : isSuccess ? (
                  <span className="flex items-center justify-center gap-2">
                    <CheckCircle2 className="h-5 w-5" />
                    Inscrição Realizada!
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    Quero ser beta tester! <ArrowRight className="h-5 w-5" />
                  </span>
                )}
              </Button>
            </form>
            <p className="text-sm text-gray-400">
              Fase de testes totalmente gratuita e com suporte prioritário
            </p>
          </motion.div>
        </section>

        {/* Main Features */}
        <section className="mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold cyberpunk-gradient">Principais Diferenciais</h2>
            <p className="text-gray-300 mt-4">
              Tecnologia de ponta combinada com experiência educacional intuitiva
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="feature-item group"
              >
                <div className="text-primary group-hover:scale-110 transition-transform p-3 bg-primary/10 rounded-lg">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* MVP Features */}
        <section className="mb-16 bg-secondary/10 rounded-lg p-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
              <Target className="h-4 w-4" />
              <span className="text-sm font-medium">Versão MVP - Beta Testing</span>
            </div>
            <h2 className="text-2xl font-bold">Funcionalidades Disponíveis no MVP</h2>
            <p className="text-gray-300 mt-4">
              Experimente em primeira mão as funcionalidades que estão revolucionando a educação
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mvpFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="feature-item group"
              >
                <div className="text-primary group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Beta Benefits */}
        <section className="mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl font-bold cyberpunk-gradient">Benefícios Exclusivos Beta Testers</h2>
            <p className="text-gray-300 mt-4">
              Faça parte do grupo seleto que está moldando o futuro da educação
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {betaFeatures.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-lg bg-secondary/5 text-center group hover:bg-secondary/10 transition-all duration-300"
              >
                <div className="text-primary mb-4 group-hover:scale-110 transition-transform">
                  {benefit.icon}
                </div>
                <h3 className="font-bold mb-2">{benefit.title}</h3>
                <p className="text-gray-300 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default TeachlyzeSignup;
