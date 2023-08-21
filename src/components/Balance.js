

export default function Balance({usersData}){
    return(
        <div className="balance-container">
            <div>Balance:</div>
            <div>{`${new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(usersData.users[usersData.activeUserId].balance)}`}</div>
        </div>
    )
}

