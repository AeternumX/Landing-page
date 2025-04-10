import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { CheckCircle2 } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formsubmit.co/contato@teachlyze.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          subject: formState.subject,
          message: formState.message
        })
      });

      if (response.ok) {
        setIsSuccess(true);
        toast({
          title: "Mensagem enviada com sucesso!",
          description: "Entraremos em contato em breve.",
          duration: 10000,
        });
        setFormState({
          name: "",
          email: "",
          subject: "",
          message: ""
        });
        
        // Reset success state after 5 seconds
        setTimeout(() => {
          setIsSuccess(false);
        }, 5000);
      } else {
        throw new Error("Falha ao enviar mensagem");
      }
    } catch (error) {
      toast({
        title: "Erro ao enviar mensagem",
        description: "Por favor, tente novamente mais tarde.",
        variant: "destructive",
        duration: 10000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.id]: e.target.value
    });
  };

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-16 cyberpunk-gradient"
        >
          Fale Conosco
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-bold cyberpunk-gradient">
              Entre em Contato
            </h2>
            <p className="accessible-text">
              Estamos aqui para ajudar! Preencha o formulário ao lado ou utilize
              um de nossos canais de atendimento.
            </p>

            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Email</h3>
                <p className="text-gray-400">contato@teachlyze.com</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Telefone</h3>
                <p className="text-gray-400">(11) 9999-9999</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Horário de Atendimento</h3>
                <p className="text-gray-400">Segunda a Sexta, das 9h às 18h</p>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            method="POST"
            name="contact"
            data-netlify="true"
            netlify-honeypot="bot-field"
            className="contact-form"
          >
            <input type="hidden" name="form-name" value="contact" />
            <p className="hidden">
              <label>
                Don't fill this out if you're human: <input name="bot-field" />
              </label>
            </p>
            <div className="space-y-4">
              <div>
                <Label htmlFor="name" className="required-field">Nome</Label>
                <Input 
                  id="name" 
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  required 
                  className="mt-1.5" 
                />
              </div>
              <div>
                <Label htmlFor="email" className="required-field">Email</Label>
                <Input 
                  id="email" 
                  name="email"
                  type="email" 
                  value={formState.email}
                  onChange={handleChange}
                  required 
                  className="mt-1.5" 
                />
              </div>
              <div>
                <Label htmlFor="subject" className="required-field">Assunto</Label>
                <Input 
                  id="subject" 
                  name="subject"
                  value={formState.subject}
                  onChange={handleChange}
                  required 
                  className="mt-1.5" 
                />
              </div>
              <div>
                <Label htmlFor="message" className="required-field">Mensagem</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  className="mt-1.5 min-h-[100px]"
                />
              </div>
            </div>
            <AnimatePresence>
              <motion.div
                initial={false}
                animate={isSuccess ? { y: [0, -10, 0] } : {}}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="w-full mt-6"
              >
                <Button 
                  type="submit" 
                  className={`w-full ${isSuccess ? 'success-button' : ''}`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Enviando..."
                  ) : isSuccess ? (
                    <span className="flex items-center justify-center gap-2">
                      <CheckCircle2 className="h-5 w-5" />
                      Mensagem Enviada!
                    </span>
                  ) : (
                    "Enviar Mensagem"
                  )}
                </Button>
              </motion.div>
            </AnimatePresence>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
