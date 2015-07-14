/*	***************************************
	*	Author: ftmCoder				  *
	*	Date: April 7, 2015				  *
	***************************************
*/

// Constructor function for Furball
function Furball(x, y)
{
	'use strict';
	
	// Properties:
	// X and y coordinates of upper left hand corner of Furball drawing on canvas
	this.x = x;
	this.y = y;
	
	// Width and height of Furball drawing on canvas
	this.width = 67;
	this.height = 78;
	
	// Speed or step size for movement
	this.speed = 30;
	
	// Functions:
	// Allows Furball object to draw itself based on its x and y coordinates
	this.draw = function()
	{
		'use strict';
		
		// Get canvas and context
		var canvas = document.getElementById("canvas");
		var c = canvas.getContext("2d");
		
		// Draw outline of Furball
		c.strokeStyle = "rgb(0, 0, 0)";
		c.beginPath();
		c.moveTo(this.x + 30, this.y + 17);
		c.lineTo(this.x + 20, this.y + 0);
		c.lineTo(this.x + 18, this.y + 19);
		c.lineTo(this.x + 5, this.y + 11);
		c.lineTo(this.x + 12, this.y + 27);
		c.lineTo(this.x + 0, this.y + 33);
		c.lineTo(this.x + 10, this.y + 38);
		c.lineTo(this.x + 5, this.y + 48);
		c.lineTo(this.x + 21, this.y + 42);
		c.lineTo(this.x + 13, this.y + 56);
		c.lineTo(this.x + 20, this.y + 60);
		c.lineTo(this.x + 25, this.y + 50);
		c.lineTo(this.x + 22, this.y + 68);
		c.lineTo(this.x + 17, this.y + 71);
		c.lineTo(this.x + 24, this.y + 75);
		c.lineTo(this.x + 29, this.y + 69);
		c.lineTo(this.x + 32, this.y + 59);
		c.lineTo(this.x + 34, this.y + 59);
		c.lineTo(this.x + 39, this.y + 72);
		c.lineTo(this.x + 43, this.y + 78);
		c.lineTo(this.x + 50, this.y + 73);
		c.lineTo(this.x + 44, this.y + 70);
		c.lineTo(this.x + 41, this.y + 50);
		c.lineTo(this.x + 46, this.y + 61);
		c.lineTo(this.x + 52, this.y + 57);
		c.lineTo(this.x + 42, this.y + 42);
		c.lineTo(this.x + 61, this.y + 48);
		c.lineTo(this.x + 53, this.y + 38);
		c.lineTo(this.x + 66, this.y + 34);
		c.lineTo(this.x + 52, this.y + 27);
		c.lineTo(this.x + 56, this.y + 9);
		c.lineTo(this.x + 44, this.y + 21);
		c.lineTo(this.x + 38, this.y + 0);
		c.closePath();
		c.stroke();
		
		// Fill outline of Furball with a brown colour
		c.fillStyle = "rgb(185, 122, 87)";
		c.fill();
		
		// Draw Furball's eyes
		c.fillStyle = "rgb(0, 162, 232)";
		c.fillRect(this.x + 27, this.y + 32, 4, 4);
		c.fillRect(this.x + 34, this.y + 32, 4, 4);
	};
	
	// Allows Furball object to move itself in a random manner
	this.move = function()
	{
		'use strict';
		
		// Generate a random number from 0 up to but not including 10 (includes fractional numbers)
		var randomNum = Math.random() * 10;
	
		// Depending on value of random number, will call left, right, up or down move functions
		// Each movement direction function has a 1/4 chance of being called
		if(randomNum <= 2.5)
		{
			moveLeft(this);
		}
		else if(randomNum <= 5.0)
		{
			moveUp(this);
		}
		else if(randomNum <= 7.5)
		{
			moveRight(this);
		}
		else
		{
			moveDown(this);
		}
	};
	
	// Allows Furball object to "drop" a fluffy onto the board; takes the list of fluffies on the board as input
	this.dropFluffy = function(list)
	{
		'use strict';
		
		// Generate a random number between 0 up to but not including 10 (includes fractional numbers)
		var randomNum = Math.random() * 10;
		
		// If the random number is less than or equal to 1
		if(randomNum <= 1)
		{
			// Create a new Fluffy object at same location as Furball object and push it onto the list of fluffies on the board
			list.push(new Fluffy(this.x, this.y));
		}
	};
}

