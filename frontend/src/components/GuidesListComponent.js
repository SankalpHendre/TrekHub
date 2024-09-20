import React, { useState, useEffect } from 'react';
import logo2 from "../Images/a.jpg";
export default function GuidesListComponent() {
  const [guides, setGuides] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/guides')  
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setGuides(data);
      })
      .catch(error => {
        console.error('Error fetching guides:', error);
      });
  }, []);

  const guideRows = guides.map(guide => (
    <tr key={guide.user_id}>
      <td>{guide.fname} {guide.lname}</td>
      <td>{guide.contact}</td>
      <td>{guide.email}</td>
    </tr>
  ));

  return (
    <div className="background-image" style={{ backgroundImage: `url(${logo2})` }}>
    <div className="container mt-4">
      <h2 className="text-center mb-3">Guides List</h2>
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Contact</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {guideRows}
        </tbody>
      </table>
    </div>
    </div>
  );
}
