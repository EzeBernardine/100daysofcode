

---------------*display--------------*
# Display Values are
1.  flex
2.  inline-flex 
3.  inline 
4.  block
5.  contents
6.  grid
7.  inline-block
8.  inline-grid
9.  inline-table 
10. list-item 
11. run-in
12. table 
13. table-caption
14. table-column-group 
15. table-header-group 
16. table-footer-group
17. table-row-group
18. table-cell
19. table-column
20. table-row 
21. none 
22. initial 
23. inherit 

## Display: flex
This makes the content of your page stack close to ano another ia a horizontal format. 
1. the container covers the whole horizontal area of page

## Display: inline-flex
This equally displays the elements stack horizontally,but its difference fron display: flex, is that
1. it doest not take over the entire row, it takes the exact wdth, whethear, small or big*

#Display: inline
Y=This display the element as an inline element just like  span tag.
1. Any height and width will be ignored*

# Display: block
This display the element as a block element like the p tag.
1. Each element takes up the whole width on a seperate line

# Display: contents
It makes the containing container disappear
1. Every property that has to do with the container disappears. Only the children stays*
2. The color, border, margin, padding of the containing element disappears*
3. But the color and font does show up*

# Display: grid
This makes the children of a contaning element take up the full width and height of the container equally
1. if the cotainer  has a width of 
```css
   width: 300px;
   height: 500px
```
while the children, a width of 
```css
   width: 100px; (in  total) and 
   height: 400px
```
the chlden will share the remaining 200px in width and 100px in height among them selves equally

#Display: inline-block
This considers the margin of the containing element and also the padding.
1. It wraps the element and removes spaces or extra width of the element execpt there is an implicit width
2. It treats the element as an inline element and also a block element. 
3. Extra remaining space is occupied by other elements.

#Display: inline-grid
This is similar to grid. The difference is
1. its inline. It takes the width of the content. Extra with is letf for other elements to.
eg. if width of the content is 200px, the container will justcover it up leaving other space around it for other elements

# Display: inline-table
1. This ignores the width of the children.
2. If a width is given to the container, it takes the width only if it covers he children, Else, it ignores the width and wraps the children.
3. The children arranges itself to be contained in the container, taking the next line if the width is not enough for another child

#Display: run-in
Displays an element as either block or inline, depending on context 

#Display: list-item
Let the element behave like a <li> element
It goes wee with 
```css
list-style-position:
```
#Display: table 
The element behaves like a table.
1. It waps the element releasing excess space

#Display: table-caption 
1. The key part is that they are rendered as normal block boxes and hence each of them is displayed one below the other (as in, in their own row).


-----------------*fle-direction----------*
### Flex-direction values
1. row
2. row-reverse
3. column
4. column-reverse
5. initial
6. inherit

# Flex-direction: row
This is the default setting. It makes the elements to stack fromleft to right

# flex-direction: roww-reverse
This is somehow similar to row. The major difference is 
1. It arranges itself from right to left
2. It starts from right side of the page to the left side

# flex-diection: column
This arranges the element fro top to bottom

#flex-direction: column-resverse
This is like column. The major difference is
1. It arranges itselffrom bottom to top
2. The aarangement starts from the bottom page to the top

#flex-direction: initial
Sets this property to its default value

#flex-direction: inherit
Inherits this property from its parent element.


---------------*flex wrap-------------*
#flex-wrap values
1. nowrap
2. wrap
3. wrap-reverse
4. inital
5. inhrit
# flex-wrap: wrap;
This ensures that the items maintain there width. 
1. They all take up the designated width, moving over to next line if there is no more space left.
2. They all share the available  height equally

# flex-wrap: wrap-reverse;
This is similar to wrap. the difference is that it move from bottom to top, still maintainin its from left to fight position. 
1. They all take up the designated width, moving over to next line if there is no more space left.
2. They all share the available  height equally

#flex-wrap: nowrap
This is the default value. it simply tells the items not to wrap

#flew-wrap: initial
This sets the item to a default value.

