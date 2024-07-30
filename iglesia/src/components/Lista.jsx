import './lista.css'
import { Card } from './Card.jsx'
import data from '../mocks/data.json'


export function Lista() {
  return (
    <ul className='clases'>
      {
        data.clases.map(clase => <Card key={clase.id} {...clase} />)
      }
    </ul>
  )
}