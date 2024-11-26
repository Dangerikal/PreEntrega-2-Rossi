import Item from '../Item/Item';

export default function ItemList({ discos }) {
  return (
    <div className="container">
      <div className="row">
        {discos.map((disco) => (
          <Item key={disco.id} disco={disco} />
        ))}
      </div>
    </div>
  );
}