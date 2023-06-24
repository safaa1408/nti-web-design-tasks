var numOfUsers = prompt("enter the number of clients")
var userInfo
var clients=[]
function addUser(name, balance, id){
    userInfo = {
        userName:name,
        userBalance:balance,
        userId:id
    }
    clients.push(userInfo)
}
function addClients(){
    for(var i=0;i<numOfUsers;i++){
        userName=prompt("please enter the user name"+(i+1))
        userBalance=prompt("please enter the user balance"+(i+1))
        userId=prompt("please enter the user ID"+(i+1))
        addUser(userName,userBalance,userId)
    }
    console.log(clients)
}
addClients()
var eidtId=prompt("enter the client Id you want to edit")
var eidtBalance=prompt("enter the new balance")
eidtUserBalanceById(eidtId , eidtBalance)
function eidtUserBalanceById(idEdit , newBalance){
    for(var i=0 ; i<clients.length; i++)
    {
        if(clients[i].userId == idEdit)
        clients[i].userBalance=newBalance
    }
}
var deletedId=prompt("enter the client Id you want to delete")
function deleteUserById(deleteId)
{
    for(var i=0 ; i<clients.length; i++)
    {
        if(clients[i].userId == deleteId)
        clients.splice(i,1)
    }
}
deleteUserById(deletedId)
console.log(clients)
