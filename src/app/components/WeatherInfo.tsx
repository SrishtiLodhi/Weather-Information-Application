import React, { useEffect, useState } from "react";

interface WeatherInfoProps {
  localityId: string;
}

const WeatherInfo: React.FC<WeatherInfoProps> = ({ localityId }) => {
  const [weatherData, setWeatherData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchWeather = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://www.weatherunion.com/gw/weather/external/v0/get_locality_weather_data?locality_id=${localityId}`,
          {
            headers: {
              "X-Zomato-Api-Key": "a0c5b6126c895b5879a0d94ee88958c8",
            },
          }
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setWeatherData(data);
      } catch (error) {
        setError("Failed to fetch weather information");
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [localityId]);
  console.log(weatherData, "weather data");
  if (loading) return <div className="text mt-lg-4 mt-2">Loading...</div>;
  if (error) return <div className="text mt-lg-4 mt-2">{error}</div>;

  return (
    <div className="mt-4 p-2 border border-gray-300 rounded">
      <h2 className="text text-black font-bold mb-2">Weather Information</h2>
      {weatherData && weatherData.locality_weather_data ? (
     <div className="text">
     <p>
       <strong>- Temperature:</strong>{" "}
       {weatherData.locality_weather_data.temperature !== null
         ? `${weatherData.locality_weather_data.temperature}°C`
         : "Not Available"}
     </p>
     <div>
       <strong>- Humidity:</strong>{" "}
       {weatherData.locality_weather_data.humidity !== null
         ? `${weatherData.locality_weather_data.humidity}%`
         : "Not Available"}
     </div>
     <div>
       <strong>- Wind Speed:</strong>{" "}
       {weatherData.locality_weather_data.wind_speed !== null
         ? `${weatherData.locality_weather_data.wind_speed} km/h`
         : "Not Available"}
     </div>
     <div>
       <strong>- Wind Direction:</strong>{" "}
       {weatherData.locality_weather_data.wind_direction !== null
         ? `${weatherData.locality_weather_data.wind_direction}°`
         : "Not Available"}
     </div>
     <div>
       <strong>- Rain Intensity:</strong>{" "}
       {weatherData.locality_weather_data.rain_intensity !== null
         ? `${weatherData.locality_weather_data.rain_intensity} mm/h`
         : "Not Available"}
     </div>
     <div>
       <strong>- Rain Accumulation:</strong>{" "}
       {weatherData.locality_weather_data.rain_accumulation !== null
         ? `${weatherData.locality_weather_data.rain_accumulation} mm`
         : "Not Available"}
     </div>
   </div>
   
      ) : (
        <p className="text">No weather data available</p>
      )}
    </div>
  );
};

export default WeatherInfo;