// Constructor function for Hairless
function Hairless(x, y)
{
	'use strict';
	
	// Properties:
	// X and y coordinates of upper left hand corner of Hairless drawing on canvas
	this.x = x;
	this.y = y;
	
	// Width and height of Hairless drawing on canvas
	this.width = 40;
	this.height = 56;
	
	// Speed or step size for movement
	this.speed = 5;
	
	// List of Fluffies that Hairless object has picked up from the board
	this.fluffies = [];
	
	// Functions:
	// Allows Hairless object to draw itself based on its x and y coordinates
	this.draw = function()
	{
		'use strict';
		
		// Get canvas and context
		var canvas = document.getElementById("canvas");
		var c = canvas.getContext("2d");
		
		// Set the outline and fill colours
		c.strokeStyle = "rgb(0, 0, 0)";
		c.fillStyle = "rgb(255, 0, 0)";
		
		// Draw outline of Hairless' body and fill it with red colour (wearing a jumpsuit)
		c.beginPath();
		c.moveTo(this.x + 9, this.y + 20);
		c.lineTo(this.x + 0, this.y + 34);
		c.lineTo(this.x + 7, this.y + 38);
		c.lineTo(this.x + 12, this.y + 28);
		c.lineTo(this.x + 9, this.y + 46);
		c.lineTo(this.x + 5, this.y + 49);
		c.lineTo(this.x + 11, this.y + 53);
		c.lineTo(this.x + 15, this.y + 48);
		c.lineTo(this.x + 19, this.y + 37);
		c.lineTo(this.x + 21, this.y + 37);
		c.lineTo(this.x + 25, this.y + 49);
		c.lineTo(this.x + 30, this.y + 55);
		c.lineTo(this.x + 37, this.y + 51);
		c.lineTo(this.x + 31, this.y + 48);
		c.lineTo(this.x + 28, this.y + 28);
		c.lineTo(this.x + 33, this.y + 38);
		c.lineTo(this.x + 39, this.y + 35);
		c.lineTo(this.x + 29, this.y + 20);
		c.closePath();
		c.fill();
		c.stroke();
		
		// Draw outline of Hairless' head and fill it with skin colour
		drawCircle(c, "rgb(251, 224, 196)", this.x + 19, this.y + 12, 12);
		c.stroke();
		
		// Draw Hairless' eyes
		c.fillStyle = "rgb(94, 57, 38)";
		c.fillRect(this.x + 14, this.y + 10, 4, 4);
		c.fillRect(this.x + 21, this.y + 10, 4, 4);
	};
	
	// Allows Hairless object to move itself based on a given keyboard event
	this.move = function(event)
	{
		'use strict';
	
		// Get the key that was pressed
		var key = event.which;
	
		// If key is left arrow
		if(key == 37)
		{
			moveLeft(this);
		}
		// If key is up arrow
		else if(key == 38)
		{
			moveUp(this);
		}
		// If key is right arrow
		else if(key == 39)
		{
			moveRight(this);
		}
		// If key is down arrow
		else if(key == 40)
		{
			moveDown(this);
		}
	};
	
	// Allows Hairless object to determine whether its drawing is on another object's drawing in the game
	// Given object can be Furball object or a Fluffy object for its purposes
	this.isOnThing = function(object)
	{
		'use strict';
		
		// Right side of Hairless drawing is past the left side of object drawing and 
		// left side of Hairless drawing is not past right side of object drawing
		var xRange = (this.x + this.width * 2/3 >= object.x && this.x <= object.x + object.width * 2/3);
		
		// Bottom side of Hairless drawing is past the top side of object drawing and
		// top side of Hairless drawing is not past the bottom side of object drawing
		var yRange = (this.y + this.height * 2/3 >= object.y && this.y <= object.y + object.height * 2/3);
		
		// Both Boolean expressions must be true
		return xRange && yRange;
	};
	
	// Allows Hairless object to remove a Fluffy from the board
	this.removeFluffy = function(list)
	{
		'use strict';
		
		// Goes through the list of Fluffies available on the board
		for(var i = 0; i < list.length; i++)
		{
			// If Hairless object is on a Fluffy object within the list of Fluffies on the board
			if(this.isOnThing(list[i]))
			{
				// "Pick up" the Fluffy by storing it into its list of collected Fluffies
				this.fluffies.push(list[i]);
				
				// Remove the Fluffy from the list of Fluffies on the board
				list.splice(i, 1);
				
				// Break outside of the for loop to end the function
				break;
			}
		}
	};
}

// Constructor function for Fluffies
function Fluffy(x, y)
{
	'use strict';
	
	// Properties:
	// X and y coordinates of upper left hand corner of Fluffy drawing on canvas
	this.x = x;
	this.y = y;
	
	// Width and height of Fluffy drawing on canvas
	this.width = 20;
	this.height = 18;
	
	// Functions:
	// Allows Fluffy object to draw itself based on its x and y coordinates
	this.draw = function()
	{
		'use strict';
		
		// Get canvas, context, and set colour of Fluffy
		var canvas = document.getElementById("canvas");
		var c = canvas.getContext("2d");
		var filling = "rgb(185, 122, 87)";
		
		// Draw the Fluffy object
		drawCircle(c, filling, this.x + 4, this.y + 5, 4);
		c.stroke();
		drawCircle(c, filling, this.x + 12, this.y + 4, 4);
		c.stroke();
		drawCircle(c, filling, this.x + 17, this.y + 9, 3);
		c.stroke();
		drawCircle(c, filling, this.x + 15, this.y + 14, 3);
		c.stroke();
		drawCircle(c, filling, this.x + 8, this.y + 15, 4);
		c.stroke();
		drawCircle(c, filling, this.x + 3, this.y + 11, 3);
		c.stroke();
		drawCircle(c, filling, this.x + 10, this.y + 9, 5);
	};
}

