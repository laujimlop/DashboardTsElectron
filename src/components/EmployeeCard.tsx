import "../styles/Card.css";

// las props que recibe la tarjeta: los 3 datos que pide el enunciado
interface Props {
  nombre: string;
  correo: string;
  ciudad: string;
}

// recibimos las props desestructuradas
function EmployeeCard({ nombre, correo, ciudad }: Props) {
  return (
    <article className="tarjeta">
      <h3>{nombre}</h3>
      <p>{correo}</p>
      <p>{ciudad}</p>
    </article>
  );
}

export default EmployeeCard;
