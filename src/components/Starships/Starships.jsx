import Starship from "./Starship"

const Starships = ({starships}) => {
  
  return (
    <main className="starships-container">
      {starships.map(starship => (
        <Starship key={starship.url} starship={starship} />
      ))}
    </main>
  )
}

export default Starships