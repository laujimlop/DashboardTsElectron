import "../styles/Card.css";

// las props que recibe la tarjeta: los 3 datos que pide el enunciado
interface Props {
  titulo: string;
  precio: number;
  descripcion: string;
}

// recibimos las props desestructuradas
function ProductCard({ titulo, precio, descripcion }: Props) {
  return (
    <article className="tarjeta">
      <h3>{titulo}</h3>
      <p>{precio}$ {precio > 50 && <span className="altoValor">Activo de Alto Valor</span>}</p>
      <p>{descripcion}</p>
    </article>
  );
}

export default ProductCard;
