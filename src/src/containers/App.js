import React, { useState } from "react";
import { WeatherContext } from "../context/WeatherContext";
import CityList from './CityList'
import AddCityButton from './AddCityButton'
import TemperatureAverage from './TemperatureAverage'


function App() {

  const [cities,setCities ] =useState([])

  const addCity = (city , temp) =>{
    setCities([...cities,{name:city,temperature:temp}])
  }
const deleteCity = (dlCity) => {
 let  newCity = cities.filter(i=>(
   i.name !== dlCity 
 ))
 setCities(newCity)
}

  return (
    <WeatherContext.Provider value={{cities ,addCity,deleteCity }}>
      <div className="city-overview">
        <h2>Multi-Weather App</h2>
        <CityList />
        <AddCityButton />
        <TemperatureAverage />
      </div>
      </WeatherContext.Provider>
  );
}


export default App;
