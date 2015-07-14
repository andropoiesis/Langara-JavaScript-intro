/*	***************************************
	*	Author: Jacqueline Sauter Forseck *
	*	Date: November 4, 2014			  *
	***************************************
*/

// Number validation function from Lab 11 - modified a bit
function verifyNum(number, min, max)
{
	'use strict';
	
	// If number can be converted to a number, and min and max are numbers
	if(!isNaN(Number(number)) && typeof min == "number" && typeof max == "number")
	{
		// Convert number to an integer
		number = parseInt(number);
		min = parseInt(min);
		max = parseInt(max);
		
		// Return whether number falls within the range min --> max
		return (number >= min && number <= max);
	}
	return false;
}

// Function to get input and start script
function getUserInput()
{
	'use strict';
	
	// Get minimum and maximum from text boxes
	var minimum = document.getElementById("min").value;
	var maximum = document.getElementById("max").value;
	
	// Create an empty array
	var randomList = [];
	
	// If minimum and maximum are valid (non-negative, less than 500, and maximum greater than minimum)
	if(verifyNum(minimum, 0, 500) && verifyNum(maximum, 0, 500))
	{
		// Convert minimum and maximum to integers
		minimum = parseInt(minimum);
		maximum = parseInt(maximum);
		
		// If minimum is less than maximum
		if(minimum < maximum)
		{
			// Populate array using minimum and maximum, and display it
			populateArray(randomList, minimum, maximum);
			displayArray(randomList);
		}
		// Otherwise
		else
		{
			// Display error message
			alert("Maximum must be greater than minimum. Please try again.");
		}
	}
	// Otherwise
	else
	{
		// Display error message
		alert("Minimum and maximum must be non-negative integers less than or equal to 500. " +
				"Please try again.");
	}
}

// Function to generate a random number in the range of min and max (inclusive)
function generateRandomNum(min, max)
{
	'use strict';
	
	// If min and max are numbers
	if(typeof min == "number" && typeof max == "number")
	{
		return Math.floor(Math.random() * (max - min + 1) + min);
	}
}

// Function to add a random number in the range of min and max (inclusive) to the
// end of an array
function addRandomNumber(array, min, max)
{
	'use strict';
	
	var randomNum;
	
	// If array is an object, and min and max are numbers
	if(typeof array == "object" && typeof min == "number" && typeof max == "number")
	{
		// Generate random number
		randomNum = generateRandomNum(min, max);
		// Add random number to the end of the array
		array.push(randomNum);
	}
}

// Function to fill array with random numbers in the range of min and max (inclusive) a random
// number of times
function populateArray(array, minimum, maximum)
{
	'use strict';
	
	// Times to run addRandomNumber function
	var times;
	
	// If array is an object
	if(typeof array == "object")
	{
		// Generate a random number of times to run addRandomNumber function in the range of 2
		// and 40 (inclusive)
		times = generateRandomNum(2, 40);
		
		// Fill array with random numbers in range of minimum and maximum
		for(var run = 0; run < times; run++)
		{
			addRandomNumber(array, minimum, maximum);
		}
	}
}

// Function to reset the array
function clearArray(array)
{
	'use strict';
	
	// If array is an object
	if(typeof array == "object")
	{
		// Empty array one element at a time
		for(var item = 0; item < array.length; item++)
		{
			array.pop();
		}
	}
}

// Function to display the array
function displayArray(array)
{
	'use strict';
	
	// If array is an object
	if(typeof array == "object")
	{
		// Display array on web page
		document.getElementById("array").innerHTML = array;
	}
}