
# SVG Scalable Vector Graphics

## **The Anatomy of an SVG**


### The Viewport
The viewport is the visible area of the SVG image. An SVG image can logically be as wide and high as you want, but only a certain part of the image can be visible at a time. The area that is visible is called the viewport. 
 It creates a “port” through which you can “view” a section of an SVG.
>>  **The SVG viewport is like a porthole window whose size determines what you can see through it but it doesn’t define the size of whatever might be visible through that viewport. What’s on the other side could theoretically be any size at all.**

The viewport is set by adding `width` and `height` to the svg tag.
#### For example
```html
<svg width="150px" height="150px">
  <rect x='0' y='0' width='200px' height='100px' fill="red"></rect>
  <circle cx='50px' cy='120px' r='50px'></circle>
</svg>
```
```css
svg {
    background: yellow;
  }
 ```

![viewport](img/viewport.png) 

 From the image above, the the viewport is set to 150 by 150px.Therefore that will be the viscible part of the svg. What ever is contained inside remains the same but only the part that is contained within the 150 by 150 becomes viscible.
#### Example 2
```html
  <style>
      svg { background: green }
      rect { fill: blue   }
      circle {   fill: red }
      polygon {  fill: yellow  }
    </style>
  </head>

  <body>
    <svg x="0px" y="0px" width="250px" height="100px" viewBox="50 -10 100 50">
      <rect x="10" y="5" fill="white" stroke="black" width="90" height="90" />
      <circle fill="white" stroke="black" cx="170" cy="50" r="45" />
      <polygon fill="white" stroke="black" points="279,5 294,35 328,40 303,62
309,94 279,79 248,94 254,62 230,39 263,35" />
      <line fill="none" stroke="yellow" x1="410" y1="95" x2="440" y2="6" />
      <line fill="none" stroke="yellow" x1="360" y1="6" x2="360" y2="95" />
    </svg>

    <svg x="0px" y="0px" width="250px" height="100px" viewBox="0 0 500 200">
      <rect x="10" y="5" fill="white" stroke="black" width="90" height="90" />
      <circle fill="white" stroke="black" cx="170" cy="50" r="45" />
      <polygon fill="white" stroke="black" points="279,5 294,35 328,40 303,62
309,94 279,79 248,94 254,62 230,39 263,35" />
      <line fill="none" stroke="yellow" x1="410" y1="95" x2="440" y2="6" />
      <line fill="none" stroke="yellow" x1="360" y1="6" x2="360" y2="95" />
    </svg>
    <p>Paragraph</p>
```

![viewPort](img/svgViewPort.png)


### The ViewBox
Its is represented by a `viewbox` attribute with four numbers separated with a space and/or comma.
```html
 <svg width="150px" height="150px" viewbox='0 0 0 0'>
 </svg>
 ```
 `viewBox = <min-x> <min-y> <width> <height>`

The viewBox attribute defines the position and dimension, in user space, of an SVG viewport.
Taking it one after another, let me talk about what I mean by ... 
1. **Position**:       
This is determined from the first two numbers. It is sometimes seen as panning. From the code snippet above, the `viewbox` is et to `0 0 0 0`. The first two numbers which is `0 0` determines the position. Lets look at these examples
![viewbox](img/viewbox2.png)
![viewbox](img/viewbox3.png)
 While the height and width are maintained at 300 by 300, x and y are varied. Hope it is quite clear.

2. **Dimension**:   

This is determined by the last two numbers, ie the `width` and `height` parameters. If for instance, with `preserveAspectRatio` set to none, 
![viewbox](img/viewbox.png)
![viewbox dimension](img/viewboxMain.png)
From the images above, in the second image section 2, the `viewbox='0 0 800 400' ` is while the `viewport` is `width="200px" height="200px"`. 

When, the `width` which is `800` is made equivalent to the `viewport width` which is `200px`. That means it is in the ration of `800 : 200px` == ` 4:1 `. Each inch of the `viewport` is equivalent to `4inch` of the `viewbox`. The same applies to the height dimension.


Think of viewbox as a virtual approach to **crop an image**.


Whenever you use the viewBox attribute, remember to set your viewport dimensions and preserveAspectRatio too. If you don’t,  you’ll likely have an oversized graphic:

>> if the viewport is like a window, the viewBox is like a telescope.



### Preserving Aspect Ratio
First of all,  when we talk   about aspect ratio, you  must know that it is the ratio of the width and height of the viewbox and  viewport

![Preserving Aspect Ratio img](img/PAR.png)

![Preserving Aspect Ratio img](img/PAS_slice.png)

This topic is giving me headach, ma continue width  later. Moving on,


## Coordinate System
This is a bit different from the normal mathematical cordinates. By cordinate system, I mean the method of representing points in a space of given dimensions. For
#### Mathematical cordinate system
Along the horizontal axis, `x` increases while moving towards the right, and decreases whike moving towards the left. Then along the `vertical axis`, `y` increases while moving towards the top and decreases while moving downwards. 
#### SVG cordinate system
Along the `horizontal axis`, `x` increases while moving towards the right, and decreases whike moving towards the left. Then along the `vertical axis`, `y` decreases while moving towards the top and increases while moving downwards. 


## Coordinate System Units
If you do not specify any units inside the width and height attributes, the units are assumed to be pixels. That is, a width 500 means 500 pixels.

