# **Drawing Shapes**

## Svg Line element

As the name applies, it is used to draw lines.

```html
<line x1="200" x2="150" y1="50" y2="150" stroke="pink" />
```

![line](img/line.png)

| attribute | meaning                    |
| --------- | -------------------------- |
| x1        | The x position of point 1. |
| y1        | The y position of point 1. |
| x2        | The x position of point 2. |
| y2        | The y position of point 2. |

## Polyline

This is used to create a group of connected lines. It has on attribute; the `points` which is a list of all the points seperated with a coma

| attribute | meaning                                                                                                                                                                                    |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| points    | Its a list of points, seperated by a comma. Each point must contain two numbers, an x coordinate and a y coordinate. So the list (0,0), (1,1) and (2,2) could be written: "0 0, 1 1, 2 2". |

```html
<stye>
  polygon { fill: black }
</stye>
<polyline points="60 150, 150 150, 200 50, 130 30, 50 50" />
```

![polyline](img/polyline.png)

## Polygon

Polygons are a lot like polylines in that they're composed of straight line segments connecting a list of points.

```html
<polygon points="50 60, 100 100, 50 140, 50 60, 150 140, 150 60, 100 100" />
```

| attribute | meaning                                                                                                                                                                                                                                                                                      |
| --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| points    | It is a list of points sepereated with commas. Each point must contain two numbers, an x coordinate and a y coordinate. So the list (0,0), (1,1) and (2,2) could be written: "0 0, 1 1, 2 2". The drawing then closes the path, so a final straight line would be drawn from (2,2) to (0,0). |

![polygon](img/polygon.png)

> > **The path automatically returns to the first point for you at the end, creating a closed shape**.

For example

```html
<polygon points="50 60, 100 100, 50 140, 50 60, 150 140, 150 60" />
```

![joinedPolygon](img/joinPolygon.png)

# Path

It is used to create lines, curves, arcs and more. Path SVG can be executed by using the path tag.The `<path>`element in SVG is the ultimate drawing element. It can draw anything! The path element takes a single attribute to describe what it draws: the `` attribute.
M x,y | Move to the absolute coordinates x,y

| Serial number        | attribute                             | meaning                                                                                                                                                                                                                                                                                   |
| -------------------- | ------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **straight lines**   |                                       |
| ******\_\_\_\_****** | ******\_\_\_\_******                  | ************************************\_\_\_\_************************************                                                                                                                                                                                                          |
| 1                    | M (x,y)                               | Move to the absolute coordinates x,y                                                                                                                                                                                                                                                      |
| 2                    | m (x,y)                               | Move to the right x and down y (or left and up if negative values) (The "Move To" command appears at the beginning of paths to specify where the drawing should start)                                                                                                                    |
| ******\_\_\_\_****** | ******\_\_\_\_******                  | ************************************\_\_\_\_************************************                                                                                                                                                                                                          |
| 3                    | L (x,y)                               | Draw a straight line to the absolute coordinates x,y                                                                                                                                                                                                                                      |
| 4                    | l (x,y )                              | Draw a straight line to a point that is relatively right x and down y (or left and up if negative values)                                                                                                                                                                                 |
| ******\_\_\_\_****** | ******\_\_\_\_******                  | ************************************\_\_\_\_************************************                                                                                                                                                                                                          |
| 5                    | H (x)                                 | Draw a line horizontally to the exact coordinate x                                                                                                                                                                                                                                        |
| 6                    | h (x)                                 | Draw a line horizontally relatively to the right x (or to the left if a negative value)                                                                                                                                                                                                   |
| ******\_\_\_\_****** | ******\_\_\_\_******                  | ************************************\_\_\_\_************************************                                                                                                                                                                                                          |
| 7                    | V( y)                                 | Draw a line vertically to the exact coordinate y                                                                                                                                                                                                                                          |
| 8                    | v( y)                                 | Draw a line vertically relatively down y (or up if a negative value)                                                                                                                                                                                                                      |
|                      |                                       |
| 9                    | Z (or z)                              | Draw a straight line back to the start of the path                                                                                                                                                                                                                                        |
| **curve lines**      |                                       |
| ******\_\_\_\_****** | ******\_\_\_\_******                  | ************************************\_\_\_\_************************************                                                                                                                                                                                                          |
| 10                   | C ( cX1,cY1 cX2,cY2 eX,eY)            | Draw a bezier curve based on two bezier control points and end at specified coordinates                                                                                                                                                                                                   |
| 11                   | c                                     | Same with all relative values                                                                                                                                                                                                                                                             |
| ******\_\_\_\_****** | ******\_\_\_\_******                  | ************************************\_\_\_\_************************************                                                                                                                                                                                                          |
| 12                   | S (cX2,cY2 eX,eY)                     | Basically a C command that assumes the first bezier control point is a reflection of the last bezier point used in the previous S or C command                                                                                                                                            |
| 13                   | s                                     | Same with all relative values                                                                                                                                                                                                                                                             |
| ******\_\_\_\_****** | ******\_\_\_\_******                  | ************************************\_\_\_\_************************************                                                                                                                                                                                                          |
| 14                   | Q (cX,cY eX,eY)                       | Draw a bezier curve based a single bezier control point and end at specified coordinates                                                                                                                                                                                                  |
| 15                   | q                                     | Same with all relative values                                                                                                                                                                                                                                                             |
| ******\_\_\_\_****** | ******\_\_\_\_******                  | ************************************\_\_\_\_************************************                                                                                                                                                                                                          |
| 16                   | T (eX,eY)                             | Basically a Q command that assumes the first bezier control point is a reflection of the last bezier point used in the previous Q or T command                                                                                                                                            |
| 17                   | t                                     | Same with all relative values                                                                                                                                                                                                                                                             |
| ******\_\_\_\_****** | ******\_\_\_\_******                  | ************************************\_\_\_\_************************************                                                                                                                                                                                                          |
| 18                   | A (rX,rY rotation, arc, sweep, eX,eY) | Draw an arc that is based on the curve an oval makes. First define the width and height of the oval. Then the rotation of the oval. Along with the end point, this makes two possible ovals. So the arc and sweep are either 0 or 1 and determine which oval and which path it will take. |
| 19                   | a                                     | Same with relative values for eX,eY                                                                                                                                                                                                                                                       |

