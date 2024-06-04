import React, { useState } from 'react';
import '../estilos/ingresar.css'; // Asegúrate de tener un archivo CSS para estilos

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar lógica para autenticar al usuario
    console.log('Usuario:', username);
    console.log('Contraseña:', password);
  };
  return (
    <div className="login-container">
      <h2>Iniciar sesión</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Usuario:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <label>
          Contraseña:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <button type="submit">Iniciar sesión</button>
      </form>
    </div>
  );
}

export default Login;