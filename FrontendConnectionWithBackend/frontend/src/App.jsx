import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [jokes, setJokes] = useState([])        

  useEffect(() => {                       
    axios.get('/api/jokes')

    .then((response) => {
      setJokes(response.data);
    })
    
    .catch((error) => {
      console.log(error);
    })
  })
 
  return (
    <>
      <h1>This is App</h1>
      <p>Jokes: {jokes[0] && jokes[0].length}</p>
      {
        jokes[0] && jokes[0].map((joke, index) => (            // index is used for optimization so that react can differ b/w elements
          <div key = {joke.id}>
            <h3>{joke.title}</h3>
            <p>{joke.content}</p>
          </div>
        ))
      }
    </>
  )
}

export default App
