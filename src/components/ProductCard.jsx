import axios from "axios";

export default function ProductCard({ producto, onUpdate }) {
  const handleDelete = async () => {
    await axios.delete(`http://localhost:3000/api/products/${producto._id}`);
    onUpdate();
  };

  return (
    <div style={{ border: "1px solid gray", padding: "1rem", width: "250px" }}>
      <h4>{producto.nombre_producto}</h4>
      <p>Categoría: {producto.categoria}</p>
      <p>Precio: ${producto.precio_unitario}</p>
      <button onClick={handleDelete}>Eliminar</button>
    </div>
  );
}
