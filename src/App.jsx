import Hello from "./components/Hello";

const profile = {
  name: "Kevin Erick Owuor Majengo",
  status: "Single",
  gender: "Male",
  age: 33
}

const App = () => {
  return (
    <div>
      <Hello profile={profile}/>
    </div>
  );
};

export default App;
