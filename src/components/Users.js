import User from "./User";
const colorClasses = ["blue", "red", "green", "yellow"];

export default function Users({ usersData, setUsersData }) {
  return (
    <div className="users-container">
      {Object.keys(usersData.users)
        .filter((id) => id !== "default")
        .map((id, index) => (
          <User
            userID={id}
            usersData={usersData}
            colorClass={colorClasses[index]}
            setUsersData={setUsersData}
            key={index}

          />
        ))}
    </div>
  );
}
