# MEGRID-a-CSS-Responsive-Framework
This is grid system that i have designed for general responsive of a webpage. Yes there are other alternatives but a home brewn one never hurts.  
#NAVBAR

# DEMO
<img src="https://github.com/rajatkb/MEGRID-a-CSS-Responsive-Framework/blob/master/ezgif-3-d702b96c1cbd.gif" />
	
That is the general layout of the navbar . You have your Standard list of 
items and then you have. Need to include a Brand Name part . 
	> Use navbar-right for right side navbar
	>navbar-left for left side
	>navbutton is necessary for that button structure.
	> inside navbutton there can be anything like span div or p or anything . I would recommend using span or div though. following this rule does most of your job.<br>

## Sample
![Alt text](http://i.imgur.com/1ZeISLK.png "general markup")

If you want to change the looks of the layour which you will have to eventuatlly change it as you see fit the colours and all other stuff.

z-index of nav : 9000 <br>
z-index : menu-panel : 9005 <br>
z-index navbutton: 9010 <br>



#GRID UI

 1)The Row system starts with <br> 
	.grid-contain.responsive <br>
	.grid-50 <br>
	.grid-50 <br>
  This particular structure would result in a responsive nature of the grids <br>
  Grids would size themselves accordingly.<br>
	.grid-contain.sustain<br>
 This partcular structure allows for grids that remain as the same floated graid to the very end of universe !!!!!! <br>
 Grids can be of various sizes i.e one row is divided in 10 equal parts so when you devide the grids do accordingly<br>
 
 There is one special case of 'grid-33' which gives the tricolumn layout.<br>

2)Next is 'masonry' <br>
  .grid-contain.responsive .masonry <br>
   The masonry allows for a beutifull cascading of the columns of variable height. <br>
   It uses flexbox so beware of as to how it may start behaving in certain browsers.<br>
3)Text
   Under general typohgraphic rule content is 16pt with 1.5 line 
   height and general content is 16px with line height 24px.	
