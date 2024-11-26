import { useNavigate } from "react-router-dom";

export default function Cart() {
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate("/checkout");
  };

  return (
    <div className="container mt-4">
      <h1>Carrito de Compras</h1>
      <p>Aquí se mostrarán los productos seleccionados para la compra.</p>
      <button className="btn btn-success mt-3" onClick={handleCheckout}>
        Finalizar Compra
      </button>
    </div>
  );
}

