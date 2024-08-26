// app/page.tsx
"use client";
import Autocomplete from '../app/components/Autocomplete'; // Ensure correct path
import './globals.css'

const Home = () => {

  return (
 
      <div className="flex flex-col items-center min-h-screen p-4">
        <h1 className="text-5xl mb-4 heading">Weather App With Search Functionality</h1>
        <Autocomplete />
      </div>
 
  );
};

export default Home;
