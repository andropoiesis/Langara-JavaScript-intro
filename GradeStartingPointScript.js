
function displayResult() {
	var input = document.getElementById("gradein").value;
	document.getElementById("output").innerHTML = input;
   
   //if there is no input 
   if(!input)
   {
	document.getElementById("output").innerHTML = "null";
   }
   //if input is not numeric
   else if( isNaN(parseInt(input)))
   {
	document.getElementById("output").innerHTML = "NaN";
   }
   //add code to check for grade ranges
}
