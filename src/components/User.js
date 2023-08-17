import { Link } from "react-router-dom";


export default function User({user, setUser, colorClass}){
    return (
        <div className="user-container">
            <Link to={"/catalog"}><button className={`_btn user-btn ${colorClass}`} onClick={() => setUser(user)}>{user.name}</button></Link>
        </div>
    )
}