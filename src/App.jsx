import { useState } from "react";

function App() {
  const [chatVisible, setChatVisible] = useState(false);

  // Teste de deploy Vercel
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-blue-800 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center animate-bounce-in">
          <h1 className="text-5xl font-bold mb-6 animate-fade-in">
            Chatbots Inteligentes para seu Negócio
          </h1>
          <p className="text-xl mb-8 animate-fade-in delay-200">
            Transforme a experiência dos seus clientes com chatbots personalizados
          </p>
          <button
            onClick={() => setChatVisible(true)}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg animate-fade-in delay-300"
          >
            Ver Demonstração
          </button>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-blue-800 p-6 rounded-lg transition-all duration-300 hover:shadow-xl hover:transform hover:scale-105 animate-slide-in">
            <h2 className="text-2xl font-bold mb-4">Atendimento 24/7</h2>
            <p>Seus clientes atendidos a qualquer momento</p>
          </div>
          <div className="bg-blue-800 p-6 rounded-lg transition-all duration-300 hover:shadow-xl hover:transform hover:scale-105 animate-slide-in delay-100">
            <h2 className="text-2xl font-bold mb-4">Personalização</h2>
            <p>Chatbots adaptados à sua marca</p>
          </div>
          <div className="bg-blue-800 p-6 rounded-lg transition-all duration-300 hover:shadow-xl hover:transform hover:scale-105 animate-slide-in delay-200">
            <h2 className="text-2xl font-bold mb-4">Integração Fácil</h2>
            <p>Conecte com suas plataformas favoritas</p>
          </div>
        </div>

        <section className="py-16 bg-white text-center animate-fade-in">
          <h2 className="text-2xl font-semibold mb-6">Exemplos de Chatbots</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-white p-4 rounded-xl shadow animate-scale-in">
              <h3 className="font-bold mb-2">Bot de Atendimento</h3>
              <p>Responde dúvidas frequentes, coleta informações e redireciona para atendimento humano.</p>
            </div>
            <div className="bg-white p-4 rounded-xl shadow animate-scale-in delay-100">
              <h3 className="font-bold mb-2">Bot para Geração de Leads</h3>
              <p>Capta informações dos visitantes e envia para seu CRM ou email.</p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white text-center animate-fade-in">
          <h2 className="text-2xl font-semibold mb-4">Entre em contato</h2>
          <p className="mb-6">Vamos conversar sobre como um chatbot pode ajudar seu projeto.</p>
          <a
            href="https://wa.me/seunumerowhatsapp"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-500 text-white px-6 py-2 rounded-xl hover:bg-green-600 transition animate-bounce-in"
          >
            Fale pelo WhatsApp
          </a>
        </section>

        {chatVisible && (
          <div className="fixed bottom-4 right-4 w-80 bg-white rounded-lg shadow-xl animate-scale-in">
            <div className="bg-blue-600 text-white p-4 rounded-t-lg">
              <h3 className="font-bold">Chatbot Demo</h3>
            </div>
            <div className="p-4">
              <div className="mb-4">
                <p className="text-gray-800 animate-fade-in">Olá! Como posso ajudar você hoje?</p>
              </div>
              <div className="flex space-x-2">
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition-all duration-300 transform hover:scale-105 animate-fade-in delay-100">
                  Opção 1
                </button>
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition-all duration-300 transform hover:scale-105 animate-fade-in delay-200">
                  Opção 2
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      <footer className="text-center text-sm py-6 text-gray-500 animate-fade-in">
        © {new Date().getFullYear()} Chatbots com IA. Todos os direitos reservados.
      </footer>
    </div>
  );
}

export default App;
