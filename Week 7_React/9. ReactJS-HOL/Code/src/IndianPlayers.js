import React from 'react';
// github id: @mukherjeea10
const IndianPlayers = () => {
  const oddTeam = ['Virat', 'Dhawan', 'Pant', 'Jadeja', 'Shami'];
  const evenTeam = ['Rohit', 'Rahul', 'Hardik', 'Ashwin', 'Bumrah'];

  const [a1, a2, a3, a4, a5] = oddTeam;
  const [b1, b2, b3, b4, b5] = evenTeam;

  const T20players = ['Kohli', 'SKY', 'Rishabh'];
  const RanjiTrophy = ['Pujara', 'Karun', 'Iyer'];

  const mergedPlayers = [...T20players, ...RanjiTrophy];

  return (
    <div>
      <h2>Odd Team Players</h2>
      <ul>
        {[a1, a2, a3, a4, a5].map((p, i) => <li key={i}>{p}</li>)}
      </ul>

      <h2>Even Team Players</h2>
      <ul>
        {[b1, b2, b3, b4, b5].map((p, i) => <li key={i}>{p}</li>)}
      </ul>

      <h2>Merged T20 and Ranji Trophy Players</h2>
      <ul>
        {mergedPlayers.map((p, i) => <li key={i}>{p}</li>)}
      </ul>
    </div>
  );
};

export default IndianPlayers;
