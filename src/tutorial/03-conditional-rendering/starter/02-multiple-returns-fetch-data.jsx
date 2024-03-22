import { useEffect, useState } from "react";
const url = "https://api.github.com/users/QuincyLarson";

const MultipleReturnsFetchData = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await fetch(url);
        //fetch gotcha
        //need to setup a ok response so it will throw error if the ok is false
        //this will check if url is correct before the next call back
        if (!response.ok) {
          // if response is false then throw an error
          setIsError(true);
          setIsLoading(false);
          return; // return so it will not run the rest of the code
        }
        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.log(error);
        setIsError(true);
      }
      setIsLoading(false);
    };

    getUsers();
  }, []);

  if (isLoading) {
    return <h2>Loading..</h2>;
  }
  if (isError) {
    return <h2>There was an error</h2>;
  }

  const { avatar_url, name, company } = user;
  return (
    <>
      <img src={avatar_url} alt={name} />
      <h3>{name}</h3>
      <h4>Works at {company}</h4>
    </>
  );
};
export default MultipleReturnsFetchData;
