import {Link} from "react-router-dom" 
import { defaultUser } from "../config/constants"

export default function ReflixNavBar({setUser}){
    return (
        <div className="header">
            <div className="nav-container">
                <Link to={"/"}><button className="_btn" onClick={()=>setUser(defaultUser)}>Home</button></Link>
                <Link to={"/catalog"}><button className="_btn" onClick={()=>setUser(defaultUser)}>Catalog</button></Link>
            </div>
            <Link to={"/"}><button className="_btn logo" onClick={()=>setUser(defaultUser)}>REFLIX</button></Link>
        </div>
    )
}