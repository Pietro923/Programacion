import React, { useState, useEffect, useRef } from 'react';
import { GoogleGenerativeAI } from "@google/generative-ai";
import '../../estilos/estilos del programa/Chatbot.css';

// Configurar la clave API desde el archivo .env
const apiKey = process.env.REACT_APP_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

function Chatbot() {
  const [messages, setMessages] = useState([
    { text: '¡Hola! ¿En qué puedo ayudarte?', sender: 'bot' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef(null);

  const chat = model.startChat({
    history: [
      {
        role: "user",
        parts: [{ text: "¡Hola! ¿En qué puedo ayudarte?" }],
      },
      {
        role: "model",
        parts: [{ text: "¡Hola! ¿En qué puedo ayudarte?" }],
      },
    ],
    generationConfig: {
      maxOutputTokens: 100,
    },
  });

  const scrollToBottom = () => bottomRef.current?.scrollIntoView({ behavior: "smooth" });

  useEffect(() => {
    if (!loading) scrollToBottom();
  }, [loading]);

  const addMessageToHistory = (role, message) => {
    setMessages((prev) => [...prev, { text: message, sender: role }]);
  };

  const fetchData = async () => {
    setLoading(true);
    addMessageToHistory("user", input);
    try {
      const result = await chat.sendMessage(input);
      const response = await result.response;
      const botMessage = response.text();
      addMessageToHistory("bot", botMessage);
    } catch (error) {
      console.error('Error al enviar el mensaje', error);
      addMessageToHistory("bot", "Lo siento, hubo un error al procesar tu solicitud.");
    }
    setInput('');
    setLoading(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (input.trim()) {
      fetchData();
    }
  };

  return (
    <div className="chatbot-container">
      <div className="chatbot">
        <div className="chatbot-header">
          <h3>Chatbot</h3>
        </div>
        <div className="chatbot-body">
          {messages.map((msg, index) => (
            <div key={index} className={`message ${msg.sender}`}>
              {msg.text}
            </div>
          ))}
          <div ref={bottomRef} />
        </div>
        <div className="chatbot-footer">
          <form className="chat-form" onSubmit={handleSubmit}>
            <textarea
              className="chat-form-text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Escribe tu mensaje..."
            />
            <button className="chat-form-button" type="submit">Enviar</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Chatbot;
