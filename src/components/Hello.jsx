const Wow = () => "Wow!";

const Hello = ({ profile }) => {
  return (
    <div>
      <ol>
        {profile.map((person) => (
          <li key={person.id}>
            <p>{person.name}</p>
            <p>{person.status}</p>
            <p>{person.gender}</p>
            <p>{person.age}</p>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Hello;
