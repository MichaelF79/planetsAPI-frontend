import React from "react";
import Planet from "../Planet";
import styles from "./Table.module.scss";

const Table = ({ planets, newFetch }) => {
  const headingJSX = (
    <div className={styles.heading}>
      <p>Id</p>
      <p>Name</p>
      <p>Has Known Life</p>
      <p>Type</p>
      <p>Number of Moons</p>
    </div>
  );

  const planetsJSX = planets.map(planet => (<Planet planet={planet} key={planet.id} newFetch={newFetch} />));
  return (
    <>
    <div className={styles.table}>
      {headingJSX}
      {planetsJSX}
    </div>
    </>
  );
};

export default Table;
