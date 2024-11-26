import { useNavigate } from 'react-router-dom';

export default function Item({ disco }) {
  const navigate = useNavigate();

  const handleDetailClick = () => {
    navigate(`/detail/${disco.id}`);
  };

  if (!disco) {
    console.error("No se recibió la prop `disco`:", disco);
    return null;
  }

  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100">
        <div className="card-body">
          <h5 className="card-title">{disco.titulo}</h5>
          <p className="card-text">Artista: {disco.artista}</p>
          <p className="card-text">Género: {disco.genero}</p>
          <p className="card-text text-success fw-bold">Precio: ${disco.precio}</p>
        </div>
        <div className="card-footer text-center">
          <button className="btn btn-primary" onClick={handleDetailClick}>
            Ver Detalle
          </button>
        </div>
      </div>
    </div>
  );
}