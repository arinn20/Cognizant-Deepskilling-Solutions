import React from 'react';
// github id: @mukherjeea10
const App = () => {
  // Heading JSX Element
  const heading = <h1>Office Space Rental App</h1>;

  // Office image
  const imageUrl = "https://cdn.pixabay.com/photo/2017/03/28/12/11/chairs-2181960_1280.jpg";

  // Office object
  const office = {
    name: "Galaxy Towers",
    rent: 55000,
    address: "Downtown Street, Mumbai"
  };

  // Office list
  const officeList = [
    { name: "Aditya Hub", rent: 45000, address: "Sector V, Kolkata" },
    { name: "Mukherjee Building", rent: 75000, address: "Juhu, Mumbai" },
    { name: "Adi Workspaces", rent: 62000, address: "Garia, Kolkata" },
    { name: "Cogni Hive", rent: 58000, address: "Central, Kolkata" }
  ];

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      {heading}

      <img src={imageUrl} alt="Office" style={{ width: '300px', height: '150px' }} />

      <h2>Featured Office</h2>
      <p><strong>Name:</strong> {office.name}</p>
      <p>
        <strong>Rent:</strong>{' '}
        <span style={{ color: office.rent > 60000 ? 'green' : 'red' }}>
          ₹{office.rent}
        </span>
      </p>
      <p><strong>Address:</strong> {office.address}</p>

      <h2>All Available Offices</h2>
      <ul>
        {officeList.map((o, i) => (
          <li key={i} style={{ marginBottom: '15px' }}>
            <p><strong>Name:</strong> {o.name}</p>
            <p>
              <strong>Rent:</strong>{' '}
              <span style={{ color: o.rent > 60000 ? 'green' : 'red' }}>
                ₹{o.rent}
              </span>
            </p>
            <p><strong>Address:</strong> {o.address}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
