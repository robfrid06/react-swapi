import { Link } from "react-router-dom"

const Starship = ({starship}) => {
  return (
    <Link to={starship.url.slice(-3).replace('/','')} className="starship">{starship.name}</Link>
  )
}

export default Starship