import React, { useState } from 'react';

interface Position {
  latitude: number;
  longitude: number;
}

const GeolocationButton: React.FC = () => {
  const [position, setPosition] = useState<Position | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleGetPosition = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setPosition({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          });
          setError(null); // Clear any previous errors
        },
        (error) => {
          setError(error.message);
          setPosition(null); // Clear previous position
        }
      );
    } else {
      setError('Geolocation is not supported by this browser.');
    }
  };

  return (
    <div>
      <h1>Geolocation</h1>
      <button onClick={handleGetPosition} style={{ backgroundColor: 'blue', color: 'white', padding: '10px 20px', borderRadius: '5px' }}>CHCEM TVOJU POLOHU!!!!</button>
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      {position ? (
        <div>
          <p>Latitude: {position.latitude}</p>
          <p>Longitude: {position.longitude}</p>
        </div>
      ) : (
        null
      )}
    </div>
  );
};

export default GeolocationButton;
