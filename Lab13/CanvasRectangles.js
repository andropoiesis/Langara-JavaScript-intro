/*	***************************************
	*	Author: Jacqueline Sauter Forseck *
	*	Date: November 13, 2014			  *
	***************************************
*/

// Function to display the image of the hydrangeas along with the grid
function displayImage(rows, columns)
{
	'use strict';
	
	// Get canvas and context
	var canvas = document.getElementById("canvas");
	var context = canvas.getContext("2d");
	// Create image object
	var flowers = new Image();
	
	// Get the how tall each row will be and how wide each column will be
	var rowHeight = canvas.height / rows;
	var colWidth = canvas.width / columns;
	
	// Set the source of image object to the file where the image is
	flowers.src = "Hydrangeas.jpg";
	// Draw image and grid when the image is loaded
	flowers.onload = function()
	{
		// Get array of Rectangle objects based on how many rows and columns there are
		var rects = getRectangles(canvas, rows, columns);
		
		// Draw the background image on canvas
		context.drawImage(flowers, 0, 0);
		
		// Loop to draw outline of each Rectangle object 
		for(var rect = 0; rect < rects.length; rect++)
		{
			// Draws outline of each Rectangle object in red
			strokeRectangle(context, "rgb(255, 0, 0)", rects[rect]);
		}
	}
}

// Function to define Rectangle class
function Rectangle(x, y, width, height)
{
	'use strict';
	
	// Set location and size properties for Rectangle class
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
}

// Function to draw outline of Rectangle object
function strokeRectangle(context, colour, rectangle)
{
	'use strict';
	
	// Set the outline colour
	context.strokeStyle = colour;
	// Draw the outline of Rectangle object using its properties
	context.strokeRect(rectangle.x, rectangle.y, rectangle.width, rectangle.height);
}

// Function to draw filled Rectangle object
function drawRectangle(context, colour, rectangle)
{
	'use strict';
	
	// Set fill colour
	context.fillStyle = colour;
	// Draw filled Rectangle object using its properties
	context.fillRect(rectangle.x, rectangle.y, rectangle.width, rectangle.height);
}

// Function to get an array of Rectangle objects
function getRectangles(canvas, rows, cols)
{
	'use strict';
	
	// Get context
	var c = canvas.getContext("2d");
	// Initialize an empty array for Rectangle objects
	var rectangles = [];
	// Calculate the height of each row (also height of each Rectangle object)
	var rowHeight = canvas.height / rows;
	// Calculate the width of each column (also width of each Rectangle object)
	var colWidth = canvas.width / cols;
	
	// Nested loops to add new Rectangle objects to the array
	// Outer loop goes through each row
	for(var y = 0; y < canvas.height; y += rowHeight)
	{
		// Inner loop goes through each Rectangle in the current row
		for(var x = 0; x < canvas.width; x += colWidth)
		{
			// Add new Rectangle object to array
			rectangles.push(new Rectangle(x, y, colWidth, rowHeight));
		}
	}
	
	return rectangles;
}

// Function to draw a random number of Rectangle objects
function drawRandomRects(rows, columns)
{
	'use strict';
	
	// Get canvas and context
	var canvas = document.getElementById("canvas");
	var c = canvas.getContext("2d");
	// Get the array of Rectangle objects to be drawn
	var rects = getRectangles(canvas, rows, columns);
	// Random number to determine whether Rectangle is drawn or not
	var randomNum;
	
	// Loop to traverse array of Rectangle objects
	for(var rect = 0; rect < rects.length; rect++)
	{
		// Set to a random number between 0 and 1
		randomNum = Math.random();
		
		// If the random number is greater than 0.5
		if(randomNum > 0.5)
		{
			// Draw the Rectangle object
			drawRectangle(c, "rgba(255, 0, 0, 0.5)", rects[rect]);
		}
	}
}
