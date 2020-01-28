


# CSS

# POSITIONING
The position CSS property sets how an element is positioned in a document.
## Positioning values
1. relative
2. sticky
3. fixed
4. absolute
5. static (default)

 
 ## position: relative;
 The element is positioned according to the normal flow of the document.
 * it introduces the ability to use z-index on that element, which doesn't really work with statically  
* The top and bottom properties specify the vertical offset from its normal position; the left and right properties specify the horizontal offset.

read more here https://css-tricks.com/absolute-relative-fixed-positioining-how-do-they-differ/

 ```html
  <p>Hello, mr positioner</p>
  <div class="div1">div 1</div>
  <div class="div2">div 2</div>
 ```
 ```css
  p {
      background: olivedrab;
      margin: 0;
    }
    .div1 {
      height: 50px;
      width: 50px;
      background: coral;
      position: relative;
      top: 150px
    }
    .div2 {
      height: 50px;
      width: 50px;
      background: peru;
    }
 ```
But when 

```css
   position: relative; /*is commented out*/ 

 p {
      background: olivedrab;
      margin: 0;
    }
    .div1 {
      height: 50px;
      width: 50px;
      background: coral;
      /* position: relative; */
      top: 150px  /*this wil not take effect */
    }
    .div2 {
      height: 50px;
      width: 50px;
      background: peru;
    }
```
The result will be

 ### *From my own understanding, relative positioning allows the the page elements to stay in its normal position regarding the existence of the element's(with positin relative) defaut position, and also allows the element in qestion to to be repsoitioned from its default position using the top, left, right and bottom properties which will  not affect the the other elements*
 
 ## position: static;
 An element with *position: static;* is not positioned in any special way; it is always positioned according to the normal flow of the page:
 ###  **Note:**
   Static positioned elements are not affected by the top, bottom, left, and right properties.

## position: fixed
An element with position: fixed; is positioned relative to the viewport.
<li>Note:</li> 

* The element is removed from the normal document flow,
* It always stays in the same place even if the page is scrolled 
* It can be repositioned with the top, bottom, right or left props
* no space is created for the element in the page layout

### Effect of top, bottom, left and right on it
Top, right, left and bottom affects the element in regards to its viewport.

let’s say an element has a top value of 20px, it will be positioned 20px from the top of the viewport
```css
    <p>Hello, Mr positioner</p>
    <p>Hi, Mrs positioner</p>
    <div class="div1">div 1</div>
    <div class="div2">div 2</div>
```
```css
  body {
      padding: 0;
      margin: 0;
    }
    p {
      background: olivedrab;
      height: 50px;
      margin: 0;
    }
    div {
      height: 50px;
      width: 50px;
      background: peru;
    }
    p:nth-child(2) {
      background: blue;
    }
    .div1 {
      background: hotpink;
      position: fixed;
      top: 20px
    }

```
## position: absolute
  * The element is removed from the normal document flow,
  *  no space is created for the element in the page layout.
  * Well, it is positioned based on its closest ancestor with a position other than static.
  * If there is not an ancestor that fits the criteria, it is positioned relative to the body element.

**Note:** body can be scrolled unlike viewport
### Effect of top, bottom, left and right on it

You use the positioning attributes top, left, bottom. and right to set the location.

* Remember that these values will be relative to the **next parent element with relative (or absolute) positioning**. If there is no such parent, it will default all the way back up to the <html> element itself meaning it will be placed relatively to the page itself.

Quick, let’s look at the code
```css
body {
margin: 0;
height: 1000px;
background-color: azure;
}

section {
border: 1px solid rgb(225, 255, 0);
margin: 100px auto;
width: 500px;
padding: 10px;
background-color: crimson;
}

h1 {
height: 50px;
width: 50px;
margin: 2px;
background: green;
font-size: 40px;
color: antiquewhite;
}
```

The Html code
```html
<section>
  <h1>1</h1>
  <h1>2</h1>
  <h1>3</h1>
</section>

<section class="section2">
  <div>
    <h1>4</h1>
    <h1 class="div5">5</h1>
    <h1>6</h1>
  </div>
</section>
```

When div5 is given position absolute
```css
,div5 {
background-color: tan;
position: absolute;
top: 20px;
left: 1px;
}
```

Since there is no immediate parent with position: absolute or relative, The absolute position of div5 will be relative to the <html> tag

But when an immediate parent is assigned position: absolute or relative
```css
div {
position: relative;
background-color: yellowgreen;
}
```
The position: absolute for div5 will be in relation to the immediate parent which is the div

Also if the parent with the position: absolute or relative is the section2, and NOT the immediate div, div5’s position absolute will be in relation to section2 and not the div.
```css
div {
/* position: relative; */
background-color: yellowgreen;
}

section:nth-child(2) {
 position: relative;
 }

```

## Position: sticky

#  GRID

