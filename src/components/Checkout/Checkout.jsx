import { useState } from "react";

export default function Checkout() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    direccion: "",
    tarjeta: "",
  });

  const [compraExitosa, setCompraExitosa] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Información de compra:", formData);
    setCompraExitosa(true); // Simula una compra exitosa
  };

  if (compraExitosa) {
    return (
      <div className="container mt-5">
        <h1 className="text-success">¡Compra realizada con éxito!</h1>
        <p>Gracias por tu compra, {formData.nombre}. Pronto recibirás tu pedido.</p>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <h1>Finalizar Compra</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="nombre" className="form-label">Nombre Completo</label>
          <input
            type="text"
            className="form-control"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Correo Electrónico</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="direccion" className="form-label">Dirección</label>
          <input
            type="text"
            className="form-control"
            id="direccion"
            name="direccion"
            value={formData.direccion}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="tarjeta" className="form-label">Número de Tarjeta</label>
          <input
            type="text"
            className="form-control"
            id="tarjeta"
            name="tarjeta"
            value={formData.tarjeta}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary"> Confirmar Compra </button>
      </form>
    </div>
  );
}

