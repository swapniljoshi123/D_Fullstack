import React, { useEffect, useState } from 'react';
import { fetchUserDetails } from '../api';  // Importing the named export
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Home = () => {
    const navigate = useNavigate(); // Initialize useNavigate
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch user details when the component mounts
    const getUserDetails = async () => {
      try {
        const userDetails = await fetchUserDetails();
        setUser(userDetails);  // Set the user details in the state
      } catch (error) {
        console.error("Failed to fetch user details", error);
      }
    };

    getUserDetails();
  }, []);

  if (!user) {
    return <div>Loading user details...</div>;
  }
  const handleLogout = () =>
  {
    navigate("/logout")
  };

  return (
    <div>
      <h1>Welcome, {user.username}!</h1>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone_number}</p>
      <p>Username: {user.username}</p>
      {/* Display other user details here */}
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Home;
