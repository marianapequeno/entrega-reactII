import { useState, useEffect } from 'react'
import './other-repos.css'
import Link from '../../components/link/Link'


function OtherRepos() {
  const [repos, setRepos] = useState([])

  useEffect(() => {
    async function getData(){
      const response = await fetch("https://api.github.com/users/marianapequeno/repos")
      const data = await response.json()
      setRepos(data)
    }
    getData()
  }, [])

  return(
    <>
      <h2 className="title-2">Repositório feitos na Reprograma</h2>
      <section className="container-cards">
          {repos.map(repo => {
            return(
              <div className="cards" key={repo.id}>
                <h2 className="title-2">{repo.name}</h2>
                <p className="paragraph">{repo.description}</p>
                <h3>Conteúdo: </h3>
                <ul>
                  {repo.topics.map(item => {
                    return <li key={item}>{item}</li>
                  })}
                </ul>
                <Link href={repo.html_url} textLink="link do repositório"/>
              </div>
            )
          })}
      </section>
    </>
  )
}

export default OtherRepos