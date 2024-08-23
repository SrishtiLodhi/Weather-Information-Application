import React, { useEffect, useState } from 'react';

interface WeatherInfoProps {
  localityId: string;
}

const WeatherInfo: React.FC<WeatherInfoProps> = ({ localityId }) => {
  const [weatherData, setWeatherData] = useState<any>(null);

  useEffect(() => {
    if (localityId) {
      fetch(`https://www.weatherunion.com/gw/weather/external/v0/get_locality_weather_data?locality_id=ZWL005764`, {
        headers: {
          'X-Zomato-Api-Key': 'a0c5b6126c895b5879a0d94ee88958c8'
        }
      })
        .then(response => response.json())
        .then(data => setWeatherData(data.locality_weather_data))
        .catch(error => console.error('Error fetching weather data:', error));
    }
  }, [localityId]);

  if (!weatherData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-4">
      <h2 className="text-2xl mb-4">Weather Information</h2>
      <div>Temperature: {weatherData.temperature}°C</div>
      <div>Humidity: {weatherData.humidity}%</div>
      <div>Wind Speed: {weatherData.wind_speed} km/h</div>
      <div>Wind Direction: {weatherData.wind_direction}°</div>
      <div>Rain Intensity: {weatherData.rain_intensity} mm/h</div>
      <div>Rain Accumulation: {weatherData.rain_accumulation} mm</div>
      {/* Add more weather details here */}
    </div>
  );
};

export default WeatherInfo;
