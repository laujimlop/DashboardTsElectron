import { useState } from "react";
import EmployeeCard from "../components/EmployeeCard";

// "interface" describe la FORMA de los datos que devuelve la API
interface Empleado {
  id: number;
  name: string;
  email: string;
  address: { city: string };
}

function Personal() {
  // La lista de empleados -> [] (vacía) porque todavía no hemos pulsado el botón
  const [empleados, setEmpleados] = useState<Empleado[]>([]);

  // ¿estamos esperando la respuesta del servidor? false = no, true = sí
  const [cargando, setCargando] = useState(false);

  // el texto que el usuario escribe en el buscador -> Empieza "", así que al principio se muestran todos
  const [busqueda, setBusqueda] = useState("");

  // Función que se ejecuta al pulsar el botón "Cargar personal"
  // "async" permite usar "await" dentro: esperar a que algo termine sin bloquear la app
  async function cargar() {
    setCargando(true);

    try {
      // fetch hace la petición GET a la API | "await" = espera a que llegue antes de pasar a la siguiente línea
      const res = await fetch("https://jsonplaceholder.typicode.com/users");

      if (!res.ok) {
        throw new Error(`Error en el servidor: ${res.status}`);
      }

      // .json() convierte la respuesta en un array de JavaScript
      // guardamos ese array en el estado -> React repinta con los empleados
      setEmpleados(await res.json());

    } catch (error) {
      console.error(error);
    } finally {
      setCargando(false);
    }
  }

  // Esto NO es un estado: es una lista calculada a partir de otros dos estados.
  // Se recalcula cada vez que el componente se repinta (al escribir en el buscador).
  // .filter() se queda solo con los empleados que cumplan la condición.
  const filtrados = empleados.filter((e) =>
    // .includes() es true si el nombre contiene lo que se ha escrito en el buscador.
    e.name.toLowerCase().includes(busqueda.toLowerCase()),
  );

  return (
    <section>
      <h2>Personal</h2>

      {/* onClick: al hacer clic se llama a la función cargar.
          si pusiesemos cargar() se ejecutaría nada más pintar el componente, no al pulsar. */}
      <button onClick={cargar}>Cargar personal</button>

      <input
        value={busqueda}
        // cuando escribamos algo se cambiara el valor del estado de busqueda
        onChange={(e) => setBusqueda(e.target.value)}
        placeholder="Buscar por nombre..."
      />

      {/* RENDERIZADO CONDICIONAL: "a && b" significa "si a es true, pinta b".
          Si cargando es false, no se pinta nada. */}

      {cargando && <p>Cargando datos del servidor…</p>}

      {/* .map() recorre el array y devuelve UNA tarjeta por cada empleado
          - nombre, correo, ciudad: son las PROPS, 
            le mandamos los datos a EmployeeCard desde Personal(la clase padre)         
            Aquí traducimos los nombres de la API (name, email, address.city) a los de nuestra tarjeta. */}

      {filtrados.map((e) => (
        <EmployeeCard key={e.id} nombre={e.name} correo={e.email} ciudad={e.address.city} />
      ))}

    </section>
  );
}

// Exportamos el componente para poder importarlo en App.tsx.
export default Personal;
