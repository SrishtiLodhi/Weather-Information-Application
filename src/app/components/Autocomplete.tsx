import React, { useState } from 'react';
import { locations } from './locations'; // Adjust the import path as needed
import WeatherInfo from './WeatherInfo';

const Autocomplete = () => {
  const [address, setAddress] = useState('');
  const [suggestions, setSuggestions] = useState<any[]>([]);
  const [selectedLocationId, setSelectedLocationId] = useState<string | null>(null);

  const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toLowerCase();
    setSelectedLocationId(null);
    setAddress(value);

    if (value.length > 2) {
      const filteredSuggestions = locations.filter(location =>
        location.localityName.toLowerCase().includes(value)
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (location: any) => {
    setAddress(location.localityName);
    setSelectedLocationId(location.localityId);
    setSuggestions([]);
  };


  return (
    <div className="flex justify-center flex-col max-w-96">
  {/* <img src="/google.png" className='-my-12 w-96 h-64' alt="description" /> */}
  <div className="relative w-full">
  <input 
    type="text" 
    value={address} 
    onChange={handleAddressChange} 
    placeholder="Enter address" 
    className="w-full pl-12 input-class" // Adjusted padding
  />
  <img 
    src="/search.svg" 
    className="absolute left-3 top-1/2 transform -translate-y-1/2 pointer-events-none" 
    alt="Search" 
  />
</div>


      {suggestions.length > 0 && (
        <ul className="border border-gray-300 mt-1 max-h-48 overflow-y-auto p-0 list-none">
          {suggestions.map((suggestion, index) => (
            <li 
              key={index} 
              onClick={() => handleSuggestionClick(suggestion)}
              className="p-2 cursor-pointer hover:bg-gray-200"
            >
              {suggestion.localityName}
            </li>
          ))}
        </ul>
      )}
      {selectedLocationId && <WeatherInfo localityId={selectedLocationId} />}
    </div>
  );
};

export default Autocomplete;
