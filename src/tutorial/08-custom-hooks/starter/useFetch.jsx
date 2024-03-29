import { useState, useEffect } from "react";

const useFetch = (url) => {
  // State variables to manage loading, error, and user data
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState(null);

  // useEffect hook to perform data fetching
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch data from the provided URL in the parameter
        const resp = await fetch(url);

        // Handle non-successful response
        if (!resp.ok) {
          setIsError(true);
          setIsLoading(false);
          return;
        }

        // If response is successful, parse JSON and update user state
        const response = await resp.json();
        setData(response);
      } catch (error) {
        // Handle errors during fetching
        setIsError(true);
      }

      // Regardless of success or failure, loading is complete
      setIsLoading(false);
    };

    // Call the fetchUser function when the component mounts (empty dependency array)
    fetchData();
  }, []);

  // Return the state variables
  return { isLoading, isError, data };
};

export default useFetch;
