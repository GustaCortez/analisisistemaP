import React, { useState } from "react";
import "./App.css";

function App() {
  const [form, setForm] = useState({
    nombres: "",
    email: "",
    telefono: "",
    tipoDeParticipacion: "asistente",
    comentarios: "",
    confirmacionAsistencia: false,
  });

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form data:", form); // Aquí manejas el envío del formulario, por ejemplo, enviar a un servidor.
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <h1>Formulario de Participación</h1>
        
        <label>
          Nombre y Apellidos:
          <input
            type="text"
            name="nombres"
            value={form.nombres}
            onChange={handleInputChange}
          />
        </label>

        <label>
          Dirección de correo electrónico:
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleInputChange}
          />
        </label>

        <label>
          Número de teléfono:
          <input
            type="tel"
            name="telefono"
            value={form.telefono}
            onChange={handleInputChange}
          />
        </label>

        <label>
          Tipo de participación:
          <select
            name="tipoDeParticipacion"
            value={form.tipoDeParticipacion}
            onChange={handleInputChange}
          >
            <option value="asistente">Asistente</option>
            <option value="expositor">Expositor</option>
            <option value="voluntario">Voluntario</option>
          </select>
        </label>

        <label>
          Comentarios:
          <textarea
            name="comentarios"
            value={form.comentarios}
            onChange={handleInputChange}
          />
        </label>

        <label>
          Confirmo mi asistencia:
          <input
            type="checkbox"
            name="confirmacionAsistencia"
            checked={form.confirmacionAsistencia}
            onChange={handleInputChange}
          />
        </label>

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default App;