// General function to move Furball or Hairless object towards the left
function moveLeft(object)
{
	'use strict';
		
	// If the left movement will not cause the object to move off the canvas' left edge
	if(object.x - object.speed >= 0)
	{
		// Decrement object's x coordinate by the step size
		object.x -= object.speed;
	}
	// Otherwise
	else
	{
		// Set object's x coordinate to the canvas' left edge
		object.x = 0;
	}
}

// General function to move Furball or Hairless object towards the right
function moveRight(object)
{
	'use strict';
	
	// Get canvas in order to get the canvas width
	var canvas = document.getElementById("canvas");
	
	// If the right movement will not cause the object to move off the canvas' right edge
	if(object.x + object.width + object.speed <= canvas.width)
	{
		// Increment object's x coordinate by the step size
		object.x += object.speed;
	}
	// Otherwise
	else
	{
		// Set object's x coordinate to the canvas' right edge minus the width of the object
		object.x = canvas.width - object.width;
	}
}

// General function to move Furball or Hairless object upwards
function moveUp(object)
{
	'use strict';
		
	// If the upwards move will not cause the object to move off the canvas' top edge
	if(object.y - object.speed >= 0)
	{
		// Decrement object's y coordinate by the step size
		object.y -= object.speed;
	}
	// Otherwise
	else
	{
		// Set object's y coordinate to the canvas' top edge
		object.y = 0;
	}
}

// General function to move Furball or Hairless object downwards
function moveDown(object)
{
	'use strict';
	
	// Get the canvas in order to get the canvas height
	var canvas = document.getElementById("canvas");
	
	// If the downwards move will not cause the object to move off the canvas' bottom edge
	if(object.y + object.height + object.speed <= canvas.height)
	{
		// Increment object's y coordinate by the step size
		object.y += object.speed;
	}
	// Otherwise
	else
	{
		// Set object's y coordinate to the canvas' bottom edge minus the height of the object
		object.y = canvas.height - object.height;
	}
}

// General function to draw a circle given the context, the fill colour, the x and y coordinates of the centre
// of the circle, and the circle's radius
function drawCircle(context, colour, centerX, centerY, radius)
{
	'use strict';
	
	// Set the filling to the given colour
	context.fillStyle = colour;
	
	// Draw and fill the circle
	context.beginPath();
	context.arc(centerX, centerY, radius, 0, 2 * Math.PI);
	context.fill();
}

// Function to initialize the game
function init()
{
	'use strict';
	
	// Get the canvas and context
	var canvas = document.getElementById("canvas");
	var c = canvas.getContext("2d");
	
	// Get the start button
	var startButton = document.getElementById("start");
	
	// Create a new image for the background
	var apartment = new Image();
	
	// Declarations for ID of interval function that draws everything to be drawn, and for the background
	var drawID;
	var background;
	
	// Set the source of the background image and create a pattern for fillStyle property of the context as soon as image loads
	apartment.src = "Apartment_V2.PNG";
	apartment.onload = function()
	{
		background = c.createPattern(apartment, "no-repeat");
	};
	
	// Initialize Furball and Hairless to their starting positions, and initialize the list of Fluffies on the board
	var furball = new Furball(canvas.width / 2, canvas.height / 2);
	var player = new Hairless(0, 0);
	var fluffyList = [];
	
	// Pop up message with introduction and instructions on how to play
	/*alert("Welcome to THE ADVENTURES OF HAIRLESS AND FURBALL! Hairless and Furball are a couple " +
			"who live in an apartment. Furball, on account of being so hairy, leaves plenty of " +
			"his hairy 'Fluffies' behind as he moves about. You play Hairless and your task is " +
			"to collect all the 'Fluffies' that Furball leaves behind, and catch him before he " +
			"drops more. You lose the game if there are more than 10 'Fluffies' in the apartment. " +
			"\n\nPlease click the START button to begin the game. Click PAUSE to pause the game, " +
			"and END to give up. Use the arrow keys to move Hairless.");
	*/
			
	// Interval timer to call the drawEverything function every 10 milliseconds
	drawID = window.setInterval(function(){drawEverything(furball, player, fluffyList, background);}, 10);
			
	// Event listener to start playing the game
	startButton.addEventListener('mousedown', function()
	{
		playGame(furball, player, fluffyList, drawID);
	}, false);
}

