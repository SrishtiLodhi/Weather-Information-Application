// app/page.tsx
"use client";

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';
import Autocomplete from '../app/components/Autocomplete'; // Ensure correct path
import { setLocation } from '../app/store/weatherSlice';
import { store } from '../app/store/store'; // Ensure correct path
import { LocationProvider, useLocation } from './context/LocationContext';

const Home = () => {
  const [suggestions, setSuggestions] = useState<string[]>(['New York', 'Los Angeles', 'Chicago']); // Replace with your actual data
  const { setLocation } = useLocation();
  const router = useRouter();

  const handleSearch = (query: string) => {
    setLocation(query);
    router.push('/weather');
  };

  return (
 
      <div className="flex flex-col items-center justify-center min-h-screen p-4">
        <h1 className="text-3xl mb-4">Weather App</h1>
        <Autocomplete suggestions={suggestions} onSelect={handleSearch} />
      </div>
 
  );
};

export default Home;