1. grid
2. grid-area
3. grid-auto-columns
4. grid-auto-flow
5. grid-auto-rows
6. grid-column
7. grid-column-end
8. grid-column-gap
9. grid-column-start
10. grid-gap
11. grid-row
12. grid-row-end
13. grid-row-gap
14. grid-row-start
15. grid-template
16. grid-template-areas
17. grid-template-columns
18. grid-template-rows
19. justify-items 
20. align-items
21. place-items
22. justify-content
23. align-content 
24. place-content

## Display: grid
grid layout enables an author to align elements into columns and rows.

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

## Display: inline-grid
This is similar to grid. The difference is
1. its inline. It takes the width of the content. Extra width is letf for other elements to.
eg. if width of the content is 200px, the container will justcover it up leaving other space around it for other elements

- The vertical line of grid items are called columns.
- The horizontal line of grid items are called rows.
- The space between each column/row are called gaps.

## grid-template-columns
 defines the **number of columns** in your grid layout, and it can define the **width of each column**.

 -  value is a space-separated-list, where each value defines the length of the respective column.

 -  But you can choose to explicitly name the lines. Note the bracket syntax for the line names: 

 - If your definition contains repeating parts, you can use the ```css repeat() ``` notation to streamline things:
 ```css
 .container {
  display: grid;
  border: 1px solid red;
  grid-template-columns: repeat(3, 100px)  /* This will create a 5 colums of size 100px */; /* This is equivalent to */grid-template-columns: 100px 100px 100px ;

  grid-template-columns: 50px repeat(5, 100px);  /* This will create a 6 colums with the first 50px and the remainng ones 100px */ /* This is equivalent to */ grid-template-columns: 50px 100px  100px 100px 100px 100px;
}
 ```

 **Note, the names couod be anything and can have more than one name.**
 ```css
 .container {
  grid-template-columns: [first] 40px [line2] 50px [line3] auto [col4-start] 50px [five] 40px [end];
}

.container {
  grid-template-columns: [row1-start] 25% [row1-end row2-start] 25% [row2-end];
}
 ```

 - The ```css fr``` unit allows you to set the size of a track as a fraction of the free space of the grid container. For example, this will set each item to one third the width of the grid container:
 ```css

.container {
  display: grid;
  border: 1px solid red;
  grid-template-columns: 1fr 5fr 1fr; /* Th *is will create  3columns, where the first and last are the width and the second, times arger*/
}

 ```
 ## The grid-template-rows Property
 The grid-template-rows property specifies the number (and the heights) of the rows in a grid layout.
 - The value is a space-separated-list, where each value defines the the height of the respective row:
 - The number of rows is determined by the number of values defined in the space-separated list.
 ```html
 <body>
  
  <div class="container"> 

    <div class="sidebar">
      sidebar
    </div>

    <header class="header">
      header
    </header>

    <div class="realtors">
      raltors
    </div>

    <section class="features">
      features
    </section>

    <div class="story_picture">
      story
    </div>

    <div class="story_content">
      story
    </div>

    <div class="homes">
      homes
    </div>

    <div class="galary">
      galary
    </div>

    <footer class="footer">
      footer
    </footer>
  </div>
</body>
 ```

 ```css
 .container {
  display: grid;
  grid-template-rows: 100px 40px 10px
}

 ```
 Only the first three rows will be asigned heights, 100, 40 and 10px.

 ## grid-template-areas
 Defines a grid template by referencing the names of the grid areas which are specified with the grid-area property
 - Repeating the name of a grid area causes the content to span those cells
 -  A period signifies an empty cell. 
 - Each row in your declaration needs to have the same number of cells.
 * Adjacent period can mean a single dot. As long as the periods  do not have spaces between them.
 - The grid-gap property defines the grid’s gutters and is shorthand for grid-column-gap and grid-row-gap.
 - This is the fun part. grid-template-areas defines the areas available in the grid. The name given to grid areas are arbitrary but should be sensible. The grid-template-areas also provides a crude visual representation of the page layout.

**Discoveries/Rules:**
* You cannot seperate a single grid-area with a dot 
```css
grid-template-areas: 
    "side . side " /* This will not work */
    "head head head "
    "realtor realtor realtor";
```
* You cannot seperate a single grid-area with an area 
```css
grid-template-areas: 
    "side side side "
    "head realtor head  "/* This will not work */
    "head realtor head  ";/* This will not work */
```
* An area cannot go but horizontal and vertical at a time 
```css
 grid-template-areas: 
    "side side side " /* is will not work */
    "side realtor head  "
    "side realtor head  ";
```
* Ensure the content of a container are all asign a grid area if the container is been given a gr-d-teamplate-area
This is cool
```css
<div class="container"> 

    <div class="sidebar">
      sidebar
    </div>

    <header class="header">
      header
    </header>

    <div class="realtors">
      raltors
    </div>
</div>

    <section class="features">
      features 
    </section>
```
But this will be messy
```css
<div class="container"> 

    <div class="sidebar">
      sidebar
    </div>

    <header class="header">
      header
    </header>

    <div class="realtors">
      raltors
    </div>

    <section class="features">
      features /* Because of this */ 
    </section>
</div>

```

