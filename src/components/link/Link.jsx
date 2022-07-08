import '../../global.css'

function Link(props) {
  return (
    <a href={props.href} target="_blank">{props.textLink}</a>
  )
}

export default Link