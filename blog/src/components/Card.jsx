import './card.css'

export function Card({ titulo, descripcion, url, urlV }) {
  return (
    <li className='clase'>
      <header>
        <h3>{titulo}</h3>
        <p>{descripcion}</p>
      </header>
      <div className='botones'>
        <a href={url}>PDF</a>
        <a href={urlV}>Video</a>
      </div>
    </li>
  )
}