```css
.sidebar {
  background-color: orange;
   grid-area: side;
}

.header {
  background-color: green;
  grid-area: head;
}

.realtors {
  background-color: blue;
   grid-area: realtor;
}
.features {
  background-color: purple;
   grid-area: fea ;
}

.container {
  display: grid;
  border: 1px solid red;
  grid-template-columns: repeat(3, auto) ;
  grid-template-rows: repeat(3, 50px);

  grid-template-areas: 
    "side .... .... realtor"
    "side head head  realtor"
    "side . . .";
}
```

## grid-template
A shorthand for setting **grid-template-rows**, **grid-template-columns**, and **grid-template-areas** in a single declaration.
```css
.container {
  grid-template: none | grid-template-rows grid-template-columns>;
}
```
For example 
```css
.container2 {
  display: grid;
  border: 1px solid rgb(0, 255, 17);

grid-template: 
  ' side head head head' 50px /*grid-template-rows: repeat(3, 50px);*/
  "side realtor realtor fea" 50px
  "side realtor realtor fea" 50px
  / auto auto auto auto   /*grid-template-columns: repeat(4, auto) */
}
```
is the same as

```css
.container2 {
  display: grid;
  border: 1px solid red;
  grid-template-columns: repeat(4, auto) ;
  grid-template-rows: repeat(3, 50px);

  grid-template-areas: 
    "side head head  head"
    "side realtor realtor   fea"
    "side realtor realtor  fea   ";
}
```

## grid-column-gap
You could say its just like giving some space inbetween a collection of books aligned horizontally

```css
grid-column-gap: <size of the line>
```
This can alsobe writtn as in higher browsers like Chrome 68+, Safari 11.2 Release 50+ and Opera 54+
```css
column-gap: <size of the line>
```
```html
  <div class="container"> 
    <div class="sidebar">
      sidebar
    </div>
    <header class="header">
      header
    </header>
    <div class="realtors">
      raltors
    </div>
    <section class="features">
      features
    </section>
  </div>
```

```css
.sidebar {
  background-color: orange;
  grid-area: side;
}
.header {
  background-color: green;
  grid-area: head;
}
.realtors {
  background-color: blue;
  grid-area: realtor;
}
.features {
  background-color: purple;
  grid-area: fea ;
}
.container {
  display: grid;
  border: 1px solid red;
  grid-template-columns: repeat(4, auto) ;
  grid-template-rows: repeat(3, 50px);
  grid-template-areas: 
    "side head head  fea"
    "side realtor realtor   fea"
    "side realtor realtor  fea   ";
  grid-column-gap: 20px
}

```
<img src="./img/grid-column-gap.png" alt="">
```

## grid-row-gap
You could say its just like giving some space inbetween a collection of books aligned vertically

```css
grid-row-gap: <size of the line>
```
This can also be writtn as in higher browsers like Chrome 68+, Safari 11.2 Release 50+ and Opera 54+
```css
row-gap: <size of the line>
```
```html
  <div class="container"> 
    <div class="sidebar">
      sidebar
    </div>
    <header class="header">
      header
    </header>
    <div class="realtors">
      raltors
    </div>
    <section class="features">
      features
    </section>
  </div>
```

```css
.sidebar {
  background-color: orange;
  grid-area: side;
}
.header {
  background-color: green;
  grid-area: head;
}
.realtors {
  background-color: blue;
  grid-area: realtor;
}
.features {
  background-color: purple;
  grid-area: fea ;
}
.container {
  display: grid;
  border: 1px solid red;
  grid-template-columns: repeat(4, auto) ;
  grid-template-rows: repeat(3, 50px);
  grid-template-areas: 
    "side head head  fea"
    "side realtor realtor   fea"
    "side realtor realtor  fea   ";
  grid-row-gap: 20px
}

```
<img src="./img/grid-row-gap.png" alt="">


## grid-gap
A shorthand for grid-row-gap and grid-column-gap
```html
  <div class="container"> 
    <div class="sidebar">
      sidebar
    </div>
    <header class="header">
      header
    </header>
    <div class="realtors">
      raltors
    </div>
    <section class="features">
      features
    </section>
  </div>
