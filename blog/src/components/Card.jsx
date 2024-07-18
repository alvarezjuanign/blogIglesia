import './card.css'

export function Card({ titulo, descripcion, url }) {
  return (
    <li className='clase'>
      <h3>{titulo}</h3>
      <p>{descripcion}</p>
      <a href={url}>Leer PDF</a>
    </li>
  )
}