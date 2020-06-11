import React from 'react';
import './Fixture.css';
import { useParams } from 'react-router-dom';

// My Components

const Fixture = () => {
  const { fixtureID } = useParams();
  return (
    <div className="Fixture">
      <h1>Fixture Component</h1>
      <h2>{fixtureID}</h2>
    </div>
  );
}


export default Fixture;