```

```css
.sidebar {
  background-color: orange;
  grid-area: side;
}
.header {
  background-color: green;
  grid-area: head;
}
.realtors {
  background-color: blue;
  grid-area: realtor;
}
.features {
  background-color: purple;
  grid-area: fea ;
}
.container {
  display: grid;
  border: 1px solid red;
  grid-template-columns: repeat(4, auto) ;
  grid-template-rows: repeat(3, 50px);
  grid-template-areas: 
    "side head head  fea"
    "side realtor realtor   fea"
    "side realtor realtor  fea   ";
  grid-gap: 50px 10px;
}
```

<img src="./img/grid-gap.png" alt="">

Note
* If no grid-row-gap is specified, it's set to the same value as grid-column-gap
```css
container {
  display: grid;
  border: 1px solid red;
  grid-template-columns: repeat(4, auto) ;
  grid-template-rows: repeat(3, 50px);
  grid-template-areas: 
    "side head head  fea"
    "side realtor realtor   fea"
    "side realtor realtor  fea   ";
  grid-gap: 10px 10px;
}
```
<img src="./img/same-grid-gap.png" alt="">

## justify-items

When a container is displayed grid, the contents span down the vertical direction of the container. For instance

```css
div {
  height: 100px;
  width: 150px
}
.sidebar {
  background-color: orange;
}
.header {
  background-color: green;
}
.realtors {
  background-color: blue;
}
.features {
  background-color: purple;
}
.container {
  display: grid;
  border: 3px solid red;
  height: 95vh;
  width: 1000px;
}
```
```html
  <div class="container"> 
    <div class="sidebar">
      sidebar
    </div>
    <div class="header">
      header
    </div>
    <div class="realtors">
      raltors
    </div>
    <div class="features">
      features
    </div>
  </div>
```
<img src="./img/display-grid-only.png" alt="">

But with justity-item, the contents are aligned at the center in a horizontal or inline format
  
```css
.container {
  display: grid;
  border: 3px solid red;
  height: 95vh;
  width: 1000px;
  justify-items: center
}
```

<img src="./img/display-grid.png" alt="">
The values include

```css
.container {
  justify-items: start | end | center | stretch;
}
```


# align-items
Aligns grid items along the block (column) axis or vertical axis.
It is opposite of justify-item
```css
.container {
  align-items: start | end | center | stretch;
}
```
```html
 
  <div class="background"> 
  
  <div class="container1 container">
    <div class="align_item">strech</div>
    <div class="align_item">strech</div>
    <div class="align_item">strech</div>
    <div class="align_item">strech</div>
  </div>

  <div class="container2 container">
    <div class="align_item">start</div>
    <div class="align_item">start</div>
    <div class="align_item">start</div>
    <div class="align_item">start</div>
  </div>

  <div class="container3 container">
    <div class="align_item">end</div>
    <div class="align_item">end</div>
    <div class="align_item">end</div>
    <div class="align_item">end</div>
  </div>

  <div class="container4 container">
    <div class="align_item">center</div>
    <div class="align_item">center</div>
    <div class="align_item">center</div>
    <div class="align_item">center</div>
  </div>

  </div>
```
```css
.container1 {
  grid-area: section1;
  align-items: stretch
}
.container2 {
  grid-area: section2;
  align-items: start
}
.container3 {
  grid-area: section3;
  align-items: end
}
.container4 {
  grid-area: section4;
  align-items: center;
}

.background {
  display: grid;
  grid-template: 
   "section1 section2 section3" 33vh
   "section4 ........ ......." 33vh
   / 433px 433px 433px ;
}
.background * {
  border: 1px solid red;
}
.container {
  display: grid;
}
.container > div {
  height: 4vh;
  width: 150px;
  background-color: rgb(0, 255, 21);
  border: 1px solid green
}
```
<img src="./img/alignItem.png" alt="">

## place-items
place-items sets both the align-items and justify-items properties in a single declaration.
The first value is <align-items> , and the second <justify-items>.
  - If the second value is omitted, the first value is assigned to both properties.
  
```html
 <div class="background"> 
  
  <div class="container1 container">
    <div class="align_item">center center</div>
    <div class="align_item">center center</div>
    <div class="align_item">center center</div>
    <div class="align_item">center center</div>
  </div>

  <div class="container2 container">
    <div class="align_item">center end</div>
    <div class="align_item">center end</div>
    <div class="align_item">center end</div>
    <div class="align_item">center end</div>
  </div>

  <div class="container3 container">
    <div class="align_item">center stretch</div>
    <div class="align_item">center stretch</div>
    <div class="align_item">center stretch</div>
    <div class="align_item">center stretch</div>
  </div>

  <div class="container4 container">
    <div class="align_item">stretch center</div>
    <div class="align_item">stretch center</div>
    <div class="align_item">stretch center</div>
    <div class="align_item">stretch center</div>
  </div>

  <div class="container5 container">
    <div class="align_item"> stretch end"</div>
    <div class="align_item"> stretch end"</div>
    <div class="align_item"> stretch end"</div>
    <div class="align_item"> stretch end"</div>
  </div>

  <div class="container6 container">
    <div class="align_item">stretch start</div>
    <div class="align_item">stretch start</div>
    <div class="align_item">stretch start</div>
    <div class="align_item">stretch start</div>
  </div>

  <div class="container7 container">
    <div class="align_item"> start start</div>
    <div class="align_item"> start start</div>
    <div class="align_item"> start start</div>
    <div class="align_item"> start start</div>
  </div>

  <div class="container8 container">
    <div class="align_item">end center</div>
    <div class="align_item">end center</div>
    <div class="align_item">end center</div>
    <div class="align_item">end center</div>
  </div>

  </div>
