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
    console.log('New Dog Added:', dogData);
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
      <main>
      <form onSubmit={handleSubmit} className="dog-form">
        <div className="form-group">
          <label htmlFor="name">Name: </label>
          <input id="name" type="text" name="name" value={dogData.name} onChange={handleChange} required placeholder='Charlie' />
        </div>
        <div className="form-group">
          <input id="age" type="number" name="age" value={dogData.age} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <input id="height" type="text" name="height" value={dogData.height} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <input id="color" type="text" name="color" value={dogData.color} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <input id="favoriteToy" type="text" name="favoriteToy" value={dogData.favoritePortFeature} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <input id="favoriteMeal" type="text" name="favoriteMeal" value={dogData.favoriteMeal} onChange={handleChange} required />
        </div>
        <button type="submit" className="submit-button">Add Dog</button>
      </form>
      </main>
      <div className="dogs-form-image" tabIndex={0}>
        <img 
          src={`https://placedog.net/1000/300/random?id=128`}
          alt="Random Dog"
        />
      </div>
    </div>
  );
};

export default Manage;
