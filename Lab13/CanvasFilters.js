/*	***************************************
	*	Author: Jacqueline Sauter Forseck *
	*	Date: November 13, 2014			  *
	***************************************
*/

// Function to invert the colours of the image
function invertColours()
{
	'use strict';
	
	// Get the canvas, context, and image data
	var canvas = document.getElementById("canvas");
	var context = canvas.getContext("2d");
	var imgData = context.getImageData(0, 0, canvas.width, canvas.height);
	
	// Loop to modify the colours in the image data array
	for(var i = 0; i < imgData.data.length; i += 4)
	{
		imgData.data[i] = 255 - imgData.data[i];		// Invert red colour
		imgData.data[i + 1] = 255 - imgData.data[i + 1];	// Invert green colour
		imgData.data[i + 2] = 255 - imgData.data[i + 2];	// Invert blue colour
	}
	
	// Put modified image data array back to canvas
	context.putImageData(imgData, 0, 0);
}

// Function to brighten or lighten the colours of the image
function brightenColours()
{
	'use strict';
	
	// Get the canvas, context, and image data
	var canvas = document.getElementById("canvas");
	var context = canvas.getContext("2d");
	var imgData = context.getImageData(0, 0, canvas.width, canvas.height);
	
	// Loop to modify the colours in the image data array
	for(var i = 0; i < imgData.data.length; i += 4)
	{
		imgData.data[i] += 10;			// Brighten red colour
		imgData.data[i + 1] += 10;		// Brighten green colour
		imgData.data[i + 2] += 10;		// Brighten blue colour
	}
	
	// Put modified image data array back to canvas
	context.putImageData(imgData, 0, 0);
}

// Function to fade the right edge
function fadeEdge()
{
	'use strict';
	
	// Get canvas, context, and image data
	var canvas = document.getElementById("canvas");
	var context = canvas.getContext("2d");
	var imgData = context.getImageData(0, 0, canvas.width, canvas.height);
	// Set fading effect to 0
	var fade = 0;
	
	// Fading effect loop
	for(var i = 0; i < imgData.data.length; i += 4)
	{
		// If at left edge of canvas (3 colour elements and 1 alpha element per pixel)
		if(i % (canvas.width * 4) == 0)
		{
			// Reset fading effect
			fade = 0;
		}
		// Otherwise
		else
		{
			// Increment fading effect
			fade += 0.3;
		}
		
		// Apply current fading to alpha element
		imgData.data[i + 3] -= fade;
	}
	
	// Put modified image data array back to canvas
	context.putImageData(imgData, 0, 0);
}

