import { useState } from "react";
import axios from "axios";

export default function ProductForm({ onSave }) {
  const [form, setForm] = useState({
    nombre_producto: "",
    categoria: "",
    vendedor: "",
    sucursal: "",
    precio_unitario: 0,
    cantidad: 1,
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.nombre_producto || form.precio_unitario <= 0) {
      return alert("Nombre requerido y precio debe ser mayor a 0");
    }

    await axios.post("http://localhost:3000/api/products", form);
    setForm({ ...form, nombre_producto: "" });
    onSave();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="nombre_producto" placeholder="Nombre" value={form.nombre_producto} onChange={handleChange} />
      <input name="categoria" placeholder="Categoría" value={form.categoria} onChange={handleChange} />
      <input name="vendedor" placeholder="Vendedor" value={form.vendedor} onChange={handleChange} />
      <input name="sucursal" placeholder="Sucursal" value={form.sucursal} onChange={handleChange} />
      <input name="precio_unitario" type="number" value={form.precio_unitario} onChange={handleChange} />
      <input name="cantidad" type="number" value={form.cantidad} onChange={handleChange} />
      <button type="submit">Guardar producto</button>
    </form>
  );
}
