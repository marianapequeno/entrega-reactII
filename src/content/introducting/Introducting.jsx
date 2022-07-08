import './introducting.css'
import meme from "./meme.png"

function Introducting() {
  return (
    <section className="introducting">
      <img src={meme} alt="Meme tentando lembrar quem sou"/>
      <section className="container-text">
        <h2 className="title-2">Prazer, Mariana</h2>
        <p className="paragraph">Aluna da Reprograma, tentando a transição de carreira, aprendendo desenvolvimento front-end.</p>
      </section>
    </section>
  )
}

export default Introducting