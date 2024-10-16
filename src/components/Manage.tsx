import React, { useState } from 'react';
import './Manage.css'; // Import the CSS for styling

const Manage = () => {
  const [dogData, setDogData] = useState({
    name: '',
    age: '',
    height: '',
    color: '',
    favoriteToy: '',
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
      height: '',
      color: '',
      favoriteToy: '',
      favoriteMeal: '',
    });
  };

  return (
    <section className="manage-container">
      <h1>Add a New Dog</h1>
      <main>
      <form onSubmit={handleSubmit} className="dog-form">
        <div className="form-group">
          <label htmlFor="name">Name: <span aria-hidden="true" style={{ color: 'red' }}>*</span> </label>
          <input 
          id="name" 
          type="text" 
          name="name" 
          value={dogData.name} 
          onChange={handleChange} 
          required 
          placeholder='Charlie' 
          aria-required="true" 
          aria-label='Name'
          aria-describedby="name-hint" 
          />
        </div>
        <div className="form-group">
          <label htmlFor="age">Age: <span aria-hidden="true" style={{ color: 'red' }}>*</span> </label>
          <input 
          type="number"
          name="age"
          value={dogData.age} 
          onChange={handleChange} 
          required 
          aria-required="true" 
          aria-label='Age'
          aria-describedby="age-hint" 
           />
        </div>
        <div className="form-group">
          <label htmlFor="height">Height: <span aria-hidden="true" style={{ color: 'red' }}>*</span> </label>
          <input 
          type="text" 
          name="height" 
          value={dogData.height} 
          onChange={handleChange} 
          required 
          aria-label='Height'
          aria-required="true" 
          aria-describedby="height-hint" 
          />
        </div>
        <div className="form-group">
          <label htmlFor="height">Color: <span aria-hidden="true" style={{ color: 'red' }}>*</span> </label>
          <input 
          type="text" 
          name="color" 
          value={dogData.color} 
          onChange={handleChange} 
          required 
          aria-label='Color'
          aria-required="true" 
          aria-describedby="height-hint" 
          />
        </div>
        <div className="form-group">
          <label htmlFor="favoriteToy">FavoriteToy: <span aria-hidden="true" style={{ color: 'red' }}>*</span> </label>
          <input 
          type="text" 
          name="favoriteToy" 
          value={dogData.favoriteToy} 
          onChange={handleChange} 
          required 
          aria-label='Favorite Toy'
          aria-required="true" 
          aria-describedby="height-hint" 
          />
        </div>
        <div className="form-group">
          <label htmlFor="favoriteMeal">FavoriteMeal: <span aria-hidden="true" style={{ color: 'red' }}>*</span> </label>
          <input 
          type="text" 
          name="favoriteMeal" 
          value={dogData.favoriteMeal}
          onChange={handleChange} 
          required 
          aria-label='Favorite Meal'
          aria-required="true" 
          aria-describedby="height-hint" 
          />
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
    </section>
  );
};

export default Manage;
