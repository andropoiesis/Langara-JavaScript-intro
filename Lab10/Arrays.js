/*	***************************************
	*	Author: Jacqueline Sauter Forseck *
	*	Date: October 21, 2014			  *
	***************************************
*/

'use strict';

// Global array variable
var data = [];

// Function to add a number to the front of the array
function addToFront()
{
	var input = document.getElementById("add front").value;
	var error = "";		// Error message
	
	// If nothing was entered by the user, change error message
	if(!input)
	{
		error = "You have not entered anything to add to the front.";
	}
	// If what the user entered is not a number, change error message
	else if(isNaN(Number(input)))
	{
		error = "What you entered to add to the front is not a number.";
	}
	// Otherwise convert user input to number and add to the front of array
	else
	{
		data.unshift(Number(input));
	}
	
	// Displays error message
	document.getElementById("data").innerHTML = error;
}

// Function to add a number to the back of the array
function addToBack()
{
	var input = document.getElementById("add back").value;
	var error = "";				// Error message
	
	// If nothing was entered by the user, change error message
	if(!input)
	{
		error = "You have not entered anything to add to the back.";
	}
	// If what the user entered is not a number, change error message
	else if(isNaN(Number(input)))
	{
		error = "What you entered to add to the back is not a number.";
	}
	// Otherwise convert user input to number and add to the back of the array
	else
	{
		data.push(Number(input));
	}
	
	// Display error message
	document.getElementById("data").innerHTML = error;
}

// Function to add a list of numbers to the back of the array
function addListToBack()
{
	var strList = document.getElementById("add list").value;
	var error = "";			// Error message
	var foundNaN = false;	// Boolean for whether a non-numerical value was found given list
	
	// If nothing was entered by the user, change error message
	if(!strList)
	{
		error = "You have not entered anything to add to the back.";
	}
	// Otherwise...
	else
	{
		// Split string into array elements using comma as delimiter
		strList = strList.split(",");
		
		// Loop to check if there are any non-numerical values in list
		for(var index = 0; index < strList.length; index++)
		{
			// If an element is not numerical, exit the loop prematurely (all elements must be
			// numerical in order to add the list to the array so there's no point in continuing)
			if(isNaN(Number(strList[index])))
			{
				foundNaN = true;
				// Set index to value outside range of loop to exit it
				index = strList.length;
			}
			// Otherwise convert the element to number and store it back in its place
			else
			{
				strList[index] = Number(strList[index]);
			}
		}
		
		// If a non-numerical element was found, change error message
		if(foundNaN)
		{
			error = "One of the elements in your list is not a number.";
		}
		// Otherwise concatenate the list of numbers with the array
		else
		{
			data = data.concat(strList);
		}
	}
	
	// Display error message
	document.getElementById("add list").innerHTML = error;
}

// Function to get rid of smallest and largest values and display remaining list elements
function displayWithoutOutliers()
{
	var smallest, largest;
	var smallIndex, largeIndex;			// Indexes of smallest and largest values
	var message = "";					// Message to be displayed
	
	// If there is more than 1 element in the array
	if(data.length > 1)
	{
		// Set smallest number to first element so it can be compared later
		smallest = data[0];
		smallIndex = 0;
		
		// Loop to find the smallest element
		for(var index = 0; index < data.length; index++)
		{
			// If the current element is smaller than the smallest element found so far
			if(data[index] < smallest)
			{
				// Set smallest element to current element
				smallest = data[index];
				// Store index of new smallest element
				smallIndex = index;
			}
		}
		
		// Remove the smallest element using its index
		data.splice(smallIndex, 1);
		
		// Set largest element to first element of recently changed array
		largest = data[0];
		largeIndex = 0;
		
		// Loop to find the largest element (must find largest element in separate loop because
		// the splice function called previously changed the array and the indexes are shifted)
		for(var index = 0; index < data.length; index++)
		{
			// If the current element is larger than the largest element found so far
			if(data[index] > largest)
			{
				// Set largest element to current element
				largest = data[index];
				// Store index of new largest element
				largeIndex = index;
			}
		}
		
		// Remove the largest element using its index
		data.splice(largeIndex, 1);
		
		message = "The smallest value was " + smallest + ", the largest value was " + largest
					+ " and they were removed from the data set. The resulting list is: " + data;
	}
	// Otherwise there is not enough data to work with and must change message to show error
	else
	{
		message = "There is not enough data to display.";
	}
	
	// Display message
	document.getElementById("data").innerHTML = message;
}