import React, { useContext } from 'react';
import { WeatherContext } from '../context/WeatherContext';



const TemperatureAverage = () => {
  const {cities}=useContext(WeatherContext )
  
    // const cities = [{
    //   name: "london",
    //   temperature: 7
    // }]

    const avarege=cities?.reduce((total,b)=>total+b.temperature,0)

    return (
      <div>
         {cities.length > 0 ? "The average is"+  (avarege/cities.length).toFixed(2)+ "degrees Celcius." :  "Not Yet!"} 
      </div>
    );
  };

  export default TemperatureAverage;
