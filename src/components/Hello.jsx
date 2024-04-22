const Wow = () => "Wow!"

const Hello = ({profile}) => {
  return <div>
    <h3>Hello from a component! {Wow()}</h3>
    <p>{profile.name}</p>
    <p>{profile.status}</p>
    <p>{profile.gender}</p>
    <p>{profile.age}</p>
  
  </div>;
};

export default Hello;
