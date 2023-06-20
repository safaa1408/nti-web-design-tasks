var tracks = ["HTML", "CSS" , "PHP" , "web design" , "CCNA" , "cyber security"]
var promptValue= prompt("enter required track")
if(tracks.includes(promptValue)) console.log("this track already exist")
else tracks.push(promptValue)
console.log(tracks)
tracks.forEach((items) => {
    if(items != "graphics")  tracks.push("graphics")
    
})
////////////////////////////////////////////////////
console.log(tracks)
var nums=[1,5,50,6,8,200,100]
var searchedNum=nums.find(item => item > 20)
var searchedNumIndex=nums.findIndex(item => item > 20)
console.log(searchedNum)
console.log(searchedNumIndex)
var searchedNum=nums.find(item => item == "JS" )
var searchedNumIndex=nums.findIndex(item => item == "JS" )
console.log(searchedNum)
console.log(searchedNumIndex)

