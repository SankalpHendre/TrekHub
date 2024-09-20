import React, { useEffect, useState } from 'react';

export default function GuideProfileComponent() {
  const user_id = localStorage.getItem("user_id");
  const [trek, setTrek] = useState(null);
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
          return fetch(`http://localhost:8080/profile/${loginId}`)
        })
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          if (data.length > 0) {
            setTrek(data[0]); // Set only the first object
          }
        })
        .catch(error => {
          setError(error);
          console.error('Error fetching data:', error);
        });
    }
  }, [user_id]);

  console.log(trek);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!trek) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Profile for {user_id}</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Userid</th>
            <th>Name</th>
            <th>Email</th>
            <th>Contact</th>
            <th>AdharNo</th>
            
          </tr>
        </thead>
        <tbody>
          <tr>
          <td>{trek.login_id.uid}</td>
            <td>{trek.fname} {trek.lname}</td>
            <td>{trek.email}</td>
            <td>{trek.contact}</td>
            <td>{trek.adharno}</td>
            
          </tr>
        </tbody>
      </table>
    </div>
  );
}
