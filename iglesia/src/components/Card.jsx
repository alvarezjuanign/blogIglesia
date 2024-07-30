import './card.css'

export function Card({ titulo, descripcion, url, urlV }) {
  return (
    <li className='clase'>
      <header>
        <p className='angosto'><strong>{titulo}</strong></p>
        <p className='ancho'><strong>{titulo}: </strong><i>{descripcion}</i></p>
      </header>
      <div className='botones'>
        <a href={url}>PDF</a>
        <a href={urlV}>Video</a>
      </div>
    </li>
  )
}