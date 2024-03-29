import { useState, useEffect } from "react";

const useFetchPerson = (url) => {
  // State variables to manage loading, error, and user data
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState(null);

  // useEffect hook to perform data fetching
  useEffect(() => {
    const fetchUser = async () => {
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
        const userData = await resp.json();
        setUser(userData);
      } catch (error) {
        // Handle errors during fetching
        setIsError(true);
      }

      // Regardless of success or failure, loading is complete
      setIsLoading(false);
    };

    // Call the fetchUser function when the component mounts (empty dependency array)
    fetchUser();
  }, []);

  // Return the state variables
  return { isLoading, isError, user };
};

export default useFetchPerson;
