import React from 'react';
// github id: @mukherjeea10
const ListofPlayers = () => {
  const players = [
    { name: 'Virat', score: 95 },
    { name: 'Rohit', score: 88 },
    { name: 'Dhawan', score: 45 },
    { name: 'Rahul', score: 65 },
    { name: 'Pant', score: 78 },
    { name: 'Hardik', score: 82 },
    { name: 'Jadeja', score: 69 },
    { name: 'Ashwin', score: 55 },
    { name: 'Bumrah', score: 91 },
    { name: 'Shami', score: 72 },
    { name: 'Kuldeep', score: 60 },
  ];

  const below70 = players.filter(p => p.score < 70);

  return (
    <div>
      <h2>All Players</h2>
      {players.map((p, i) => (
        <p key={i}>{p.name} - {p.score}</p>
      ))}

      <h3>Players Scoring Below 70</h3>
      {below70.map((p, i) => (
        <p key={i}>{p.name} - {p.score}</p>
      ))}
    </div>
  );
};

export default ListofPlayers;