// Function to start playing the game
function playGame(furball, hairless, list, drawID)
{
	'use strict';
	
	// Get the pause and end buttons
	var pauseButton = document.getElementById("pause");
	var endButton = document.getElementById("end");
	
	// Declarations for IDs of interval functions that move Furball, drop Fluffies on the board, and remove Fluffies from the board
	var moveID;
	var dropID;
	var removeID;
	
	// Store function definition
	var move = function(event)
	{
		'use strict';
		
		// Calls Hairless object's move function given a key press
		hairless.move(event);
	};
	
	// Event listener for key presses (player control)
	window.addEventListener('keydown', move, false);
	
	// Set IDs of interval timers that move Furball, drop Fluffies on board, and remove them from board
	moveID = window.setInterval(function(){furball.move();}, 100);
	dropID = window.setInterval(function(){furball.dropFluffy(list);}, 500);
	removeID = window.setInterval(function(){hairless.removeFluffy(list);}, 9);
	
	// Set interval timer to check whether the conditions to win or lose have been met
	window.setInterval(function(){checkWin(furball, hairless, list, moveID, dropID, removeID, drawID, move);}, 10);
	
	// Event listeners for mouse clicks on the PAUSE and END buttons
	pauseButton.addEventListener('mousedown', function()
	{
		pauseGame(moveID, dropID, removeID, move);
	}, false);
	endButton.addEventListener('mousedown', function()
	{
		var message = "You ended the game. You collected " + hairless.fluffies.length + " Fluffies.";
		endGame(hairless, moveID, dropID, removeID, drawID, move, message);
	}, false);
}

// Function to pause the game
function pauseGame(moveInterval, dropInterval, removeInterval, moveFunc)
{
	'use strict';
	
	// Clears the timers for movement of Furball, dropping of Fluffies on board, and removal of Fluffies from board
	clearInterval(moveInterval);
	clearInterval(dropInterval);
	clearInterval(removeInterval);
	
	// Removes the event listener to move Hairless
	window.removeEventListener('keydown', moveFunc);
}

// Function to end the game
function endGame(hairless, moveId, dropId, removeId, drawId, moveFunc, message)
{
	'use strict';
	
	// Get the canvas and the context
	var canvas = document.getElementById("canvas");
	var c = canvas.getContext("2d");
	
	// Stop the game
	pauseGame(moveId, dropId, removeId, moveFunc);
	
	// Clear the timer to draw everything on the canvas
	clearInterval(drawId);
	
	// Display the given message
	c.font = "34px Arial";
	c.fillStyle = "rgb(255, 255, 255)";
	c.fillText(message, canvas.width / 4, canvas.height / 3);
	c.fillText("Reload the web page to play again.", canvas.width / 4, canvas.height / 2);
}

// Function to display a given background image
function displayBackground(background)
{
	'use strict';
	
	// Get the canvas and the context
	var canvas = document.getElementById("canvas");
	var c = canvas.getContext("2d");
	
	// Use the background image as a pattern for fillStyle and use it to draw a canvas-sized rectangle
	c.fillStyle = background;
	c.fillRect(0, 0, canvas.width, canvas.height);
}

// Function to display the background and draw Hairless, the Fluffies and Furball
function drawEverything(furball, hairless, fluffies, background)
{
	'use strict';
	
	// Display background
	displayBackground(background);
	
	// Draw Furball
	furball.draw();
	
	// Draw Hairless
	hairless.draw();
	
	// Go through each Fluffy item on the list of Fluffies on the board
	for(var item = 0; item < fluffies.length; item++)
	{
		// Draw the Fluffy item
		fluffies[item].draw();
	}
}

// Function to check whether winning or losing conditions have been met and end the game if so
function checkWin(furball, hairless, list, moveID, dropID, removeID, drawID, moveFunc)
{
	'use strict';
	
	// Declaration of message to be displayed
	var message;
	
	// If there are no Fluffies on the board and Hairless is on Furball
	if(list.length < 1 && hairless.isOnThing(furball))
	{
		// End game with winning message and number of Fluffies collected
		message = "YOU WON!! You collected " + hairless.fluffies.length + " Fluffies.";
		endGame(hairless, moveID, dropID, removeID, drawID, moveFunc, message);
	}
	// If there are more than 10 Fluffies on the board
	else if(list.length > 10)
	{
		// End game with losing message and number of Fluffies collected
		message = "YOU LOST!! You collected " + hairless.fluffies.length + " Fluffies.";
		endGame(hairless, moveID, dropID, removeID, drawID, moveFunc, message);
	}
}

// Run init function when the web page is loaded
window.addEventListener('load', init, false);