> **Uppercase letters mean the position will absolutely positioned while lowercase letters mean relative positioning.**

For instance

    M 100,100 means "Pick up the pen and move it to the exact coordinates 100,100" ( this is absolute positioning)

    m 100,100 means "Move the Pen 100 down and 100 right from wherever you currently are." (this is relative positioning)

## Straight lines

Lets see an example

```html
<path
  d="M 100 20 v 50 h -25 v 25 h 25 v 50 h 25 v -50 h 25 v -25 h -25 v -50 z"
/>
<path
  d="M 300 20  l 0 50 l -25 0 l 0 25 l 25 0 l 0 50 l 25 0 l 0 -50 l 25 0 l 0 -25 l -25 0 l 0 -50 Z"
/>
```

![cross](img/cross.png)

The above same figures was created using different commands to illustrate the work of each command.

![curved line](img/c-curve.png)

## Curve lines

![cubic](img/cubic.png)
![cubic](img/cubic1.png)

We will be taking this part on after another for easy clarification

The first one is

### Cubic bezier curve

Cubic bezier curve syntax starts with `c` or `C` character inside the `path` attribute;

`<path d='M150 50 C250 100, 50 200, 150 250' />`,

or

`<path d='M150 50 c100 50, -100 150, 0 200' />`.

The major difference between them is in the `c` character. One is in small case and the other, big case. But, both will produce the same result.

- Relative path

  The `c` character means relative path. `c100 50, -100 150, 0 200`. Here,

  - The first two numbers which are `100 50` is the `x1y1` value and the first control point.
  - The next two numbers `-100 150` is the `x2y2` value and the second control point.
  - While the last two numbers `0 200` is the end of the bezier curve.

  **How it works**

  - The curve starts at `M150 50`, then the first control point sets in. The curve moves `100px` in the `x` direction and `50px` in the `y` direction from the starting point; `M150 50`.

  - Next, the curve moves `-100px` in the `x` direction which is to the left, and `150px` in the `y` direction all from the starting point.

  - Finally. the curve ends at `0px` from the starting point and `200px` in the `y` direction from the starting point too.

