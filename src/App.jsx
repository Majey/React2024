import Hello from "./components/Hello";
import Fruits from "./components/Fruits";

const profile = [{
  id: 1,
  name: "Kevin ",
  status: "Single",
  gender: "Male",
  age: 31
},{
  id: 2,
  name: "Kevin Erick ",
  status: "Married",
  gender: "Male",
  age: 32
},{
  id: 3,
  name: "Kevin Erick Owuor ",
  status: "Divorced",
  gender: "Male",
  age: 33
},{
  id: 4,
  name: "Kevin Erick Owuor Majengo",
  status: "Married",
  gender: "Male",
  age: 34
},]

const App = () => {
  return (
    <div>
      <Hello profile={profile}/>
      {/* <Fruits></Fruits> */}
    </div>
  );
};

export default App;
