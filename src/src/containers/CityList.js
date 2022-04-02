import React, { useContext, useState } from "react";
import { WeatherContext } from "../context/WeatherContext";


const CityList = () => {
  const {cities,deleteCity}=useContext(WeatherContext )


    return (
      <table className="city-list">
        <thead>
          <tr>
            <th>City</th>
           <th>Temperature</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {cities?.map(city=>{
            return (
              <tr >
              <td>{city.name}</td>
              <td>{city.temperature}</td>
              <td>
                <button onClick={()=>deleteCity(city.name)}>DELETE</button>
              </td>
            </tr>
            )
          })}
           
        </tbody>
      </table>
    );
  };

  export default CityList;
