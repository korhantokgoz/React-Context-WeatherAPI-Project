import React, { useContext, useState } from 'react';
import { WeatherContext } from '../context/WeatherContext';


const AddCityButton = () => {

  const [city, setCity] = useState("")
  const { addCity } = useContext(WeatherContext)
  const submitCity = () => {
    addCity(city, Math.floor(Math.random() * 10))
  }

  return (
    <div className="add-city-form">
      <input value={city} onChange={(e) => setCity(e.target.value)} className="input" />
      <button onClick={submitCity} className="input" >Add</button>
    </div>
  );
};

export default AddCityButton;
