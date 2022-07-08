import './main-repos.css'
import mainRepos from './dados'
import Link from '../../components/link/Link'

function MainRepos() {
  //id, nome, descrição, conteúdo aprendido, imagem e link
  //https://api.github.com/users/marianapequeno/repos
  //"entrega-reactI", "series-protagonizadas-por-mulheres-trans", "mdemaravilhosa", "projetotodolist"
  console.log(mainRepos)
  return(
    <>
      <h2 className="title-2">4 Repositórios feitos na Reprograma</h2>
      <section className="container-main-repos">
          {mainRepos.map(repos => {
            return(
              <section className="cards" key={repos.id}>
                <h2 className="title-2">{repos.name}</h2>
                <img className="imgs-main-repos" src={repos.image} alt={repos.name} />
                <p><strong>Descrição</strong>: {repos.description}</p>
                <h3>Conteúdo Aprendido: </h3>
                <ul>
                  {repos.topics.map(item => <li key={item}>{item}</li>)}
                </ul>
                <Link href={repos.html_url} textLink="Veja este repositório"/>
              </section>
            )
          })}
      </section>
    </>
  )
}

export default MainRepos