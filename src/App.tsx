import { useState } from "react";
import Header from "./components/Header.tsx";
import Sidebar, { type Seccion } from "./components/Sidebar.tsx";

import Personal from "./views/Personal.tsx";
import Inventario from "./views/Inventario.tsx";
import Incidencia from "./views/Incidencia.tsx";

import "./styles/App.css";
import "./styles/View.css";

function App() {
  // el estado vive aquí, en el padre, porque App decide qué se pinta en <main>
  const [seccion, setSeccion] = useState<Seccion>("Personal");

  return (
    <>

      <Header />

      <div id="cuerpo">

        <Sidebar seccion={seccion} setSeccion={setSeccion} />

        <main id="panel_central">
          {seccion === "Personal" && <Personal />}
          {seccion === "Inventario" && <Inventario />}
          {seccion === "Incidencias" && <Incidencia />}
        </main>

      </div>
    </>
  );
}

export default App;
