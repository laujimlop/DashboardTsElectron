import { useState } from "react";
import ProductCard from "../components/ProductCard";

// "interface" describe la FORMA de los datos que devuelve la API
interface Producto {
  id: number;
  title: string;
  price: number;
  description: string;
}

function Inventario() {
  const [productos, setProductos] = useState<Producto[]>([]);
  const [cargando, setCargando] = useState(false);
  const [busqueda, setBusqueda] = useState("");

  async function cargar() {
    setCargando(true);

    try {
      // fetch hace la petición GET a la API | "await" = espera a que llegue antes de pasar a la siguiente línea
      const res = await fetch("https://fakestoreapi.com/products?limit=6");

      if (!res.ok) {
        throw new Error(`Error en el servidor: ${res.status}`);
      }

      // .json() convierte la respuesta en un array de JavaScript
      // guardamos ese array en el estado -> React repinta con los productos de tipo Producto
      setProductos(await res.json());

    } catch (error) {
      console.error(error);
    } finally {
      setCargando(false);
    }
  }

  // .filter() se queda solo con los productos que cumplan la condición
  const filtrados = productos.filter((e) =>
    // .includes() es true si el nombre contiene lo que se ha escrito en el buscador.
    e.title.toLowerCase().includes(busqueda.toLowerCase()),
  );

  return (
    <section>
      <h2>Inventario</h2>

      {/* onClick: al hacer clic se llama a la función cargar.
          si pusiesemos cargar() se ejecutaría nada más pintar el componente, no al pulsar. */}
      <button onClick={cargar}>Cargar inventario</button>

      <input
        value={busqueda}
        // cuando escribamos algo se cambiara el valor del estado de busqueda
        onChange={(e) => setBusqueda(e.target.value)}
        placeholder="Buscar por título..."
      />

      {cargando && <p>Cargando datos del servidor…</p>}

      {filtrados.map((e) => (
        <ProductCard key={e.id} titulo={e.title} precio={e.price} descripcion={e.description} />
      ))}

    </section>
  );
}

// Exportamos el componente para poder importarlo en App.tsx.
export default Inventario;
