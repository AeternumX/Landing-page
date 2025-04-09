
import React from "react";
import { motion } from "framer-motion";

const Privacy = () => {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-16 cyberpunk-gradient"
        >
          Política de Privacidade
        </motion.h1>

        <div className="max-w-4xl mx-auto space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4">1. Coleta de Dados</h2>
            <p className="text-gray-300">
              Coletamos apenas os dados necessários para fornecer nossos serviços. 
              Isso inclui informações que você nos fornece diretamente e dados coletados automaticamente.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">2. Uso de Dados</h2>
            <p className="text-gray-300">
              Utilizamos seus dados para melhorar nossos serviços, personalizar sua experiência 
              e manter a segurança de nossa plataforma.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">3. Proteção de Dados</h2>
            <p className="text-gray-300">
              Implementamos medidas de segurança técnicas e organizacionais para proteger seus dados 
              contra acesso não autorizado, alteração, divulgação ou destruição.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">4. Seus Direitos</h2>
            <p className="text-gray-300">
              Você tem direito a acessar, corrigir ou excluir seus dados pessoais. 
              Também pode solicitar a portabilidade de seus dados.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">5. Contato</h2>
            <p className="text-gray-300">
              Para questões relacionadas à privacidade, entre em contato através do email: 
              privacy@aeternumx.com
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
