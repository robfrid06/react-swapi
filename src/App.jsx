import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';

import NavBar from './components/NavBar/NavBar';
import LandingPage from './components/LandingPage/LandingPage';
import Starships from './components/Starships/Starships';
import StarshipDetails from './components/StarshipDetails/StarshipDetails';
import Loading from './components/Loading/Loading';

import { getAllStarships } from './services/sw-api';

function App() {
  const [starships, setStarships] = useState([])

  useEffect(() => {
    const fetchStarships = async () => {
      const starshipsData = await getAllStarships()
      setStarships(starshipsData.results)
    }
    fetchStarships()
  }, [])

  return (
    <>
      {starships.length ?
        <>
          <NavBar />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/starships">
              <Route index element={<Starships starships={starships} />} />
              <Route path=":starshipId" element={<StarshipDetails />}  />
            </Route>
          </Routes>
        </>
        :
        <Loading />
      }
    </>
  );
}

export default App;
