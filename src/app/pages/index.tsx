"use client";

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';
import Autocomplete from '../components/Autocomplete';
import { setLocation } from '../store/weatherSlice';

const Home = () => {
  const [suggestions, setSuggestions] = useState<string[]>(['New York', 'Los Angeles', 'Chicago']); // Replace with your actual data
  const dispatch = useDispatch();
  const router = useRouter();

  const handleSearch = (query: string) => {
    dispatch(setLocation(query));
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
