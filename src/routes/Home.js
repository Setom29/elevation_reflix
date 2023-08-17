import Users from "../components/Users"

export default function Home({users, setUser}){
    return(
        <div className="home-container">
            <h1 className="home-title">Who is watching?</h1>
            <Users users={users} setUser={setUser}/>
        </div>
    )
}