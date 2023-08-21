import Balance from "./Balance"

export default function CatalogBar({usersData}){
    return (
        <div className="catalog-bar-component">
            <input placeholder="Search" type="search"/>
            <Balance usersData={usersData}/>
        </div>

    )
}