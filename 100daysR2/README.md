


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

