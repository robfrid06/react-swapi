const BASE_URL = 'https://swapi.dev/api/'

export async function getAllStarships() {
  const res = await fetch(`${BASE_URL}/starships`)
  return res.json()
}

export async function getStarshipDetails(starshipId) {
  const res = await fetch(`${BASE_URL}/starships/${starshipId}`)
  return res.json()
}