- Absolute path

  The `C` character means relative path. `C250 100, 50 200, 150 250`. Here,

  - the first two numbers which are `250 100` is the `x1y1` value and the first control point.
  - The next two numbers `50 200` is the `x2y2` value and the second control point.
  - While the last two numbers `150 250` is the end of the bezier curve.

  **How it works**

  - The curve starts at `M150 50`, then the first control point sets in. The curve moves to point `250px` on the `x` axis and `50px` in the `y` axis.

  - Next, the curve moves to point`50px` on the `x` axis , and `200px` in the `y` axis .

  - Finally. the curve ends at point `150px` on the `x` axis and `250px` on the `y` axis.

### **Note**

You can move the control points to increase or decrease the curve. It is not the exact point the control points stops at that the curve edge will stop.

Here is an example

```html
<g>
  <svg
    width="400px"
    height="400px"
    viewbox="0 0 400 400"
    preserveAspectRatio="none"
  >
    <path d="M150 50  C250 100, 50 200, 150 250" />
  </svg>
  <svg
    width="400px"
    height="400px"
    viewbox="0 0 400 400"
    preserveAspectRatio="none"
  >
    <path d="M150 50  c100 50, -100 150, 0 200" />
  </svg>
</g>
```

![cubic](img/cubi-biezer-curve.png)

### Smooth Cubic bezier curve

![cubic](img/smooth_cubic_bezier.png)

This is creates a more smoother curve than `cubic bezier`. It works width the `c` or `C` command just like the `cubic bezier`, but together with another command; the `S` or `s` command.

The **`s` or `S`** command comes after the **`c` or `C`** command. While the **`c` or `C`** command has two control points, the **`s` or `S`** command, has one. The second control point from the **`c` or `C`** command, extends to form a control point for the **`s` or `S`** command. This together with the control point from the **`s`s or `S`** command, gives the **`s` or `S`** command two control points in total. One from the **`c` or `C`**, and the other from its self.

For example

Lets look at Smooth Cubic bezier curve for relative path.

```html
<svg
  width="700px"
  height="700px"
  viewbox="0 0 400 400"
  preserveAspectRatio="none"
>
  <path d="M100 50  c100 50, 100 100,  0 150 s -100 100 , 0 150" />
</svg>
```

#### Relative path

- About Relative path  
  The `c` character means relative path. `c100 50, 100 100, 0 150 s -100 100 , 0 150`. Here,

  - The first two numbers which are `100 50` is the `x1y1` value and the first control point.
  - The next two numbers `100 100` is the `x2y2` value and the second control point.
  - The last two numbers before the `s`; `0 150` is the end of the first half of the bezier curve.

  **Then the `s` sets in.**

  - The first two numbers after the `s`; `-100 100` is the second control point for the `s` command.

  **Note**

  - The first control point for the `s` command is the end point of the second control point of the `c` command which is point **E**.
  - While the second control point of the `s` command is point **F** `-100 100`.

  **How it works**

  - The curve starts at `'M100 50`, then moves towards the first control point which is at `100px` in the `x` direction and `50px` in the `y` direction. All measurement taken relative to the starting point; `M`.
  - Next, the curve moves towards the second control point which is at `100px` in the `x` direction, and `100px` in the `y` direction . All measurement taken relative to the starting point `M`.
  - Next. the curve ends at `0px` in the `x` direction and `150px` in the `y` direction temporarily .All measurement taken relative to the starting point `M`.
  - Next, the curve automatically moves towards point **F** which as I said earlier, the first control point for the `s` command. **Note**: In this case, measurement is taken relative to the end point for `c` command; which is at point **D** (`0 150`).
  - Next, the curve moves towards the second control point of the `s` command which is point **F**, `-100px` in the `x` direction and `100px` in the `y` direction. **Note**: In this case, measurement is taken relative to the end point of `c` command; which is point **D** ( `0 150`).
  - Finally, the curve end at point **G** `0px` in the `x` direction and `150px` in the `y` direction. **Note**: In this case also, measurement is taken relative to end point of curve `c` command; which is at point **D** (`0 150`).

  **In General,**

  - All point in-between `c` and `s` which are **B**, **C** and **D** (`c 100 50, 100 100, 0 150 s ...`) are all taken relative to point **M** (`100 50`).
  - While all points after `s` which are **E**, **F** and **G** (`...s -100 100 , 0 150`) are taken relative to the last point of the `c` command which is **D** (`0 150`).

Smooth Cubic bezier curve for absolute path.

#### Absolute path

```html
<svg
  width="700px"
  height="700px"
  viewbox="0 0 400 400"
  preserveAspectRatio="none"
>
  <path d="M100 50  C200 100, 200 150, 100 200 S 0 300, 100 350" />
</svg>
```

