// src/CohortDetails.js
import React from 'react';
import styles from './CohortDetails.module.css';

function CohortDetails({ cohort }) {
  const statusClass = cohort.status.toLowerCase() === "ongoing" ? styles.ongoing : styles.scheduled;

  return (
    <div className={styles.box}>
      <h3 className={statusClass}>
        {cohort.id} - {cohort.name}
      </h3>
      <dl>
        <dt>Started On</dt>
        <dd>{cohort.startDate}</dd>

        <dt>Current Status</dt>
        <dd>{cohort.status}</dd>

        <dt>Coach</dt>
        <dd>{cohort.coach}</dd>

        <dt>Trainer</dt>
        <dd>{cohort.trainer}</dd>
      </dl>
    </div>
  );
}

export default CohortDetails;
