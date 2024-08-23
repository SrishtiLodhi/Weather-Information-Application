import React, { useState } from 'react';
import axios from 'axios';
import WeatherInfo from './WeatherInfo'; // Import WeatherInfo component

const Autocomplete = () => {
  const [address, setAddress] = useState('');
  const [suggestions, setSuggestions] = useState<any[]>([]);
  const [selectedLocation, setSelectedLocation] = useState<{ lat: number, lon: number } | null>(null);

  const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setAddress(value);

    if (value.length > 2) {
      const encodedAddress = encodeURIComponent(value);
      const url = `https://api.geoapify.com/v1/geocode/autocomplete?text=${encodedAddress}&apiKey=9c327f9d05ce48c7a382c9ebb033ad29`;

      axios.get(url)
        .then(response => {
          setSuggestions(response.data.features);
          console.log(response);
        })
        .catch(err => {
          console.error('Error fetching autocomplete suggestions', err);
        });
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion: any) => {
    const { lat, lon, formatted } = suggestion.properties;

    setAddress(formatted);
    setSelectedLocation({ lat, lon });
    setSuggestions([]);
  };

  return (
    <div className="w-80 mx-auto">
      <input 
        type="text" 
        value={address} 
        onChange={handleAddressChange} 
        placeholder="Enter address" 
        className="w-full p-2 border border-gray-300 rounded"
      />
      {suggestions.length > 0 && (
        <ul className="border border-gray-300 mt-1 max-h-48 overflow-y-auto p-0 list-none">
          {suggestions.map((suggestion, index) => (
            <li 
              key={index} 
              onClick={() => handleSuggestionClick(suggestion)}
              className="p-2 cursor-pointer hover:bg-gray-200"
            >
              {suggestion.properties.formatted}
            </li>
          ))}
        </ul>
      )}
      {selectedLocation?.lat && <WeatherInfo localityId={selectedLocation.lat.toString()} />}
    </div>
  );
};

export default Autocomplete;
