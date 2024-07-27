import './App.css'
import { Lista } from './components/Lista.jsx'

export function App() {
  return (
    <main>
      <nav>
        <h1>Iglesia Proyecto de Vida</h1>
      </nav>
      <div className='barraBusqueda'>
        <input className='inputBuscador' type='text' />
        <input className='botonBuscador' type='submit' value='Buscar' />
      </div>
      <h2>Clases</h2>
      <article>
        <Lista />
      </article>
    </main >
  )
}