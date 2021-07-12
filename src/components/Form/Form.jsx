import React, { useState } from "react";
import styles from "./Form.module.scss";

const Form = ({newFetch}) => {
  const [hasLife, setHasLife] = useState(false);
  const [name, setName] = useState();
  const [type, setType] =useState();
  const [noOfMoons, setNoOfMoons] = useState();

  const data = {
    name: name,
    hasKnownLife: hasLife,
    type: type,
    noOfMoons: parseInt(noOfMoons)
  };

  const submit = () => {
    fetch("https://planet-api-lesson.herokuapp.com/planets", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      newFetch();
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  };

  return (
    <section>
      <h3>You can add a new planet!</h3>
      <p>Name:</p>
      <input type="text" onInput={e => setName(e.target.value)} />
      <p>Does it have known life?:<input type="checkbox" onInput={() => setHasLife(!hasLife)} /></p>
      <p>What type of planet is it?:</p>
      <input type="text" onInput={e => setType(e.target.value)} />
      <p>How many moons?:</p>
      <input type="number" onInput={e => setNoOfMoons(e.target.value)} />
      <button onClick={() => submit()}>Add</button>
    </section>
  );
};

export default Form;
