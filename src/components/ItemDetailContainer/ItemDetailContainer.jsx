import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getDiscoById } from "../../asyncMock";
import ItemDetail from "../ItemDetail/ItemDetail";

export default function ItemDetailContainer() {
  const [disco, setDisco] = useState(null);
  const { productId } = useParams();

  useEffect(() => {
    getDiscoById(Number(productId))
      .then((data) => setDisco(data))
      .catch((error) => console.error("Error al cargar el disco:", error));
  }, [productId]);

  return (
    <div className="container mt-4">
      {disco ? <ItemDetail disco={disco} /> : <p>Cargando disco...</p>}
    </div>
  );
}