- About Absolute path  
  The `C` character means absolute path. `C200 100, 200 150, 100 200 S 0 300, 100 350'`. Here,

  - The first two numbers which are `200 100` is the `x1y1` value and the first control point.
  - The next two numbers `200 150` is the `x2y2` value and the second control point.
  - The last two numbers before the `s`; `100 200` is the end of the first half of the bezier curve.

  **How it works**

  - The curve starts at `'M100 50`, then moves towards the first control point which is at point **B** `200px` in the `x` direction and `150px` in the `y` direction. All measurement are taken from the origin ; point `0 0` (absolute).
  - Next, the curve moves towards the second control point which is at point **C** `200px` in the `x` direction, and `150px` in the `y` direction . All measurement are taken from the origin; point `0 0` (absolute).
  - Next. the curve ends at point **D** `100px` in the `x` direction and `200px` in the `y` direction temporarily . All measurement are taken from the origin; point `0 0` (absolute).
  - Next, the curve automatically moves towards point F which as I said earlier, the first control point for the `s` command. All measurement are taken from the origin ; point `0 0` (absolute).
  - Next, the curve moves towards the second control point of the `s` command which is point **F**, `0px` in the `x` direction and `300px` in the `y` direction. All measurement are taken from the origin ; point `0 0` (absolute).
  - Finally, the curve end at point **G** `100px` in the `x` direction and `350px` in the `y` direction. All measurement are taken from the origin ; point `0 0` (absolute).

### Quadratic Bézier Curve Commands

This creates a quadratic curve. It uses the `q` or `Q` command. Unlike the `cubic bezier curve`, `Quadratic Bézier Curve` hava just a single cntrol point. Let takes a look at this image

![Quadratic Bézier Curve](./img/Quadratic_Bézier_Curve2.png)

There are four images there. In this section, I will be taking about the first and the last images. These two images are created using the `Q` and `q` commands. Starting with the first one.

#### Absolute path

```html
<svg
  width="700px"
  height="700px"
  viewbox="0 0 400 400"
  preserveAspectRatio="none"
>
  <path d="M100 50 Q 200 100, 100 150" />
</svg>
```

- About Absolute path  
  The `Q` character represents absolute path. `Q 200 100, 100 150'`. Here,

  - The first two numbers which are `200 100` is the `x1 y1` value and the only control point.
  - The last two numbers `100 150` are the `dx dy` values and the end of the curve.

  **How it works**

  - The curve starts at point **A** `'M100 50`, then moves towards the control point which is at point **B** `200px` in the `x` direction and `100px` in the `y` direction. All measurement are taken from the origin ; point `0 0` (absolute).
  - Finally, the curve ends at point **C** `100px` in the `x` direction and `150px` in the `y` direction. All measurement are taken from the origin ; point `0 0` (absolute).

For relative path, we have

```html
<svg
  width="700px"
  height="700px"
  viewbox="0 0 400 400"
  preserveAspectRatio="none"
>
  <path d="M250 50 q 100 50,  0 100   " />
</svg>
```

#### Relative path

- About Relative path  
  The `q` character means relative path. `q 100 50, 0 100`. Here,

  - The first two numbers which are `100 50` is the `x1 y1` value and the only control point.
  - The next two numbers `100 100` is the `x2 y2` value and end of the curve.

  **How it works**

  - The curve starts at point **A** `'M100 50`, then moves towards the control point which is at point **B** `100px` in the `x` direction and `50px` in the `y` direction. **Note**: In this case , measurement is taken relative to point **A** which is at (`100 50`).
  - Finally, the curve ends at point **C** `0px` in the `x` direction and `100px` in the `y` direction. **Note**: In this case also, measurement is taken relative to point **A** (`100 50`).

### Smoother Quadratic Bézier Curve Commands

This makes the`quadratic bezier curve` smoother just like we have `Smooth Cubic bezier curve` makes `Cubic bezier curve` smoother.

Adding some lines accross them for more explanation,

![Quadratic Bézier Curve](./img/Quadratic_Bézier_Curve.png)

### Arcs

Will have grt back to this concept later.

## Fills and Strokes

1. **fill**
   - sets the color inside the object and
2. **stroke-dasharray**
   - It takes a series of comma-separated numbers as its argument.
