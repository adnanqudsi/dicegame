var randomNo= Math.floor(Math.random() * 6)+1;
var randomDiceImg= "dice" +randomNo+".png";
var randomImgSource= " images/"  +randomDiceImg;
var image1= document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImgSource);

var randomNo2= Math.floor(Math.random() * 6)+1;
var randomDiceImg2= "dice"+ randomNo2+".png";
var randomImgSource2= "images/"+randomDiceImg2;
var image2= document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImgSource2);
document.querySelector("button").addEventListener("click",function() {
window.location.reload();
});