#flew-wrap: inherit
This says inherits the parent property


---------------*order-----------------*
Its sets the order in which an item is layed in a grid or flex container
1. The item must be displayed flex or grid

#order: value
The values could be negative and positive integers
1. negative nomber stay atop
2. Positive number says below
3. Zero and novalue remains in position
order = 
(at the beginning)... -2, -1, 1, 0(default), 1, 2 , ...(at the end)
4. Order changes the arrangement of a text if being copied


-------------*justify-content---------------*
1. justify-content: space-around;
2. justify-content: space-between;
3. justify-content: space-evenly;
4. justify-content: initial;
5. justify-content: inherit;
6. justify-content: flex-end;
7. justify-content: flex-start;
7. justify-content: center;
# justify-content: space-round;
The items are evenly distributed along main axis(vertical) with  spaces around them.

# justify-content: space-between;
The items are evenly distributed along main axis but fist item is on the start line while the last itemis on the end-line.

# justify-content: space-evenly;
The items are evenly distributed along main axis. From the first to last element.

# justify-content: initial
This sets the property to its default value

# justify-content: inherit
Inherits this property from its parent element.

# justify-content: flex-end
The items are parked towards the end of the container

# justify-content: flex-start
(default): items are packed toward the start line

# justify-content: center
 items are centered along the line


-----------*align-items----------------*
NOTE. 
 1. In Flexbox it controls the alignment of items on the Cross Axis(vertical direction)
 2. In Grid Layout it controls the alignment of items on the Block Axis(horizontal direction) within their grid area.
 3. Align-item works better along side with display flex or grid
 Think of it as the justify-content version for the cross-axis (perpendicular to the main-axis).
CSS Syntax
1. stretch(default)
2. center
3. flex-start
3. flex-end
4. baseline
5. initial
6. inherit;
# align-item: stretch
This vertically streches the width of the content of the element to the entire width
its is the default value

# align-item: center
This centers the element along the vertical axis when using 
```css
display: flex
```
But along horizontal axis when using 
```css
display: grid
```

# align-item: flex-start
This aligns the content from the top of the page down verticaly

# align-item: flex-end
Unlike flex-start, it starts from the bottom and moves upwards

# align-item: baseline
This makes all the write up of the page have the same base margin. ie, the content will be positined at the same baseline  of the cotainer  

------------------*align-content-------------*
The CSS align-content property sets how the browser distributes space between and around content items along the cross-axis(horizontal) of a flexbox container, and the main-axis of a grid container.
@!Always be used along side with flex-wrap: wrap!@
1. flex-start
2. flex-end:
3. center:
4. space-between: 
5. space-around:
6. stretch (default)
#flex-start: 
lines packed to the start othe container(horizontally)
#flex-end:
 lines packed to the end of thcontainer(horizontally)
#center:
 lines packed to the center of the container (horizontally)
#space-between:
 This evenly distributes the first line  at the start of the container while the last one is at the end
#space-around:
 This evenly distributes the elements with equal space around each line
#stretch (default):
 lines stretch to take up the remaining space


*difference between justify-content, align-content and align-item*
___The align-items property of flex-box aligns the items inside a *flex container(using display: flex)* along the *cross axis (vertical ||)* just like 

___justify-content does along the *main axis(horizontal ==)*. (For the default flex-direction: row the cross axis corresponds to vertical and the main axis corresponds to horizontal. With flex-direction: column those two are interchanged respectively).

___But align-content is for multi line flexible boxes. (*flex-wrap: wrap and wrap-reverse create a multi-line flex container*) It has no effect when items are in a single line (*flex-wrap: nowrap creates a single-line flex container*). It aligns the whole structure according to its value. The CSS align-content property sets how the browser distributes space between and around content items along the cross-axis(horizontal) of a flexbox container, and the main-axis of a grid container.

(*To maintain the width of the elements and yet keep them at the say bottom, use fles-wrap: wrap and align-content: flex-end. To keep an element at the bottom without regarding its individual width, use flex-wrap: nowrap and align-items; flex-end*)







