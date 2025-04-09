
import React from "react";
import { motion } from "framer-motion";

const Cookies = () => {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-16 cyberpunk-gradient"
        >
          Política de Cookies
        </motion.h1>

        <div className="max-w-4xl mx-auto space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4">1. O que são Cookies?</h2>
            <p className="text-gray-300">
              Cookies são pequenos arquivos de texto armazenados em seu dispositivo 
              quando você visita nosso site. Eles nos ajudam a melhorar sua experiência.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">2. Como Usamos os Cookies</h2>
            <p className="text-gray-300">
              Utilizamos cookies para lembrar suas preferências, entender como você 
              interage com nosso site e melhorar nossos serviços.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">3. Tipos de Cookies</h2>
            <p className="text-gray-300">
              Utilizamos cookies essenciais para o funcionamento do site, cookies 
              analíticos para melhorar nossos serviços e cookies de preferências.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">4. Gerenciamento de Cookies</h2>
            <p className="text-gray-300">
              Você pode gerenciar ou excluir cookies através das configurações do seu navegador. 
              Note que isso pode afetar a funcionalidade do site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">5. Atualizações</h2>
            <p className="text-gray-300">
              Esta política pode ser atualizada periodicamente. Recomendamos que você 
              revise esta página regularmente para se manter informado.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Cookies;
