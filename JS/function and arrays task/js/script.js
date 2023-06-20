var numOfSubjects= +prompt("enter the number of subjects")
var fullMark= +prompt("enter full mark")
var countOfSucsess=0
var countOfFail=0
var sumOfSubjects=0
var totalMark=numOfSubjects*fullMark
for(var i=1; i<= numOfSubjects;i++)
{
    var promptValue= +prompt("enter degree of subject NO "+i)
    sumOfSubjects+=promptValue
    if(promptValue > fullMark/2)
        countOfSucsess++
    else
    countOfFail++
}
console.log("the number of passed subjects is"+countOfSucsess)
console.log("the number of faild subjects is"+countOfFail)
console.log("the total degree is "+sumOfSubjects)
var persentage= (sumOfSubjects/totalMark) * 100
if(persentage>=90)
console.log("your grade is A")
else if(persentage>=80)
console.log("your grade is B")
else if(persentage>=70)
console.log("your grade is c")
else if(persentage>50)
console.log("your grade is D")
else if(persentage <= 50 && persentage>0)
console.log("your grade is F")
else(console.log("invalid grade"))