import { Link, useParams } from "react-router-dom"
import { useEffect, useState } from "react"

import { getStarshipDetails } from "../../services/sw-api"

import Loading from "../Loading/Loading"

const StarshipDetails = ({starships}) => {
  const [selectedStarship, setSelectedStarship] = useState({})
  const [selectedPilots, setSelectedPilots] = useState([])
  let pilotURLs = []

  const {starshipId} = useParams()

  useEffect(() => {
    const fetchStarshipDetails = async () => {
      const starshipData = await getStarshipDetails(starshipId)
      pilotURLs = starshipData.pilots
      setSelectedStarship(starshipData)
      fetchPilots(pilotURLs).then(pilots => {
        setSelectedPilots(pilots)
      })
    }
    const fetchPilots = async (pilotURLs) => {
      const promises = pilotURLs.map(pilotURL => fetch(pilotURL).then(res => res.json()))
      const pilotsData = await Promise.all(promises)
      return pilotsData
    }
    fetchStarshipDetails()
  }, [])



  return (
    <>
      {selectedStarship.name ?
        <main className="starship-container">
            <>
              <div>NERM: {selectedStarship.name}</div>
              <div>MERDERL: {selectedStarship.model}</div>
              <div>
                {selectedPilots.length ?
                  <ul>
                    {selectedPilots.map(selectedPilot => (
                      <li key={selectedPilot.url}>{selectedPilot.name}</li>
                    ))}
                  </ul>
                :
                  'NER PERLERTS'
                }
              </div>
              <Link to="/starships">RERTERN</Link>
            </>
        </main>
            :
        <Loading />
      }
    </>
  )
}

export default StarshipDetails