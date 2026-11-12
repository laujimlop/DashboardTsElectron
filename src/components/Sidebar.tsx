import "../styles/Sidebar.css";

// Seccion solo puede valer uno de estos 3 textos (cualquier otro da error)
// lo exportamos porque App.tsx también lo necesita
export type Seccion = "Personal" | "Inventario" | "Incidencias";

// lo que recibe SidePanel de su padre (App):
// - seccion: cuál está activa ahora
// - setSeccion: la función para cambiarla
interface Props {
    seccion: Seccion;
    setSeccion: (s: Seccion) => void;
}

// en vez de escribir 3 botones casi iguales, hacemos una lista y la recorremos con map()
const opciones: { nombre: Seccion }[] = [
    { nombre: "Personal" },
    { nombre: "Inventario" },
    { nombre: "Incidencias" },
];

function SideBar({ seccion, setSeccion }: Props) {
    return (
        // como un <div> pero que se pone a la izq
        <aside id="sidebar">

            {opciones.map((op) => (

                <button key={op.nombre}
                    className={seccion === op.nombre ? "boton-menu activo" : "boton-menu"}
                    onClick={() => setSeccion(op.nombre)}>

                    {op.nombre}

                </button>
            ))}

        </aside>
    );
}

export default SideBar;