import './lista.css'
import { Card } from './Card.jsx'

export function Lista() {
  return (
    <ul className='clases'>
      <Card
        className='clase'
        titulo='Clase 1'
        descripcion='Clase 1'
        url='https://drive.google.com/file/d/11zrmSVGob4kJAZVbjLmIm4rGra_SH3rI/view?usp=drive_link'
      />
      <Card
        className='clase'
        titulo='Clase 2'
        descripcion='Clase 1'
        url='https://drive.google.com/file/d/11zrmSVGob4kJAZVbjLmIm4rGra_SH3rI/view?usp=drive_link'
      />
      <Card
        className='clase'
        titulo='Clase 3'
        descripcion='Clase 1'
        url='https://drive.google.com/file/d/11zrmSVGob4kJAZVbjLmIm4rGra_SH3rI/view?usp=drive_link'
      />
      <Card
        className='clase'
        titulo='Clase 4'
        descripcion='Clase 1'
        url='https://drive.google.com/file/d/11zrmSVGob4kJAZVbjLmIm4rGra_SH3rI/view?usp=drive_link'
      />
      <Card
        className='clase'
        titulo='Clase 5'
        descripcion='Clase 1'
        url='https://drive.google.com/file/d/11zrmSVGob4kJAZVbjLmIm4rGra_SH3rI/view?usp=drive_link'
      />
    </ul>
  )
}