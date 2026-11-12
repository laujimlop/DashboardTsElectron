import { useState } from "react";
import "../styles/Header.css";
import logo from "../assets/logo.png";


function Header() {

    // useState devuelve un array de 2 posiciones: [valor, funcionQueLoModifica]
    // Le pasamos una función () => ... para que solo calcule la hora inicial la primera vez
    const [hora, setHora] = useState(() => new Date().toLocaleTimeString());

    // Creamos un interval para actualizar la hora cada segundo
    // setInterval(funcion, 1000) ejecuta la función cada 1000 ms
    setInterval(() => {
        setHora(new Date().toLocaleTimeString());
    }, 1000);

    return (
        <header id="cabecera">

            {/* parte izquierda: {logo} + nombre */}
            <div className="marca">
                <img src={logo} alt="Logo de la empresa" className="logo" />
                <span className="clarOscuro">clarOscuro</span>
            </div>

            {/* parte derecha: la hora, entre llaves porque es una variable de JS */}
            <div className="reloj">{hora}</div>

        </header>
    );
}

export default Header;