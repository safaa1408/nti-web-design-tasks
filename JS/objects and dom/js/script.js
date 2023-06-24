
var image=document.getElementById("img")
// console.log(image)
function changePhoto(){
    console.log(image.src)
    if(image.src == "file:///C:/Users/sophiee/Desktop/web-design/Nti-Web-Design-Tasks-js/function%20and%20objects/images/1.jpeg"){
// console.log('src 1')
        image.src="images/2.jpg"
    }
    else{
        // console.log("src 2")
        image.src = "images/1.jpeg"
    }
}