// src/App.js
import React from 'react';
import CohortDetails from './CohortDetails';

function App() {
  const cohorts = [
    {
      id: 'INTADMDF10',
      name: '.NET FSD',
      startDate: '22-Feb-2022',
      status: 'Scheduled',
      coach: 'Aathma',
      trainer: 'Jojo Jose',
    },
    {
      id: 'ADM21JF014',
      name: 'Java FSD',
      startDate: '10-Sep-2021',
      status: 'Ongoing',
      coach: 'Apoorv',
      trainer: 'Elisa Smith',
    },
    {
      id: 'CDBJF21025',
      name: 'Java FSD',
      startDate: '24-Dec-2021',
      status: 'Ongoing',
      coach: 'Aathma',
      trainer: 'John Doe',
    },
  ];

  return (
    <div style={{ border: '1px solid black', padding: '20px' }}>
      <h2>Cohorts Details</h2>
      {cohorts.map((cohort, index) => (
        <CohortDetails key={index} cohort={cohort} />
      ))}
    </div>
  );
}

export default App;

