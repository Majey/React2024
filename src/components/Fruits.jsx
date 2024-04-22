const Fruits = () => {
  const fruits = ["Apple", "Mango", "Pinneapple", "Orange"];
  return (
    <div>
      <ol>
        {fruits.map((fruit) => (
          <li>{fruit}</li>
        ))}
      </ol>
    </div>
  );
};

export default Fruits;