```
```css

*, *::before, *::after  {
    margin: 0;
    line-height: 1.7
  } 
  .container > div {
    background-color: rgb(0, 255, 21);
    border: 1px solid green
  }
  .container1 {
    grid-area: section1;
    place-items: center center;
  }
  .container2 {
    grid-area: section2;
    place-items: center end
    
  }
  .container3 {
    grid-area: section3;
    place-items: center stretch
    
  }
  .container4 {
    grid-area: section4;
    place-items: stretch center
  }
  .container5 {
    grid-area: section5;
    place-items: stretch end
  }
  .container6 {
    grid-area: section6;
    place-items: stretch start
  }
  .container7 {
    grid-area: section7;
    place-items: start start
  }
  .container8 {
    grid-area: section8;
    place-items: end center
  }
  
  .background {
    display: grid;
    grid-template: 
     "section1 section2 section3 " 33vh
     "section4 section5 section6  " 33vh
     "section7 section8 .........  " 33vh
     / 433px 433px 433px ;
  }
  .background * {
    border: 1px solid red;
  }
  .container {
    display: grid;
  }
 
```

<img src="./img/palceItems.png" alt="">


## justify-content 
This property aligns the grid along the inline (row) axis. It is opposite to  ``` align-content ```
```css
.container {
  justify-content: start | end | center | stretch | space-around | space-between | space-evenly;	
}

```
<a href='https://www.w3schools.com/css/tryit.asp?filename=trycss_grid_justify-content_space-between'>justify content</a>













## Align-content
 ('https://www.w3schools.com/css/tryit.asp?filename=trycss_grid_align-content_space-evenly')
 
This property aligns the grid along the block (column) axis.
ie along the vertical direction

```css
.container {
  align-content: start | end | center | stretch | space-around | space-between | space-evenly;	
}
```
```html
 <div class="background"> 
  
  <div class="container1 container">
    <div class="align_item">center</div>
    <div class="align_item">center</div>
    <div class="align_item">center</div>
    <div class="align_item">center</div>
  </div>

  <div class="container2 container">
    <div class="align_item">end</div>
    <div class="align_item">end</div>
    <div class="align_item">end</div>
    <div class="align_item">end</div>
  </div>

  <div class="container3 container">
    <div class="align_item">stretch</div>
    <div class="align_item">stretch</div>
    <div class="align_item">stretch</div>
    <div class="align_item">stretch</div>
  </div>

  <div class="container4 container">
    <div class="align_item">space-between  </div>
    <div class="align_item">space-between</div>
    <div class="align_item">space-between</div>
    <div class="align_item">space-between</div>
  </div>

  <div class="container5 container">
    <div class="align_item">start</div>
    <div class="align_item">start</div>
    <div class="align_item">start</div>
    <div class="align_item">start</div>
  </div>

  <div class="container6 container">
    <div class="align_item">space-around</div>
    <div class="align_item">space-around</div>
    <div class="align_item">space-around</div>
    <div class="align_item">space-around</div>
  </div>

  </div>
```

```css
.container1 {
  grid-area: section1;
  align-content: center
}
.container2 {
  grid-area: section2;
  align-content: end; 
}
.container3 {
  grid-area: section3;
  align-content: stretch
}
.container4 {
  grid-area: section4;
  align-content: space-between;
}
.container5 {
  grid-area: section5;
  align-content: start;
}
.container6 {
  grid-area: section6;
  align-content:  space-around;
}
```
<img src="./img/align-content-grid.png.png" alt="">



## place-content
 place-content sets both the align-content and justify-content properties in a single declaration.
 ```css
  place-content: <align-content> / <justify-content>
 ```
  -  If the second value is omitted, the first value is assigned to both properties.

```html
    <div class="background"> 
  
  <div class="container1 container">
    <div class="align_item">center center</div>
    <div class="align_item">center center</div>
    <div class="align_item">center center</div>
    <div class="align_item">center center</div>
  </div>

  <div class="container2 container">
    <div class="align_item">center end</div>
    <div class="align_item">center end</div>
    <div class="align_item">center end</div>
    <div class="align_item">center end</div>
  </div>

  <div class="container3 container">
    <div class="align_item">center stretch</div>
    <div class="align_item">center stretch</div>
    <div class="align_item">center stretch</div>
    <div class="align_item">center stretch</div>
  </div>

  <div class="container4 container">
    <div class="align_item">stretch center</div>
    <div class="align_item">stretch center</div>
    <div class="align_item">stretch center</div>
    <div class="align_item">stretch center</div>
  </div>

  <div class="container5 container">
    <div class="align_item"> stretch end"</div>
    <div class="align_item"> stretch end"</div>
    <div class="align_item"> stretch end"</div>
    <div class="align_item"> stretch end"</div>
  </div>

  <div class="container6 container">
    <div class="align_item">stretch start</div>
    <div class="align_item">stretch start</div>
    <div class="align_item">stretch start</div>
    <div class="align_item">stretch start</div>
  </div>

  <div class="container7 container">
    <div class="align_item"> start start</div>
    <div class="align_item"> start start</div>
    <div class="align_item"> start start</div>
    <div class="align_item"> start start</div>
  </div>

  <div class="container8 container">
    <div class="align_item">end center</div>
    <div class="align_item">end center</div>
    <div class="align_item">end center</div>
    <div class="align_item">end center</div>
  </div>

  </div>
