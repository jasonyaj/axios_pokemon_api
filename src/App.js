import axios from "axios";
import { useState } from "react";

function App() {
  
  const [pokemons, setPokemons] = useState([])

  const fetchPokemons = () => {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=807")
      .then((serverRes) => {
        setPokemons(serverRes.data.results)
      })
      .catch( (err) => console.log(err))
  }
  
  return (
    <div>
      <button onClick={fetchPokemons}>Fetch Pokemons</button>
      {
        pokemons.map((monster, idx) => {
          return (
            <ul key={idx}>
              <li >{monster.name}</li>
            </ul>
          )
        })
      }
    </div>
  )
}

export default App;
