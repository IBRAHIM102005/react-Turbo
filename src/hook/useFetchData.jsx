import { useEffect, useState } from 'react';

export function useFetch() {
  const [data, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    async function fetchCall() {
      try {
        const response = await fetch(
          `https://67fa0b2b094de2fe6ea2fc96.mockapi.io/cards`,
        );

        const data = await response.json();
        setUser(data);
        setLoading(false);
      } catch (error) {
        console.log('error');
        setError(error.message);
      }
    }
    setTimeout(() => {
      fetchCall();
    }, 100);
  }, []);
  return { data, loading, error };
}
