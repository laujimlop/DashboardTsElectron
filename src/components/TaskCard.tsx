import "../styles/Card.css";

// las props que recibe la tarjeta: los 3 datos que pide el enunciado
interface Props {
  titulo: string;
  completada: boolean;
}

// recibimos las props desestructuradas
function ProductCard({ titulo, completada }: Props) {
  return (
    <article className={!completada ? "tarjeta tareaPendiente" : "tarjeta"}>

      <h3>{titulo}</h3>

      {/* Que se escriba si esta completada o pendiente */}
      <p>{completada ? "Completada" : "Pendiente"}</p>

    </article>
  );
}

export default ProductCard;
