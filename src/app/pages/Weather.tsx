"use client";

import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import WeatherInfo from '../components/WeatherInfo';

const WeatherPage = () => {
  const location = useSelector((state: RootState) => state.weather.location);

  return (
    <div className="p-4">
      {location ? (
        <WeatherInfo location={location} />
      ) : (
        <div>No location selected</div>
      )}
    </div>
  );
};

export default WeatherPage;
