
var userInfo={
    firstName: "Safaa",
    lastName: "Ahmed",
    fullName: function(){
        return this.firstName + " " + this.lastName
    },
    adress:function(){
        return {
            workAddress: "october",
            homeAddress: "Faisal"
        }
    }
}
console.log(userInfo)
console.log(userInfo.fullName())
console.log(userInfo.adress().homeAddress)

function check()
{
    if(true){
        var newName="hagar"
        console.log(newName)
        let age=35
        console.log(age)
        const bi=3.14
        // bi=3
        console.log(bi) 
    }
console.log(newName)
console.log(age)
console.log(bi) 
}
check()
console.log(age)
console.log(newName)