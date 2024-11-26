import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getDiscos, getDiscosByGenero } from '../../asyncMock';
import ItemList from '../ItemList/ItemList';

export default function ItemListContainer() {
  const [discos, setDiscos] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    if (categoryId) {
      getDiscosByGenero(categoryId)
        .then((data) => setDiscos(data))
        .catch((error) => console.error("Error al cargar discos por género:", error));
    } else {
      getDiscos()
        .then((data) => setDiscos(data))
        .catch((error) => console.error("Error al cargar los discos:", error));
    }
  }, [categoryId]);

    console.log(discos)

  return (
    <div>
      <hr />
      <h1>{categoryId ? `Categoría: ${categoryId}` : 'Discos'}</h1>
      <ItemList discos={discos} />
      <hr />

    </div>
  );
}

 