```
```css
*, *::before, *::after  {
    margin: 0;
    line-height: 1.7
  } 
  .container > div {
    background-color: rgb(0, 255, 21);
    border: 1px solid green
  }
  .container1 {
    grid-area: section1;
    place-content: center center;
  }
  .container2 {
    grid-area: section2;
    place-content: center end
    
  }
  .container3 {
    grid-area: section3;
    place-content: center stretch
    
  }
  .container4 {
    grid-area: section4;
    place-content: stretch center
  }
  .container5 {
    grid-area: section5;
    place-content: stretch end
  }
  .container6 {
    grid-area: section6;
    place-content: stretch start
  }
  .container7 {
    grid-area: section7;
    place-content: start start
  }
  .container8 {
    grid-area: section8;
    place-content: end center
  }
  
  .background {
    display: grid;
    grid-template: 
     "section1 section2 section3 " 33vh
     "section4 section5 section6  " 33vh
     "section7 section8 .........  " 33vh
     / 433px 433px 433px ;
  }
  .background * {
    border: 1px solid red;
  }
  .container {
    display: grid;
  }
 ```
<img src="./img/placeContent.png" alt="">

# grid-auto-columns
Before talking abot this, est look at the following
- explicit grids
- Auto-filling tracks
  - auto fill
  - auto fit
- implicit grids
## A. Explicit Grids
We can define a fixed number of lines and tracks that form a grid by using the properties grid-template-rows, grid-template-columns, and grid-template-areas. This manually defined grid is called the explicit grid.

When we manually define a particular number of lines horizontally and vertically to form a grid, it is known as explicit grid system
For example
```css
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 100px 100px;
  grid-gap: 20px;
}
```
Here, we are manually saying we want 4 uniform columns and two 100px rows
## B. Auto-filling tracks

### Auto-fill
The auto-fill keyword creates as many tracks as fit into the grid container without causing the grid to overflow it.That is to say
```html
 <div class="container">
        <div class="item"> repeat(auto-fill , 500px)</div>
        <div class="item"> repeat(auto-fill , 500px)</div>
        <div class="item"> repeat(auto-fill , 500px)</div>
        <div class="item"> repeat(auto-fill , 500px)</div>
        <div class="item"> repeat(auto-fill , 500px)</div>
        <div class="item"> repeat(auto-fill , 500px)</div>
    </div>
    <div class="container2">
        <div class="item2">repeat(3 , 500px);</div>
        <div class="item2">repeat(3 , 500px);</div>
        <div class="item2">repeat(3 , 500px);</div>
        <div class="item2">repeat(3 , 500px);</div>
        <div class="item2">repeat(3 , 500px);</div>
        <div class="item2">repeat(3 , 500px);</div>
    </div>
```
```css
 .container {
            display: grid;
            grid-template-columns: repeat(auto-fill , 500px);
            grid-gap: 10px
        }
  .item {
      background-color: crimson;
      color: aliceblue
  }
  .container2 {
      display: grid;
      grid-template-columns: repeat(3 , 500px);
      grid-gap: 10px
  }
  .item2 {
      background-color: rgb(67, 220, 20);
      color: aliceblue
  }
