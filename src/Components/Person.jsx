export default function Person(props) {
  return (
    <div className="card">
      <p onClick={props.click}>
        I'm {props.name} and i am {props.age} years old!
      </p>

      <input onChange={props.changed} type="text" />
    </div>
  );
}



// e.target.value: 