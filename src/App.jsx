import { useEffect, useState } from 'react';
//import styles from 'App.module.css';
import Table from './components/Table';
import Form from './components/Form';


function App() {
  const [planets, setPlanets] = useState([]);

  const newFetch = () => {
    fetch("https://planet-api-lesson.herokuapp.com/planets")
      .then(response => response.json())
      .then(data => setPlanets(data));
  };

  useEffect(() => {
    newFetch();
  }, [])

  const planetJSX = planets.map(planet => (<p>{planet.name}</p>));

  return (
    <div style={{ backgroundImage: "url(img/fantasyspace.png)" }}>
      <div className="app">
        <h1>Fun with Planets!!</h1>
        {console.log(planets)}
        <Table planets={planets} newFetch={newFetch} />
        <Form newFetch={newFetch} />
      </div>
    </div>
  );
}

export default App;