3. **stroke-dashoffset**

   - specifies where to start a dasharray on a line.
     - Vales: numeric value or percentage (em or px is not required) Percentage is relative to the percent of the current viewport.

4. **stroke-linecap**
   - values
     - butt
     - square
     - round
5. **stroke-width**
6. **fill-opacity**
   - The fill-opacity specifies the opacity of the fill
7. **stroke-opacity**
   - stroke-opacity attributes, specifies the opacity of the stroke
8. **stroke-linejoin**
   - values
     - miter
     - round
     - bevel
     - crop
     - arcs
9. **fill-rule**
   - specifies how to color in shapes that overlap themselves
   - Value
     - nonzero
     - evenodd
10. **stroke-miterlimit**
    - determines if a stroke should draw miters

### `fill` and `stroke`

`fill` sets the color inside the object and `stroke` sets the color of the line drawn around the object.

![Svg_fill_and_stroke](./img/Svg_fill_and_stroke.png)

```html
<style>
  svg {
    background: yellow;
  }

  circle {
    fill: red;
    stroke: blue
  }
</style>

 <svg width="700px" height="700px" viewbox='0 0 350 350' preserveAspectRatio="none">
   <circle cx='200' cy='200' r='100px'>
     </svg>
```

### `fill-opacity`

This reduces the opaque nature of an svg. `i` sets it to perfect opaque, while `0` sets it to completely transparent. . `.5` makes it a little opaque and a little transparent.

For example,

![Svg_fill_opacity](./img/fill_opacity.png).

```hhtl
<g>
  <svg width="700px" height="700px" viewbox='0 0 350 350' preserveAspectRatio="none">
    <circle cx='200' cy='200' r='100px' fill-opacity=.5 fill: 'red'>
  </svg>
</g>
<g>
  <svg width="700px" height="700px" viewbox='0 0 350 350' preserveAspectRatio="none">
    <circle cx='200' cy='200' r='100px' fill-opacity=1 fill: 'red'>
  </svg>
</g>
```

### **`stroke-dasharray`**

This has effect on on `<altGlyph>, <circle>, <ellipse>, <path>, <line>, <polygon>, <polyline>, <rect>, <text>, <textPath>, <tref>,` and `<tspan>`

```html
<style>
  circle {
      stroke: blue;
      stroke-width: 5px;
    }
    .first {
      fill: red;
      stroke-dasharray: 20%
    }
    .sec {
      stroke-dasharray: 50px 20 5 30;
      fill: purple
    }
    .third {
      fill: pink;
      stroke-dasharray: 20 1 5
    }
    .fourth {
      fill: orange;
      stroke-dasharray: 200px
    }
  </style>
<body>
  <g>
    <svg width="400px" height="400px" viewbox='0 0 350 350' preserveAspectRatio="none">
      <circle cx='200' cy='200' r='100px' class="first">
    </svg>
  </g>
  <g>
    <svg width="400px" height="400px" viewbox='0 0 350 350' preserveAspectRatio="none">
      <circle cx='200' cy='200' r='100px'class="sec">
    </svg>
  </g>
  <g>
    <svg width="400px" height="400px" viewbox='0 0 350 350' preserveAspectRatio="none">
      <circle cx='200' cy='200' r='100px'class="third">
    </svg>
  </g>
  <g>
    <svg width="400px" height="400px" viewbox='0 0 350 350' preserveAspectRatio="none">
      <circle cx='200' cy='200' r='100px'class="fourth">
    </svg>
  </g>
</body>
```

The `stroke-dasharray` property in CSS is for creating dashes in the stroke of SVG shapes. The higher the number, the more space in between dashes in the stroke. tHe svg image must have a stroke attribute for it to work.
![SVG-stroke-dasharray](./img/SVG-stroke-dasharray.png).

### **`stroke-dashoffset`**'

