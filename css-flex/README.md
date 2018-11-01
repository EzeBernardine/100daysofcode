

# Flex
This helps in aligning your page and makes it responsive at once

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
*the container covers the whole horizontal area of page*

## Display: inline-flex
This equally displays the elements stack horizontally,but its difference fron display: flex, is that
*it doest not take over the entire row, it takes the exact wdth, whethear, small or big*

#Display: inline
Y=This display the element as an inline element just like  span tag.
*Any height and width will be ignored*

# Display: block
This display the element as a block element like the p tag.
*Each element takes up the whole width on a seperate line*

# Display: contents
It makes the containing container disappear
1. *Every property that has to do with the container disappears. Only the children stays*
2. *The color, border, margin, padding of the containing element disappears*
3. *But the color and font does show up*

# Display: grid
This makes the children of a contaning element take up the full width of the container equally
1. if the cotainer  has a width of 
```css
   width: 300px;
```
while the children, a width of 
```css
   width: 100px; (in  total)
```
the chlden will share the remaining 200px among them selves equally

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

















## Height: 100vh
This simplay sayslet the hieght be 100%. Ie, it should cover the entire height of the page

## Flex-direction: row
This  stacks the elements row by row. Ie from left to right
*It is the defaut setting*

## Flex-direction: colunm
This stacks the elemnts column by column. Ie one on top the other, from top to buttom

## fex-direction: row-reverse
This is similar to row, just that is dslpays fromright to left

## flex-diretion: cloumn-reverse
This stacks the elements form bottom to top. It is the oppasoti of column

## flex-wrap: wrap
THis simplay tells the brower to assign the exact width. 
*If the width is less enough, it should move over to the nest line to ensure the with are all the required value.*
*The entire height will be split to accomodate the changes and will at the same time fill up the height*

## flex-wrap: nowrap
*This the default setting*
It does not allow for the elements to maintain there width. It just shares the entire width within the elements
