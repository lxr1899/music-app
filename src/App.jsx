import { useEffect } from 'react';
import { searchTracks } from './services/deezer';

export default function App() {
  
  useEffect(() => {
    // Fires a test request on initial load to verify our proxy and API connection are working
    const runTest = async () => {
      const results = await searchTracks('Eminem');
      console.log("success, Deezer Data:", results);
    };

    runTest();
  }, []); // The empty array ensures this only happens ONCE when the app loads

  return (
    <div>
      <h1>Hello World!</h1>
    </div>
  );
}