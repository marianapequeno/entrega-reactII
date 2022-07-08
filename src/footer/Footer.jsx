import '../global.css'
import Link from '../components/link/Link'

function Footer() {
  return (
    <footer className="footer">
      <p>
        Desenvolvido com 
        <Link href="https://pt-br.reactjs.org/" textLink="React JS"/>
        por 
        <Link href="https://github.com/marianapequeno" textLink="Mariana"/>
      </p>
    </footer>
  )
}

export default Footer