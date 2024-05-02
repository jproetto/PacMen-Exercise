# Project Title

PacMen-Exercise

## Description of Project

When we click on the Add PacMan button, a random one of the four pre-loaded PacMen images will be selected, and displayed at random x and y coordinates within the viewport. 

## How To Run

Step 1: Line 12 is the velocity control variable which is set by the function on line 26 and passed in via line 43. The number the velocity control variable is set to is your upper limit of velocity. I.e. In the function on line 26, a random interger is created between 0 and (in this case 9), since math.floor rounds down, and is then set as your velocity. So the greatest the movement on the screen can be in each iternation for both the horizontal and vertical axis with your control velocity being 10, as in this case, is 9px. Your velocity is added to the positioning of your image every .2 seconds via line 73, and then that aggregate number of position + velocity is set as the new positioning in the next iternation via the function in line 63, creating the movement effect of the image. The x and y velocity are each generated as their own random interger (i.e. they are not neccissarily the same interger) because of the construct of the function in line 26, with both the x and y velocity number being generated independently. So the horizontal movement every iteration could theoretically be more pronounced than the vertical movement or vice versa. I.e. moving 2px every interation horizontally and 9px every iternation vertically. 
Step 2: You can make the image generated as big or as small as you like via line 51, but whatever you update line 51 to, must also be updated to in lines 13 and 14 after the minus sign. This is becuase in our program the image positioning is using top and left style properties. I.e. Positioned to the start the top edge and left edge at those coordinates. So for border detection, we have to remember to include the height and width of the image in our calculation, as that will get you to the right edge and bottom edge of the image (which when moving from left to right or top to bottom) is the real aggregate positioning of the right end and bottom edge for border detection. 
Step 3: Line 16 can include any 4 images you would like to randomly pull from. They can either be pulled locally from the drive as we are doing with our current syntax and structure, or can be web links, and pulled from the web.  
Step 4: After all of your controls have been set to your liking, drag and drop the .html file into the browswer, click on the Add PacMan button as many times are you like to add PacMan to the viewport, and then click Start Game to get them to move around the viewport and bounce off pre-programmed borders.

## Roadmap of Future Improvements 

We can adjust the "playground" i.e. the area in which the images move around to be something other than the viewport area. So perhaps creating a smaller playground area for this fun interface within a cell of a grid of a more fullsome website. For example, by adding margins on the left and right via grid style properties to create a display with blank "placeholder" grid cells on both sides for advertisements for your users!