The stroke-dashoffset is used to set how far into dash pattern to start the pattern. That way you can start the dashing from e.g. halfway into the pattern, and then repeat the pattern from there [jenkov.com](http://tutorials.jenkov.com/svg/stroke.html#stroke-dasharray-stroke-dashoffset)

![SVG-DASHOFFSET.png](./img/SVG-DASHOFFSET.png).

Adding a bit of animation to the code above, we have

```html
<style>

    .first {
      fill: red;
      stroke-dasharray: 0;
      animation: dashes 5s linear infinite;
    }

    .sec {
      stroke-dasharray: 200px;
      fill: purple;
      animation: sec 5s linear infinite;
    }

    .third {
      fill: pink;
      stroke-dasharray: 200px;
      animation: dashes 5s linear infinite;
    }
    @keyframes sec {
      from {
        stroke-dashoffset: 0
      }

      to {
        stroke-dashoffset: 1000
      }
    }

    @keyframes dashes {
      from {
        stroke-dashoffset: 0
      }

      to {
        stroke-dashoffset: 100
      }
    }
</style>

  <g>
    <svg width="400px" height="400px" viewbox='0 0 350 350' preserveAspectRatio="none">
      <circle cx='200' cy='200' r='100px' class="first">
    </svg>
  </g>
  <g>
    <svg width="400px" height="400px" viewbox='0 0 350 350' preserveAspectRatio="none">
      <circle cx='200' cy='200' r='100px' class="sec">
    </svg>
  </g>
  <g>
    <svg width="400px" height="400px" viewbox='0 0 350 350' preserveAspectRatio="none">
      <circle cx='200' cy='200' r='100px' class="third">
    </svg>
  </g>
```

![SVG-DASHOFFSET animation](./img/SVG-STROKE-DASHARRAY-STROKE-DASHOFFSET.gif).

The white accross the screen shows the center of the circles. It helps show when the animation starts and ends.

### **`stroke-linecap`**

stroke-linecap determines how an svg line will look like. If you add stroke-width, how will the edges of the stroke width look like.

It has three values, `butt`, `square`, and `round`. Both `round` and `square` adds a little lenght to the line, while `butt` does not.

The edges of `butt` and `square` are the same; 90deg edges, while `round` has rounded edges.

![SVG- stroke-linecap](./img/SVG-stroke-linecap.png).

### **stroke-linejoin**

The stroke-linejoin CSS property defines how the join between two lines in a shape is rendered

### **stroke-miterlimit**

The stroke-miterlimit CSS propety is used together with the stroke-linejoin CSS property. If stroke-linejoin is set to miter, then the stroke-miterlimit can be used to limit how far between the point where the two lines meet, that the line join (corner) extends.

Read this one here on [jenkov](http://tutorials.jenkov.com/svg/stroke.html#stroke-linecap)

### **fill-rule**

WILL GET BACK TO THIS

## **SVG marker element**

SVG markers are used to mark the **start**, **mid** and **end** of a line or path.
Markers are created using the `marker` element.

```html
<marker
  id="markerArrow"
  markerWidth="13"
  markerHeight="13"
  refX="2"
  refY="6"
  orient="auto"
>
  <path d="M2,2 L2,11 L10,6 L2,2" style="fill: red;" />
</marker>
```

I will pick each attribute here on after another. First being the id attribute.

- marker id:  
  This is used to reference the marker to be used.
- markerWidth:  
  This is the width of the marker viewport. In the case above, it is set to 13.
- markerHeight:  
  This is the height of the marker viewport
- orient:  
  This is my favourite attribute. This places the marker in the desired direction specified by the shape it is marking.
- refX:  
  When you ommit it, it is set by default setted to **0**. This attribute determines which point on the marker element will be set as the reference point in the **X** direction.
- refY:  
  When you ommit it, it sia by default setted to **0**. This attribute determines which point on the marker element will be set as the reference point in the **Y** direction.

![marker](./img/marker.png).


### **SVG text element**
SVG text offers the best of both worlds. It’s rendered like other graphic elements so you can do things like add strokes and fills that you can add to shapes, lines, and arrowheads. ***It’s also packaged as XML character data, which means it’s real text.***
[vanseodesign](https://vanseodesign.com/web-design/how-to-work-with-svg-text/)


![text Image](https://vanseodesign.com/blog/wp-content/uploads/2015/10/em-box.png)

#### Text Definitions
 Before diving deeper into SVG text, here are three definitions that are good to know:

   * Glyphs
    Glyphs are visual representations of letters or symbols. Thus, the letter "a" can be drawn using many different glyphs, since there are many different visual representations of the letter "a".

   * Fonts
    Fonts are collections of glyphs which can visualize a set of letters and symbols.

  *  Characters
    Characters are a digital (binary) representation of a letter or symbol. A character may take 1 or more bytes to represent. When a computer renders characters, it maps those characters to glyphs in a font.
[Jenvok](http://tutorials.jenkov.com/svg/text-element.html)



