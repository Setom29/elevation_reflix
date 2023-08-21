export function toggleUsers(usersData, userID){
    return usersData.map((el)=>{
        el.isActive = userID === el.id ? true : false
        return el
    })
    
}