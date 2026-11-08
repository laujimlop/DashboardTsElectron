import { useState } from "react";
import Header from "./components/Header.tsx";
import SidePanel, { type Seccion } from "./components/Sidebar.tsx";

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
      <div id="App">
        <Header />
      </div>
      <div id="cuerpo">
        <SidePanel seccion={seccion} setSeccion={setSeccion} />

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
