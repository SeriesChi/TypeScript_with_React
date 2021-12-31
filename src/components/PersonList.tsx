import { Name } from "./person.types";
type PersonListProps = {
  names: Name[];
};

const PersonList = ({ names }: PersonListProps) => {
  return (
    <div>
      <h2>----- Person List -----</h2>
      {names.map((names) => (
        <h2>
          {names.first}
          {names.last}
        </h2>
      ))}
    </div>
  );
};

export default PersonList;
