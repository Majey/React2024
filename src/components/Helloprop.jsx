const Helloprop = ({name, gender, status,age}) => {
  return <div>
    <p><b>{name}</b></p>
    <p> {gender} </p>
    <p>{status} </p>
    <p>{age}</p>
    <br />
  </div>;
};

export default Helloprop;
