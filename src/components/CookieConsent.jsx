
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Settings, X } from "lucide-react";

const CookieConsent = () => {
  const { toast } = useToast();
  const [showConsent, setShowConsent] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true, // Always true and cannot be changed
    analytics: false,
    marketing: false,
    personalization: false
  });

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setShowConsent(true);
    } else {
      setPreferences(JSON.parse(consent));
    }
  }, []);

  const handleAcceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true,
      personalization: true
    };
    localStorage.setItem("cookieConsent", JSON.stringify(allAccepted));
    setPreferences(allAccepted);
    setShowConsent(false);
    toast({
      title: "Preferências salvas",
      description: "Todas as cookies foram aceitas",
    });
  };

  const handleSavePreferences = () => {
    localStorage.setItem("cookieConsent", JSON.stringify(preferences));
    setShowConsent(false);
    setShowSettings(false);
    toast({
      title: "Preferências salvas",
      description: "Suas escolhas foram atualizadas",
    });
  };

  const handleRejectAll = () => {
    const allRejected = {
      necessary: true,
      analytics: false,
      marketing: false,
      personalization: false
    };
    localStorage.setItem("cookieConsent", JSON.stringify(allRejected));
    setPreferences(allRejected);
    setShowConsent(false);
    toast({
      title: "Preferências salvas",
      description: "Apenas cookies necessários foram aceitos",
    });
  };

  return (
    <AnimatePresence>
      {(showConsent || showSettings) && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-background/95 backdrop-blur-sm border-t border-border"
        >
          <div className="container mx-auto">
            {showSettings ? (
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold">Configurações de Cookies</h3>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setShowSettings(false)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between py-2">
                    <div>
                      <h4 className="font-medium">Cookies Necessários</h4>
                      <p className="text-sm text-gray-400">Essenciais para o funcionamento do site</p>
                    </div>
                    <input
                      type="checkbox"
                      checked={preferences.necessary}
                      disabled
                      className="rounded border-gray-400"
                    />
                  </div>
                  
                  <div className="flex items-center justify-between py-2">
                    <div>
                      <h4 className="font-medium">Cookies Analíticos</h4>
                      <p className="text-sm text-gray-400">Nos ajudam a entender como você usa o site</p>
                    </div>
                    <input
                      type="checkbox"
                      checked={preferences.analytics}
                      onChange={(e) => setPreferences(prev => ({
                        ...prev,
                        analytics: e.target.checked
                      }))}
                      className="rounded border-gray-400"
                    />
                  </div>
                  
                  <div className="flex items-center justify-between py-2">
                    <div>
                      <h4 className="font-medium">Cookies de Marketing</h4>
                      <p className="text-sm text-gray-400">Usados para publicidade direcionada</p>
                    </div>
                    <input
                      type="checkbox"
                      checked={preferences.marketing}
                      onChange={(e) => setPreferences(prev => ({
                        ...prev,
                        marketing: e.target.checked
                      }))}
                      className="rounded border-gray-400"
                    />
                  </div>
                  
                  <div className="flex items-center justify-between py-2">
                    <div>
                      <h4 className="font-medium">Cookies de Personalização</h4>
                      <p className="text-sm text-gray-400">Permitem uma experiência mais personalizada</p>
                    </div>
                    <input
                      type="checkbox"
                      checked={preferences.personalization}
                      onChange={(e) => setPreferences(prev => ({
                        ...prev,
                        personalization: e.target.checked
                      }))}
                      className="rounded border-gray-400"
                    />
                  </div>
                </div>
                
                <div className="flex justify-end gap-4 mt-4">
                  <Button variant="outline" onClick={handleRejectAll}>
                    Rejeitar Todos
                  </Button>
                  <Button onClick={handleSavePreferences}>
                    Salvar Preferências
                  </Button>
                </div>
              </div>
            ) : (
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="text-sm">
                  <p>
                    Utilizamos cookies para melhorar sua experiência em nosso site.{" "}
                    <a href="/cookies" className="text-primary hover:underline">
                      Saiba mais
                    </a>
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <Button
                    variant="outline"
                    onClick={() => setShowSettings(true)}
                    className="whitespace-nowrap"
                  >
                    <Settings className="h-4 w-4 mr-2" />
                    Configurar
                  </Button>
                  <Button
                    variant="outline"
                    onClick={handleRejectAll}
                    className="whitespace-nowrap"
                  >
                    Rejeitar
                  </Button>
                  <Button
                    onClick={handleAcceptAll}
                    className="whitespace-nowrap"
                  >
                    Aceitar Todos
                  </Button>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
