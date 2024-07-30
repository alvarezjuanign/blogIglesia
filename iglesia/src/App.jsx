import './App.css'
import { Lista } from './components/Lista.jsx'

export function App() {
  return (
    <main>
      <nav>
        <img src="https://res.cloudinary.com/ddmtmwlja/image/upload/v1722316483/kmn68txgcgcd3hpeo3ud.webp" alt="logo de la iglesia" />
        <h1>Iglesia Proyecto de Vida</h1>
      </nav>
      <section>
        <header>
          <h2>Clases</h2>
          <hr />
        </header>
        <article>
          <Lista />
        </article>
      </section>
    </main>
  )
}