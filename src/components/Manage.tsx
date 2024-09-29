import React, { useState } from 'react';
import './Manage.css'; // Import the CSS for styling

const Manage = () => {
  const [dogData, setDogData] = useState({
    name: '',
    age: '',
    picture: '',
    height: '',
    color: '',
    favoritePortFeature: '',
    favoriteMeal: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setDogData({ ...dogData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here, you would typically send the data to the server or state management
    console.log('New Dog Added:', dogData);
    // Reset form after submission
    setDogData({
      name: '',
      age: '',
      picture: '',
      height: '',
      color: '',
      favoritePortFeature: '',
      favoriteMeal: '',
    });
  };

  return (
    <div className="manage-container">
      <h2>Add a New Dog</h2>
      <form onSubmit={handleSubmit} className="dog-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" value={dogData.name} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="age">Age:</label>
          <input type="number" name="age" value={dogData.age} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="picture">Picture URL:</label>
          <input type="text" name="picture" value={dogData.picture} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="height">Height:</label>
          <input type="text" name="height" value={dogData.height} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="color">Color:</label>
          <input type="text" name="color" value={dogData.color} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="favoritePortFeature">Favorite Port Feature:</label>
          <input type="text" name="favoritePortFeature" value={dogData.favoritePortFeature} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="favoriteMeal">Favorite Meal:</label>
          <input type="text" name="favoriteMeal" value={dogData.favoriteMeal} onChange={handleChange} required />
        </div>
        <button type="submit" className="submit-button">Add Dog</button>
      </form>
    </div>
  );
};

export default Manage;
