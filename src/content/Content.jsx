import '../global.css'
import Introducting from './introducting/Introducting'
import MainRepos from './main-repos/MainRepos'
import OtherRepos from './other-repos/OtherRepos'

function Content() {
  return (
    <main className="main-content">
      <Introducting />
      <MainRepos />
      <OtherRepos />
    </main>
  )
}

export default Content