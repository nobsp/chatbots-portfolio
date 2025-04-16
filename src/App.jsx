import { useState } from "react";

function App() {
  const [chatVisible, setChatVisible] = useState(false);

  // Teste de deploy Vercel
  return (
    <main className="min-h-screen bg-gray-100 text-gray-800 p-4">
      <section className="text-center py-20">
        <h1 className="text-4xl font-bold mb-4">Chatbots com IA sob medida</h1>
        <p className="text-lg mb-6 max-w-xl mx-auto">
          Automatize atendimentos, gere leads e aumente sua produtividade com chatbots personalizados para seu negócio.
        </p>
        <button
          onClick={() => setChatVisible(true)}
          className="bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700 transition"
        >
          Ver Demonstração
        </button>
      </section>

      <section className="py-16 bg-white text-center">
        <h2 className="text-2xl font-semibold mb-4">O que oferecemos</h2>
        <p className="mb-4">
          Desenvolvemos chatbots que entendem e interagem com seus clientes como humanos, integrados com IA de ponta.
        </p>
        <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
          <li>✔️ Atendimento 24/7</li>
          <li>✔️ Integração com WhatsApp, site, e redes sociais</li>
          <li>✔️ Personalização completa</li>
        </ul>
      </section>

      <section className="py-16 text-center">
        <h2 className="text-2xl font-semibold mb-6">Exemplos de Chatbots</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="bg-white p-4 rounded-xl shadow">
            <h3 className="font-bold mb-2">Bot de Atendimento</h3>
            <p>Responde dúvidas frequentes, coleta informações e redireciona para atendimento humano.</p>
          </div>
          <div className="bg-white p-4 rounded-xl shadow">
            <h3 className="font-bold mb-2">Bot para Geração de Leads</h3>
            <p>Capta informações dos visitantes e envia para seu CRM ou email.</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white text-center">
        <h2 className="text-2xl font-semibold mb-4">Entre em contato</h2>
        <p className="mb-6">Vamos conversar sobre como um chatbot pode ajudar seu projeto.</p>
        <a
          href="https://wa.me/seunumerowhatsapp"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-green-500 text-white px-6 py-2 rounded-xl hover:bg-green-600 transition"
        >
          Fale pelo WhatsApp
        </a>
      </section>

      {chatVisible && (
        <div className="fixed bottom-4 right-4 bg-white rounded-2xl shadow-lg p-4 max-w-xs">
          <div className="mb-2 font-semibold">Chatbot Demo</div>
          <p className="text-sm">
            Olá! Sou um exemplo de chatbot com IA. Como posso te ajudar?
          </p>
          <button
            onClick={() => setChatVisible(false)}
            className="mt-2 text-blue-600 hover:underline text-sm"
          >
            Fechar
          </button>
        </div>
      )}

      <footer className="text-center text-sm py-6 text-gray-500">
        © {new Date().getFullYear()} Chatbots com IA. Todos os direitos reservados.
      </footer>
    </main>
  );
}

export default App;
