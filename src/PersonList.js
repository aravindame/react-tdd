import react from "react";
export default ({ people }) => {
  return (
    <ul>
      {people &&
        people.map(({ firstName, lastName }, i) => (
          <li key={i}>
            {firstName}, {lastName}
          </li>
        ))}
    </ul>
  );
};
