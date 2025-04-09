
import React from "react";
import { motion } from "framer-motion";

const Terms = () => {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-16 cyberpunk-gradient"
        >
          Termos de Uso
        </motion.h1>

        <div className="prose prose-invert mx-auto">
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">1. Aceitação dos Termos</h2>
            <p className="text-gray-300">
              Ao acessar e usar os serviços da AeternumX, você concorda com estes termos de uso. 
              Se você não concordar com qualquer parte destes termos, não poderá usar nossos serviços.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">2. Uso dos Serviços</h2>
            <p className="text-gray-300">
              Nossos serviços são fornecidos para uso pessoal ou comercial, de acordo com o plano contratado.
              Você concorda em não usar nossos serviços para fins ilegais ou não autorizados.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">3. Contas de Usuário</h2>
            <p className="text-gray-300">
              Para usar alguns de nossos serviços, você precisará criar uma conta.
              Você é responsável por manter a confidencialidade de sua conta e senha.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">4. Propriedade Intelectual</h2>
            <p className="text-gray-300">
              Todo o conteúdo disponível em nossos serviços é protegido por direitos autorais.
              Você não pode copiar, modificar, distribuir ou vender qualquer informação obtida através de nossos serviços.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">5. Limitação de Responsabilidade</h2>
            <p className="text-gray-300">
              A AeternumX não será responsável por quaisquer danos diretos, indiretos, incidentais ou consequenciais
              resultantes do uso ou incapacidade de usar nossos serviços.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Terms;