```

<img src="./img/autofill.png" alt=""> 
From the diagram, the pink divs are auto arranged. Once the first row if filled, it enter the next row. But inthe green divs,because hey are not auto fill, they overflow the grid container n an attempt to maintain its assigned width.

- Note:
  - that repeat(auto-fill, 1fr); will only create one track because a single track with a width of 1fr already fills the whole grid container.

### Auto-fit
FITS the CURRENTLY AVAILABLE columns into the space by expanding them so that they take up any available space. The browser does that after FILLING that extra space with extra columns (as with auto-fill ) and then collapsing the empty ones.

### _Difference between auto-fil and auto-fit_
1.  The auto-fit keyword behaves the same way as auto-fill, except that after grid item placement it will only create as many tracks as needed and any empty repeated track collapses. 
2.  The difference between auto-fill and auto-fit for sizing columns is only noticeable when the row is wide enough to fit more columns in it.
```html
<div class="auto-fill">
    <div class="item">repeat(auto-fill , minmax(150px, 1fr))</div>
    <div class="item">repeat(auto-fill , minmax(150px, 1fr))</div>
    <div class="item">repeat(auto-fill , minmax(150px, 1fr))</div>
    <div class="item">repeat(auto-fill , minmax(150px, 1fr))</div>
    <div class="item">repeat(auto-fill , minmax(150px, 1fr))</div>
    <div class="item">repeat(auto-fill , minmax(150px, 1fr))</div>
</div>
<div class="auto-fit">
    <div class="item2">repeat(auto-fit , minmax(150px, 1fr))</div>
    <div class="item2">repeat(auto-fit , minmax(150px, 1fr))</div>
    <div class="item2">repeat(auto-fit , minmax(150px, 1fr))</div>
    <div class="item2">repeat(auto-fit , minmax(150px, 1fr))</div>
    <div class="item2">repeat(auto-fit , minmax(150px, 1fr))</div>
    <div class="item2">repeat(auto-fit , minmax(150px, 1fr))</div>
</div>
```

```css
.auto-fill {
    display: grid;
    grid-template-columns: repeat(auto-fill , minmax(150px, 1fr));
    grid-gap: 10px
}
.item {
    background-color: crimson;
    color: aliceblue;
    padding: 10px;
}
.auto-fit {
    display: grid;
    grid-template-columns: repeat(auto-fit , minmax(150px, 1fr));
    grid-gap: 10px
}
.item2 {
    padding: 10px;
    background-color: rgb(67, 220, 20);
    color: aliceblue
}
```

<video src="./video/autoFill-autoFit.gif"></video>
## C. Implicit grid
If there are more grid items than cells in the grid or when a grid item is placed outside of the explicit grid, the grid container automatically generates grid tracks by adding grid lines to the grid. The explicit grid together with these additional implicit tracks and lines forms the so called implicit grid.

# grid-auto-columns
- The grid-auto-rows and grid-auto-columns properties give us control over the size of implicit tracks. 

```css
grid-auto-columns: auto|max-content|min-content|length;
```
Values
### 1.  length
Could be in px,but not a negative value
```html
 <div class="length container">
  <div class="item">length</div>
  <div class="item">length</div>
  <div class="item">length</div>
  <div class="item">length</div>
</div>
```
```css
.length {
      grid-auto-columns: 100px;
  }
```
### 2.  percentage
Should not be  negative, abd an undefined parent width size has its percentage value as auto
```html
 <div class="percentage container">
  <div class="item">percentage</div>
  <div class="item">percentage</div>
  <div class="item">percentage</div>
  <div class="item">percentage</div>
</div>
```
```css
 .percentage{
    grid-auto-columns: 30% 
}
```
### 3.  flex
fr simplifies the flex factor. Negative values are not allowed
```html
 <div class="flex container">
  <div class="item">flex</div>
  <div class="item">flex</div>
  <div class="item">flex</div>
  <div class="item">flex</div>
</div>
```
```css
.flex{
    grid-auto-columns: .8fr
}
```
### 4.  max-content
This just takes up the size of the element according to its content
```html
 <div class="max-content container">
  <div class="item">max-content</div>
  <div class="item">max-content</div>
  <div class="item">max-content</div>
  <div class="item">max-content</div>
</div>
```
```css
.max-content{
    grid-auto-columns: max-content
}
```
### 5.  min-content
This takes up the size of the element when the content is reduced to its minimum.
```html
 <div class="min-content container">
  <div class="item">min-content ok</div>
  <div class="item">min-content ok</div>
  <div class="item">min-content ok</div>
  <div class="item">min-content ok</div>
</div>
```
```css
 .min-content{
      grid-auto-columns: min-content
  }
```
### 6.  minmax(min, max)
This takes a range of values,min and max. It maintains the highest range down toits lowest
```html
 <div class="minmax container">
  <div class="item">minmax()</div>
  <div class="item">minmax()</div>
  <div class="item">minmax()</div>
  <div class="item">minmax()</div>
</div>
```
```css
.minmax{
  grid-auto-columns: minmax(20px, 250px) 
}
```
In this case, the size will be 250px. While shrinking the page, it keeps reducing tillit gets to 20px and stops.
### 7.  fit-content(argument)
Represents the formula min(max-content, max(auto, argument)), which is calculated similar to auto (i.e. minmax(auto, max-content)), except that the track size is clamped at argument if it is greater than the auto minimum.
```css
 .fit-content{
  grid-auto-columns: fit-content(400px)
}
```
### 8.  auto
This takes up the full width of the element
```html
<div class="auto container">
    <div class="item">auto</div>
    <div class="item">auto</div>
    <div class="item">auto</div>
    <div class="item">auto</div>
