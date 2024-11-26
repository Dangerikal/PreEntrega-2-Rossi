
import { useNavigate } from "react-router-dom";

export default function ItemDetail({ disco }) {
  const navigate = useNavigate(); // Hook para redirigir

  const handleFinalizarCompra = () => {
    navigate("/cart"); // Redirige a la ruta del carrito
  };

  if (!disco) {
    return <p>No hay detalles disponibles del disco.</p>;
  }

  return (
    <div className="row">
      <div className="col-md-6">
        <h1>{disco.titulo}</h1>
        <h4 className="text-muted">Artista: {disco.artista}</h4>
        <p><strong>Género:</strong> {disco.genero}</p>
        <p><strong>Año de Lanzamiento:</strong> {disco.anio}</p>
        <p><strong>Precio:</strong> ${disco.precio}</p>
        <p><strong>Stock Disponible:</strong> {disco.stock}</p>
        <p><strong>Descripción:</strong> {disco.descripcion}</p>
        <button className="btn btn-primary mt-3" onClick={handleFinalizarCompra}> Finalizar Compra </button>
      </div>
      <div className="col-md-6">
        <div className="alert alert-info">Imagen no disponible en esta versión</div>
      </div>
    </div>
  );
}
