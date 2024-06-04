import React, { useState } from 'react';
import '../estilos/ingresar.css'; // Asegúrate de tener un archivo CSS para estilos

function Login() {
  const [dni, setdni] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar lógica para autenticar al usuario
    console.log('dni:', dni);
    console.log('Usuario:', username);
    console.log('Contraseña:', password);
  };

  return (
    <div className="login-page">
      <div className="company-name">
        
      </div>
      <div className="login-container">
        <h2>¡Hola! Te damos la bienvenida</h2>
        <h3>Completá tus datos y empezá a operar.</h3>
        <form onSubmit={handleSubmit}>
        <label>
            DNI:
            <input type="text" value={dni} onChange={(e) => setdni(e.target.value)} />
          </label>
          <label>
            Usuario:
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
          </label>
          <label>
            Contraseña:
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </label>
          <button type="submit">Ingresar</button>
        </form>
      </div>
    </div>
  );
}

export default Login;