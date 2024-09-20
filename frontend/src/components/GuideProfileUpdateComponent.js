import React, { useState, useEffect } from 'react';

export default function GuideProfileUpdateComponent() {
  const user_id = localStorage.getItem("user_id");
  const [user, setUser] = useState(null);
  const [updatedUser, setUpdatedUser] = useState({});
  const [error, setError] = useState(null);
  const [updateSuccess, setUpdateSuccess] = useState(false); // New state for update success

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
            setUser(data[0]);
            setUpdatedUser(data[0]);
          }
        })
        .catch(error => {
          setError(error);
          console.error('Error fetching data:', error);
        });
    }
  }, [user_id]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUpdatedUser({ ...updatedUser, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(`http://localhost:8080/updateprofile/${user.user_id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedUser),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Profile updated:', data);
      setUser(data);
      setUpdateSuccess(true); // Update the success state
    })
    .catch(error => {
      setError(error);
      console.error('Error updating profile:', error);
    });
  };

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>User Profile</h2>
      {updateSuccess && <div>Profile updated successfully!</div>} {/* Display success message */}
      <form onSubmit={handleSubmit}>
        <label>First Name:</label>
        <input type="text" name="fname" value={updatedUser.fname || ''} onChange={handleInputChange} />
        <br />
        <label>Last Name:</label>
        <input type="text" name="lname" value={updatedUser.lname || ''} onChange={handleInputChange} />
        <br />
        <label>Email:</label>
        <input type="text" name="email" value={updatedUser.email || ''} onChange={handleInputChange} />
        <br />
        <label>Contact:</label>
        <input type="text" name="contact" value={updatedUser.contact || ''} onChange={handleInputChange} />
        <br />
        <br />
        <button type="submit">Update Profile</button>
      </form>
    </div>
  );
}
