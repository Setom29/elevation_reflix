import User from "./User";
const colorClasses = ["blue", "red", "green", "yellow"];

export default function Users({ users, setUser }) {
  return (
    <div className="users-container">
      {users.map((user, index) => (
        <User user={user} colorClass={colorClasses[index]} key={index} setUser={setUser}/>
      ))}
    </div>
  );
}
