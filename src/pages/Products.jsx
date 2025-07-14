import { useEffect, useState } from "react";
import axios from "axios";
import ProductForm from "../components/ProductForm";
import ProductCard from "../components/ProductCard";

export default function Products() {
  const [productos, setProductos] = useState([]);

  const fetchProductos = async () => {
    const res = await axios.get("http://localhost:3000/api/products");
    setProductos(res.data);
  };

  useEffect(() => {
    fetchProductos();
  }, []);

  return (
    <div>
      <h2>Gestión de Productos</h2>
      <ProductForm onSave={fetchProductos} />
      <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
        {productos.map((p) => (
          <ProductCard key={p._id} producto={p} onUpdate={fetchProductos} />
        ))}
      </div>
    </div>
  );
}
