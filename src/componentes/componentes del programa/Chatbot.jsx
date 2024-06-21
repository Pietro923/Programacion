import React from 'react';
import '../../estilos/estilos del programa/Chatbot.css'; // Importar el archivo CSS para los estilos del chatbot

function Chatbot() {
  return (
    <div className="chatbot-container">
      <div className="chatbot">
        <div className="chatbot-header">
          <h3>Chatbot</h3>
        </div>
        <div className="chatbot-body">
          {/* Contenido del chat */}
          <div className="message received">¡Hola! ¿En qué puedo ayudarte?</div>
          {/* Aquí irían los mensajes del chat */}
        </div>
        <div className="chatbot-footer">
          {/* Área de entrada de texto */}
          <input type="text" placeholder="Escribe tu mensaje..." />
          <button>Enviar</button>
        </div>
      </div>
    </div>
  );
}

export default Chatbot;