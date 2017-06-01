# MEGRID-a-CSS-Responsive-Framework
This is grid system that i have designed for general responsive of a webpage. Yes there are other alternatives but a home brewn one never hurts.  
#NAVBAR
	<nav >
	<div class="navbutton">
		<span></span>
		<span></span>
		<span></span>
	</div>
	<ul class="nav-right">
		<li>About </li>
		<li>Portfolio </li>
		<li>Contact</li>
	</ul>
	</nav>
	<div class="frame">
	//YOUR ENTIRE HTML BODY GOES RYT INISIDE HERE
	//THIS ALLOWS FOR SEGREGATION BETWEEN menu and content
	</div>

That is the general layout of the navbar . You have your Standard list of 

items and then you have. Need to include a Brand Name part . 
	> Use navbar-right for right side navbar
	>navbar-left for left side
	>navbutton is necessary for that button structure.
	> inside navbutton there can be anything like span div or p or 

anything . I would recommend using span or div though. following this rule 

does most of your job.
If you want to change the looks of the layour which you will have to 
eventuatlly change it as you see fit the colours and all other stuff.

z-index of nav : 9000
z-index : menu-panel : 9005
z-index navbutton: 9010


#GRID UI

* The Row system starts with 
	.grid-contain.responsive
		.grid-50
		.grid-50
  This particular structure would result in a responsive nature of the grids
  Grids would size themselves accordingly.
	.grid-contain.sustain
		.grid-50
		.grid-50
 This partcular structure allows for grids that remain as the same floated 

graid to the very end of universe !!!!!! 	
 Grids can be of various sizes i.e one row is divided in 10 equal parts so when 

you devide the grids do accordingly
 There is one special case of 'grid-33' which gives the tricolumn layout.

>Next is 'masonry'
	.grid-contain.responsive .masonry
	The masonry allows for a beutifull cascading of the columns of variable height.
	It uses flexbox so beware of as to how it may start behaving in certain browsers.
#Text

	Under general typohgraphic rule content is 16pt with 1.5 line 
   height and general content is 16px with line height 24px.	




dwqdq

	
