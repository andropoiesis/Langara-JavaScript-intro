/*	***************************************
	*	Author: Jacqueline Sauter Forseck *
	*	Date: October 8, 2014			  *
	***************************************
*/

'use strict';

// Function for Part 1
function displayNewLineLetters()
{
	var phrase = document.getElementById("phrase").value;	// Get the input from user
	var output = "";
	
	// If there is no input
	if(!phrase)
	{
		output = "You did not enter anything.";
	}
	// Otherwise
	else
	{
		// Loop to place each character on a separate line within output string
		for(var letter = 0; letter < phrase.length; letter++)
		{
			output += phrase.charAt(letter) + "<br>";
		}
	}
	// Display the output string
	document.getElementById("new lines").innerHTML = output;
}

// Function for Part 2
function displayAlternatingCases()
{
	var word = document.getElementById("word").value;		// Get word from the user
	var output = "";
	var character;
	
	// If the use entered any input
	if(!word)
	{
		output = "You did not enter anything.";
	}
	// Otherwise
	else
	{
		// Loop to check whether each character in the word is alphabetic and
		// to create output with alternating case letters
		for(var index = 0; index < word.length; index++)
		{
			character = (word.charAt(index)).toUpperCase();
			
			// If the character is outside the alphabet range in the ASCII table
			if(character < "A" || character > "Z")
			{
				output = "The word cannot contain non-alpha characters (spaces, numbers, etc).";
				// Index set to value outside range of for loop to exit the loop prematurely
				// (if the word contains non-alpha characters there is no point in going
				// through the entire loop)
				index = word.length;
			}
			// Otherwise
			else
			{
				// If the index value is even
				if(index % 2 === 0)
				{
					// Set the character to lower case and concatenate onto output string
					output += character.toLowerCase();
				}
				// Otherwise if the index value is odd
				else
				{
					// Character already in upper case, so only concatenate onto output string
					output += character;
				}
			}
		}
	}
	
	// Display the output string
	document.getElementById("alternating").innerHTML = output;
}

// Function for Part 3
function displaySum()
{
	var firstNum = document.getElementById("first").value;		// First number in the range
	var lastNum = document.getElementById("last").value;		// Last number in the range
	var sum = 0;
	var output = "";
	
	// If the fields for the first number or the last number are empty
	if(!firstNum || !lastNum)
	{
		output = "You did not enter the first or the last integer in the range.";
	}
	// If the first number or the last number are not actually numeric
	else if(isNaN(Number(firstNum)) || isNaN(Number(lastNum)))
	{
		output = "You entered an invalid input as the first or last integer in the range.";
	}
	// Otherwise
	else
	{
		// Loop to sum all the integer numbers within the range given
		for(var number = parseInt(firstNum); number <= parseInt(lastNum); number++)
		{
			// Concatenate number onto output string
			output += number;
			sum += number;
			
			// If the number is the last in the range
			if(number === parseInt(lastNum))
			{
				// Concatenate equals sign followed by the sum onto the output string
				output += " = " + sum;
			}
			// Otherwise
			else
			{
				// Concatenate a plus sign onto the output string
				output += " + ";
			}
		}
	}
	
	// Display the output string (which includes the sum)
	document.getElementById("sum").innerHTML = output;
}

// Function for Part 4
function displayAlert()
{
	alert("This is an alert.");
}

// Function for Part 4
function displayConfirmation()
{
	var response = confirm("Please confirm whether you want to see the message.");
	var output = "";
	
	// If the user clicks OK
	if(response)
	{
		output = "I am a cat."
	}
	
	// Display the output
	document.getElementById("confirm").innerHTML = output;
}

// Function for Part 4
function displayPrompt()
{
	// Get some input from the user
	var text = prompt("Enter some text to be displayed on the web page.");
	// Display it
	document.getElementById("prompt").innerHTML = text;
}