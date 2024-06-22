import React, { useState, useEffect, useRef } from 'react';
import { GoogleGenerativeAI } from "@google/generative-ai";
import '../../estilos/estilos del programa/Chatbot.css';

// Configurar la clave API desde el archivo .env
const apiKey = process.env.REACT_APP_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [chatInstance, setChatInstance] = useState(null);
  const bottomRef = useRef(null);

  const initialPrompt = `
    Eres el SEO de la empresa Tech-Innovate. 
    Tech-Innovate se especializa en soluciones tecnológicas avanzadas. 
    Ofrecemos servicios de desarrollo de software, consultoría tecnológica, y gestión de proyectos IT. 
    Nuestra página web permite a los usuarios registrarse, acceder a sus perfiles, y solicitar servicios en línea. 
    Estás aquí para ayudar a los usuarios con cualquier pregunta sobre nuestros servicios y cómo usar nuestra página.
  `;

  useEffect(() => {
    const initializeChat = async () => {
      const chat = model.startChat({
        history: [
          { role: "user", parts: [{ text: initialPrompt }] },
        ],
        generationConfig: { maxOutputTokens: 100 }
      });
      setMessages([{ text: '¡Hola! ¿En qué puedo ayudarte hoy?', sender: 'bot' }]);
      setChatInstance(chat);
    };

    initializeChat();
  }, []);

  const scrollToBottom = () => bottomRef.current?.scrollIntoView({ behavior: "smooth" });

  useEffect(() => {
    if (!loading) scrollToBottom();
  }, [loading]);

  const addMessageToHistory = (role, message) => {
    setMessages((prev) => [...prev, { text: message, sender: role }]);
  };

  const fetchData = async (userInput) => {
    if (!chatInstance) {
      console.error("Chat instance is not ready yet");
      return;
    }
    const result = await chatInstance.sendMessage(userInput);
    const response = await result.response;
    const botMessage = response.text();
    return botMessage;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (input.trim()) {
      setLoading(true);
      const userMessage = input.trim();
      addMessageToHistory("user", userMessage);
      const botResponse = await fetchData(userMessage);
      if (botResponse) {
        addMessageToHistory("bot", botResponse);
      }
      setInput('');
      setLoading(false);
    }
  };

  return (
    <div className={`chatbot-container ${isOpen ? 'open' : ''}`}>
      <div className="chatbot">
        <div className="chatbot-header" onClick={() => setIsOpen(!isOpen)}>
          <h3>Chatbot</h3>
          <span className={`chevron ${isOpen ? 'open' : ''}`}>&#8964;</span>
        </div>
        <div className={`chatbot-body ${isOpen ? 'open' : ''}`}>
          {messages.map((msg, index) => (
            <div key={index} className={`message ${msg.sender}`}>
              {msg.text}
            </div>
          ))}
          <div ref={bottomRef} />
        </div>
        <div className={`chatbot-footer ${isOpen ? 'open' : ''}`}>
          <form className="chat-form" onSubmit={handleSubmit}>
            <textarea
              className="chat-form-text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Escribe tu mensaje..."
            />
            <button className="chat-form-button" type="submit" disabled={!input.trim()}>
              Enviar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
