alert("hello");
var timeCounter = setInterval(myTimer, 1000);
function myTimer(){
	var t = new Date();
	document.getElementById("time").innerHTML=t.toLocaleTimeString();
	
}