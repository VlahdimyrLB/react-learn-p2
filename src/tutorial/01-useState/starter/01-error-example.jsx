const ErrorExample = () => {
  let count = 0;

  // this works in vanilla JS but not in React
  // we need to re-render, we need useState
  const handleButton = () => {
    count = count + 1;
    console.log(count);
  };

  return (
    <div>
      <h2>{count}</h2>
      <button type="button" className="btn" onClick={handleButton}>
        Increase
      </button>
    </div>
  );
};

export default ErrorExample;
