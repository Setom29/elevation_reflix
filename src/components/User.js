import { Link } from "react-router-dom";

export default function User({ usersData, setUsersData, userID, colorClass }) {
  function handleClick(){
    setUsersData({ ...usersData, activeUserId: userID })
  }
  return (
    <div className="user-container">
      <Link to={"/catalog"}>
        <button
          className={`_btn user-btn ${colorClass}`}
          onClick={handleClick}
        >
          {usersData.users[userID].name}
        </button>
      </Link>
    </div>
  );
}
