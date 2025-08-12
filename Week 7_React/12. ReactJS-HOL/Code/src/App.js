import React, { useState } from 'react';
import GuestPage from './GuestPage';
import UserPage from './UserPage';
// github id: @mukherjeea10
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => setIsLoggedIn(true);
  const handleLogout = () => setIsLoggedIn(false);

  let content;
  if (isLoggedIn) {
    content = <UserPage />;
  } else {
    content = <GuestPage />;
  }

  return (
    <div style={{ padding: 20, fontFamily: 'Arial' }}>
      <h1>Ticket Booking App</h1>

      {isLoggedIn ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <button onClick={handleLogin}>Login</button>
      )}

      <hr />
      {content}
    </div>
  );
}

export default App;
