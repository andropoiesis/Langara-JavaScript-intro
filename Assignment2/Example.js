/*	***************************************
	*	Author: Jacqueline Sauter Forseck *
	*	Date: November 12, 2014			  *
	***************************************
*/

function drawThing()
{
	'use strict';
	
	var canvas = document.getElementById("canvas");
	var c = canvas.getContext("2d");
	
	c.beginPath();
	c.moveTo(261, 211);
	c.lineTo(250, 199);
	c.lineTo(250, 215);
	c.lineTo(240, 225);
	c.lineTo(253, 228);
	c.lineTo(238, 234);
	c.lineTo(242, 237);
	c.lineTo(229, 245);
	c.lineTo(237, 246);
	c.lineTo(230, 255);
	c.lineTo(237, 256);
	c.lineTo(236, 268);
	c.lineTo(243, 265);
	c.lineTo(248, 269);
	c.lineTo(244, 279);
	c.lineTo(247, 279);
	c.lineTo(245, 292);
	c.lineTo(234, 295);
	c.lineTo(240, 301);
	c.lineTo(257, 294);
	c.lineTo(262, 274);
	c.lineTo(266, 297);
	c.lineTo(282, 304);
	c.lineTo(287, 297);
	c.lineTo(278, 295);
	c.lineTo(275, 282);
	c.lineTo(279, 282);
	c.lineTo(275, 266);
	c.lineTo(281, 264);
	c.lineTo(288, 266);
	c.lineTo(285, 254);
	c.lineTo(290, 254);
	c.lineTo(285, 246);
	c.lineTo(291, 245);
	c.lineTo(281, 238);
	c.lineTo(287, 237);
	c.lineTo(274, 229);
	c.lineTo(292, 225);
	c.lineTo(277, 215);
	c.lineTo(277, 199);
	c.lineTo(261, 211);
	c.fillStyle = "rgb(217, 183, 129)";
	c.fill();
	
	c.fillStyle = "rgb(13, 138, 255)";
	c.fillRect(257, 219, 3, 3);
	c.fillRect(266, 219, 3, 3);
}