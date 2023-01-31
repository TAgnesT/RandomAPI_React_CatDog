import './App.css';
import axios from 'axios'
import {useEffect, useState} from 'react'
import DogContainer from './components/DogContainer'

function App() {

  const [dog, setDog] = useState("");

  useEffect(()=> {

      axios.get("https://dog.ceo/api/breeds/image/random")
      .then(res => setDog(res.data.message))

  },[])


  const getRandomDog = ()=> {

    axios.get("https://dog.ceo/api/breeds/image/random")
    .then(res => setDog(res.data.message))

    document.getElementById("dogContainer").innerHTML = `<img src='${dog}' />`;
  }

  return (
    <>
      <div className="result">
          <DogContainer id="dogContainer" click={getRandomDog} />
      </div>
    </>
  );
}

export default App;
