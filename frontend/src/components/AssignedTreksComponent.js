import React, { useEffect, useState } from 'react';

export default function AssignedTreksComponent() {
  const user_id = localStorage.getItem("user_id");
  const [treks, setTreks] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (user_id) {
      fetch(`http://localhost:8080/userid/${user_id}`)
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(loginId => {
          return fetch(`http://localhost:8080/plantreks/${loginId}`)
        })
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => setTreks(data))
        .catch(error => {
          setError(error);
          console.error('Error fetching data:', error);
        });
    }
  }, [user_id]);

 console.log(treks)
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h2>Assigned Treks for {user_id}</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Trek Name</th>
            <th>Start-Date</th>
            <th>Capacity</th>
            <th>Duration</th>
          </tr>
        </thead>
        <tbody>
          {treks.map((trek) => (
            <tr key={trek.trek_id}>
              <td>{trek.trekidobj.trek_name}</td>
              <td>{trek.start_date}</td>
              <td>{trek.trekidobj.capacity}</td>
              <td>{trek.trekidobj.duration}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