</div>
```
```css
.auto {
  grid-auto-columns: auto;
  border: 1px solid black;
}
```

<img src="./img/gridAutoColumn.png" alt=""> 

# grid-auto-rows
The grid-auto-rows CSS property specifies the size of an implicitly-created grid row track.

# grid-auto-flow
If you have grid items that you don't explicitly place on the grid, the auto-placement algorithm kicks in to automatically place the items. This property controls how the auto-placement algorithm works.

What I mean is that when you have a grid item that you don't directly place in a grid container, grid-auto-flow allows auto-placement to place the item.
## Values
- grid-auto-flow: row;
- grid-auto-flow: column;
- grid-auto-flow: dense;
- grid-auto-flow: row dense;
- grid-auto-flow: column dense;

## row
This tells the auto-placement algorithm to place the items, by filling each row in turn, adding new rows as necessary.
## columns
This tells the auto-placement algorithm to place the items, by filling each column in turn, adding new rows as necessary.

## dense
This uses a “dense” packing algorithm,  if it is omitted, a “sparse” algorithm is used, 
<img src='../../internship-lecture-materials-2019/ CSS (FLEXBOX, GRID)/assets/auto-flow.png'>

# grid
A shorthand for setting all of the following properties in a single declaration: `grid-template-rows`, `grid-template-columns`, `grid-template-areas`, `grid-auto-rows`, `grid-auto-columns`, and `grid-auto-flow `.

Code | Equivalent code
---------- | ------------
`.container {grid: 100px 300px / 3fr 1fr; }` | `.container {     grid-template-rows: 100px 300px; grid-template-columns: 3fr 1fr;}`
`.container { grid: auto-flow / 200px 1fr; }` |  `.container {    grid-auto-flow: row; grid-template-columns: 200px 1fr; }`
 Read up [more](https://css-tricks.com/snippets/css/complete-guide-grid/)

# Properties for the Children (Grid Items)
# grid-column-start _ grid-column-end _ grid-row-start _ grid-row-end
>**Note:**   float, display: inline-block, display: table-cell, vertical-align and column-* properties have no effect on a grid item. 
These properties of the grid-items determine where a grid-item will be positioned based on specific gridlines




















<!--
grid-auto-flow
grid
 -->


<!-- <div style='background-color: coral; color :black; display: grid; justify-items: center'>
  <h1>FORMULAR</h1>
  justify-content(flex) <_________________> justify-items(grid)

  align-content(flex) <___________________> align-item(grid)
</div> -->




















# Tips

<a herf="https://css-tricks.com/guide-svg-animations-smil/" style='text-ecoration: underline'> SVG animation </a>

<a href='https://hashnode.com/post/master-npm-in-under-10-minutes-or-get-your-money-back-cjqmak392001i7vs2ufdlvcqb'>Master npm in Under 10 Minutes or Get Your Money Back</a>



# TOC

[Chapter 2  GRID](#Chapter_1_GRID)
- [grid-template-columns](#grid-template-columns)
- [grid-template-rows](#grid-template-rows)
- [grid-template-areas](#grid-template-areas)
- [grid-template](#grid-template)
- [grid-column-gap](#grid-column-gap)
- [grid-row-gap](#grid-row-gap)
- [grid-gap](#grid-gap)
- [justify-items](#justify-items) 
- [align-items](#align-items)
- [place-items](#place-items)
- [justify-content](#justify-content)
- [align-content](#align-content)
- [place-content](#place-content)
- [grid-auto-columns](#grid-auto-columns)
  - [explicit grids](#explicit_grids)
    - [Auto-filling tracks](#Auto-filling_tracks)
    - [auto fill](#auto_fill)
    - [auto fit](#auto_fit)
  - [implicit grids](#implicit_grids)
- [grid-auto-rows](#grid-auto-rows)
- [grid-auto-flow](#grid-auto-flow)
- [grid](#grid)
- [grid-column-start](#grid-column-start)
- [grid-column-end](#grid-column-end)
- [grid-row-start](#grid-row-start)
- [grid-row-end](#grid-row-end)
- [grid-column](#grid-column)
- [grid-row](#grid-row)
- [grid-area](#grid-area)
- [justify-self](#justify-self)
- [align-self](#align-self)
- [place-self](#place-self)

[chapter 1 Flex Box]
- [display](#display)
- [flex-direction](#flex-direction)
- [flex-wrap](#flex-wrap)
- [flex-flow](#flex-flow)
- [justify-content](#justify-content)
- [align-items](#align-items)
- [align-content](#align-content)
- [order](#order)
- [flex-grow](#flex-grow)
- [flex-shrink](#flex-shrink)
- [flex-basis](#flex-basis)
- [flex](#flex)
- [align-self](#align-self)