If you prefer to use different units than pixels, you can. Here is a list of the units you can use with the `<svg>` element: 

Unit| Description
---- | -------
em |	The default font size - usually the height of a character.
ex |	The height of the character x
px |	Pixels
pt |	Points (1 / 72 of an inch)
pc |	Picas (1 / 6 of an inch)
cm |	Centimeters
mm |	Millimeters
in |	Inches


## SVG g element
The SVG <g> element is used to group SVG shapes together. Once grouped you can style the whole group of shapes as if it was a single shape. 

For example
```html
 <svg width="200px" height="200px" viewbox='0 0 200 200' preserveAspectRatio ="none">
  <g>
    <rect x='0' y='0' width='200px' height='100px' fill="red"></rect>
    <circle cx='50px'  cy='150px' r='50px'></circle>
    <circle cx='150px'  cy='150px' r='50px'></circle>
  </g>
</svg>

```



![(g Styles)](./img/plain_svg.png)

### The Styling of g Elements 
When you style an `svg` element, the styles affects the children as a single element. Let style the example above and see the effect

![(g Styles)](./img/gStyles.png)

### Difference between styling a `g` element and a nested `svg` tag.
I have detailly designed an image that goes a long way to explaning the differences (well, i hope it does).

![(g element verses svg)](./img/g-VS-svg.png)

In section 1 from the above image, the contents are in a nested `svg` tags. The ` .group {transform: rotate(20deg) }` styles the `svg` tag directly housing the contents; `<rect></rect> <circle></circle> <circle></circle>`, while the cotents  are given a style of `.content { transform: rotate(-45deg) }`. 

Therefore, while the `svg` directly housing the contents   `rotates  20deg`; tilts downwards, the content from that position tilts upwards for `-45deg`.

The major difference between section 1 and 2 is that in section 1,  the contents are inclosed in an `svg` tag. This resulted to part of the contents not been visible since any content outside both  the inner and outer `svg` tag will not be seen . While in section 2, they are enclosed in a `g` tag, and will be visible.
Lets look at this image for btter clarification

![more-g element](./img/more-g.png)

For section 3 to section 6, it is either the contents or the parent container that is atyled.


## **Drawing Shapes**

## Svg `rect`  element
This is done with the `rect` keyword. There are really only 6 basic attributes that control the position and shape of the rectangle on screen here

```html
 <rect x='40' y='20'  width='150'  height='50px' ></rect>
 ```
 ![rect](./img/rect.png)

Dimensions | Meaning
------| ---------------
x  |    The x position of the top left corner of the rectangle.
y  |    The y position of the top left corner of the rectangle.
width|  The width of the rectangle
height | The height of the rectangle
rx  |   The x radius of the corners of the rectangle
ry |    The y radius of the corners of the rectangle 

## Svg circle element
This tag is used to create a circle, and it has only three attributes.
```html
<circle cx="25" cy="75" r="20"/>
```
attribute | meaning
--------|---------------
r  |  The radius of the circle.
cx |  The x position of the center of the circle.
cy |  The y position of the center of the circle.

**For exmple**
```html
<circle r='60' cy='110px' cx='100px'></circle>
```

![circle](./img/circle.png)

## Svg ellipse 
This more of the general form of a circle. Here you can size or determine the x-radius and the y-radius callled the semi major and minor axis.
```html
<ellipse cx="75" cy="75" rx="20" ry="5"/>
``` 

attribute | meaning
--------|---------------
rx  |   The x radius of the ellipse.
ry  |   The y radius of the ellipse.
cx  |   The x position of the center of the ellipse.
cy  |   The y position of the center of the ellipse. 

## Svg Line element
As the name applies, it is used to draw lines.
```html
<line x1="200" x2="150" y1="50" y2="150" stroke='pink'/>
```
![line](img/line.png)

attribute | meaning
--------|---------------
x1 |   The x position of point 1.
y1 |    The y position of point 1.
x2 |    The x position of point 2.
y2 |   The y position of point 2. 

## Polyline
This is used to create a group of connected lines. It has on attribute; the `points` which is a list of all the points seperated with a coma

attribute | meaning
--------|---------------
points | Its a list of points, seperated by a comma. Each point must contain two numbers, an x coordinate and a y coordinate. So the list (0,0), (1,1) and (2,2) could be written: "0 0, 1 1, 2 2".

```html
  <stye>
      polygon {
        fill: black
      }
  </stye>
 <polyline points="60 150, 150 150, 200 50, 130 30, 50 50"/>
 ```
 ![polyline](img/polyline.png)

 ## Polygon
 Polygons are a lot like polylines in that they're composed of straight line segments connecting a list of points.
 ```html
  <polygon points="50 60, 100 100, 50 140, 50 60, 150 140, 150 60, 100 100"/>
  ```
attribute | meaning
--------|---------------
  points | It is a list of points sepereated with commas. Each point must contain two numbers, an x coordinate and a y coordinate. So the list (0,0), (1,1) and (2,2) could be written: "0 0, 1 1, 2 2". The drawing then closes the path, so a final straight line would be drawn from (2,2) to (0,0).
 ![polygon](img/polygon.png)

>>**The path automatically returns to the first point for you at the end, creating a closed shape**. 

For example
```html
 <polygon points="50 60, 100 100, 50 140, 50 60, 150 140, 150 60"/>
 ```
 ![joinedPolygon](img/joinPolygon.png)


 ## Path
 