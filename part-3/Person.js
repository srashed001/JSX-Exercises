const Person = (props) => (
  <div>
    <p>Learn some information abot this person</p>
    <h3>{props.name.length <= 6 ? props.name : props.name.slice(0, 6)}</h3>
    <h3>{props.age >= 18 ? "please go vote!" : "you must be 18"}</h3>
    <ul>
      {props.hobbies.map((h, i) => (
        <li key={i}>{h}</li>
      ))}
    </ul>
  </div>
);
