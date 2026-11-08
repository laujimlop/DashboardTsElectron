import { useState } from "react";
import TaskCard from "../components/TaskCard";

// Interface Tarea describe la FORMA de los datos que devuelve la API
interface Tarea {
  id: number;
  title: string;
  completed: boolean;
}

function Incidencia() {
  const [tareas, setTareas] = useState<Tarea[]>([]);
  const [cargando, setCargando] = useState(false);
  const [busqueda, setBusqueda] = useState("");


  async function cargar() {

    setCargando(true);

    try {
      // fetch hace la petición GET a la API | "await" = espera a que llegue antes de pasar a la siguiente línea
      const res = await fetch(
        "https://jsonplaceholder.typicode.com/todos?_limit=8",
      );

      // .json() convierte la respuesta en un array de JavaScript
      // guardamos ese array en el estado -> React repinta con las tareas de tipo Tarea
      setTareas(await res.json());

    } catch (error) {
      console.error(error);
    } finally {
      setCargando(false);
    }
  }

  // Esto NO es un estado: es una lista calculada a partir de otros dos estados -> tareas y busqueda
  // .filter() se queda solo con las tareas que cumplan la condición
  const filtrados = tareas.filter((e) =>
    // .includes() es true si el nombre contiene lo que se ha escrito en el buscador.
    e.title.toLowerCase().includes(busqueda.toLowerCase()),
  );

  return (
    <section>
      <h2>Incidencias</h2>

      {/* onClick: al hacer clic se llama a la función cargar.
          si pusiesemos cargar() se ejecutaría nada más pintar el componente, no al pulsar. */}
      <button onClick={cargar}>Cargar tareas</button>

      <input
        value={busqueda}
        // cuando escribamos algo se cambiara el valor del estado de busqueda
        onChange={(e) => setBusqueda(e.target.value)}
        placeholder="Buscar por título..."
      />

      {cargando && <p>Cargando datos del servidor…</p>}

      {filtrados.map((e) => (
        <TaskCard key={e.id} titulo={e.title} completada={e.completed} />
      ))}

    </section>
  );
}

// Exportamos el componente para poder importarlo en App.tsx.
export default Incidencia;
