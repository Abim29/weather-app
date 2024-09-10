import { useEffect, useState } from 'react'
import './App.css'
import { getWeather } from './services/weather.service';

function App() {
  const [weather, setWeather] = useState({});
  useEffect(()=>{
    getWeather((data)=>{
      setWeather(data)
    })
  }, [])
  return (
    <>
      {Object.keys(weather).length > 0 && (
        <div>
          <h1>{weather.location.name}</h1>
          <p>{weather.location.region}</p>
          <p>{weather.location.country}</p>
          <img src={weather.current.condition.icon} alt="" width='100px'/>
          <p>{weather.current.condition.text}</p>
          <p>{weather.current.temp_c}°C</p>
          <p>Updated At: {weather.current.last_updated}</p>
        </div>
      )}
    </>
  )
}

export default App
