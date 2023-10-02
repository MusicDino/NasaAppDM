import React, { useState, useEffect } from 'react';
import axios from 'axios';

const NasaApod = () => {
  const [apodData, setApodData] = useState(null);

  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
      .then(response => {
        setApodData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      {apodData && (
        <div>
          <h2>{apodData.title}</h2>
          <img src={apodData.url} alt={apodData.title} />
          <p>{apodData.explanation}</p>
        </div>
      )}
    </div>
  );
};

export default NasaApod;
