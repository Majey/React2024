import Helloprop from "./Helloprop";

const Hello = () => {
  const profile = [
    {
      id: 1,
      name: "Kevin ",
      status: "Single",
      gender: "Male",
      age: 31,
    },
    {
      id: 2,
      name: "Kevin Erick ",
      status: "Married",
      gender: "Male",
      age: 32,
    },
    {
      id: 3,
      name: "Kevin Erick Owuor ",
      status: "Divorced",
      gender: "Male",
      age: 33,
    },
    {
      id: 4,
      name: "Kevin Erick Owuor Majengo",
      status: "Married",
      gender: "Male",
      age: 34,
    },
  ];

  const display = true;
  return display ? (
    <div>
      <ol>
        {profile.map((person) => (
          <Helloprop
            key={person.id}
            name={person.name}
            status={person.status}
            gender={person.gender}
            age={person.age}
          ></Helloprop>
        ))}
      </ol>
    </div>
  ) : (
    <h1>display is FALSE</h1>
  );
};

export default Hello;
