/*	***************************************
	*	Author: Jacqueline Sauter Forseck *
	*	Date: October 22, 2014			  *
	***************************************
*/

// Starting function
function startScript()
{
	'use strict';
	
	// Get the character, width, and height
	var character = document.getElementById("character").value;
	var width = document.getElementById("width").value;
	var height = document.getElementById("height").value;
	
	// If character is valid and both entries for width and height are valid
	if(verifyChar(character) && verifyNum(width, 1, 10) && verifyNum(height, 1, 20))
	{
		// Convert string values into numbers since they are valid
		width = parseInt(width);
		height = parseInt(height);
		
		// Display the rectangle
		displayRect(character, width, height);
	}
	// Otherwise
	else
	{
		// Display error message
		alert("You entered an incorrect value as character, width, or height. "
				+ "Please change these to valid values to proceed.");
	}
}

// Character verification function
function verifyChar(character)
{
	'use strict';
	
	// Return whether there is one character
	return character.length === 1;
}

// Number verification function
function verifyNum(number, min, max)
{
	'use strict';
	
	// If number is of numerical type
	if(!isNaN(Number(number)))
	{
		// Convert number to an integer
		number = parseInt(number);
		
		// Return whether number falls within specified range
		return (number >= min && number <= max);
	}
	return false;
}

// Rectangle generator function
function generateRect(width, height)
{
	'use strict';
	
	// String containing the rectangle
	var str = "";
	
	// Loop to fill up rectangle string
	for(var row = 0; row < height; row++)
	{
		for(var col = 0; col < width; col++)
		{
			// Fill up rectangle string with space character initially
			str += " ";
		}
		// At the end of every row, insert an HTML new line
		str += "<br>";
	}
	
	return str;
}

// Rectangle displaying function
function displayRect(character, width, height)
{
	'use strict';
	
	// Set output string to whatever the generator function returns
	var output = generateRect(width, height);
	
	// Loop to replace each space in the output with the given character
	for(var index = 0; index < (width * height); index++)
	{
		output = output.replace(" ", character);
	}
	
	// Displays the output string with the rectangle
	document.getElementById("rectangle").innerHTML = output;
}