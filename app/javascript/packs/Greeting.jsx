import React, { useEffect, useState } from 'react';

const Greeting = () => {
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    // Fetch random greeting from  API endpoint
    fetch('/api/random_greeting')
      .then((response) => response.json())
      .then((data) => setGreeting(data.greeting));
  }, []);

  return <div>{greeting}</div>;
};

export default Greeting;
