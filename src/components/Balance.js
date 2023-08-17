

export default function Balance({user}){
    return(
        <div className="balance-container">
            <div>Balance:</div>
            <div>{`${new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(user.balance)}`}</div>
        </div>
    )
}
