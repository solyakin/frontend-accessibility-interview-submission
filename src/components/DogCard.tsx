import React from 'react';
import './DogCard.css'; 

interface DogCardProps {
  id: number; // Add id prop
  name: string;
  age: number;
  picture: string;
  height: string;
  color: string;
  favoritePortFeature: string;
  favoriteMeal: string;
}

const DogCard: React.FC<DogCardProps> = ({ 
    id, // Include the id prop
    name, 
    age, 
    picture, 
    height, 
    color, 
    favoritePortFeature, 
    favoriteMeal 
  }) => {
    return (
      <div className="dog-card" key={id}> {/* Optionally add id here for styling or functionality */}
        <img src={picture} alt={name} className="dog-image" />
        <h3>{name}</h3>
        <p>ID: {id}</p>
        <p>Age: {age} years</p>
        <p>Height: {height}</p>
        <p>Color: {color}</p>
        <p>Favorite Port Feature: {favoritePortFeature}</p>
        <p>Favorite Meal: {favoriteMeal}</p>
      </div>
    );
  };
  

export default DogCard;
