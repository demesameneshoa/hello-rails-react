import React, { useEffect, useState } from 'react';

const Greeting = () => {
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    // Fetch random greeting from your API endpoint
    fetch('/api/random_greeting')
      .then((response) => response.json())
      .then((data) => setGreeting(data.greeting));
  }, []);

  return <div className='greeting'>{greeting}!</div>;
};

export default Greeting;
