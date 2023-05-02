function updateValue() {
var number = document.getElementById("box1").value; 
  if(number>100){
	  var msg="input values must be 100 or below 100"
	  document.getElementById("Msg").innerHTML=msg
  }
}