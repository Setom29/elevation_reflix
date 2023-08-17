import Balance from "./Balance"

export default function CatalogBar({user}){
    return (
        <div className="catalog-bar-component">
            <input placeholder="Search" type="search"/>
            <Balance user={user}/>
        </div>

    )
}