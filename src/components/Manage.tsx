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
          Age: 
          <input type="number" value={dogData.age} onChange={handleChange} required />
        </div>
        <div className="form-group">
        height:
          <input type="text" value={dogData.height} onChange={handleChange} required />
        </div>
        <div className="form-group">
        color:
          <input type="text" value={dogData.color} onChange={handleChange} required />
        </div>
        <div className="form-group">
        favoriteToy:
          <input type="text" value={dogData.favoritePortFeature} onChange={handleChange} required />
        </div>
        <div className="form-group">
        favoriteMeal: 
          <input type="text" value={dogData.favoriteMeal} onChange={handleChange} required />
        </div>
        <button type="submit" className="submit-button" onClick={() => alert(`Dog name: ${dogData.name} was added successfully!`)}>Add Dog</button>
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
