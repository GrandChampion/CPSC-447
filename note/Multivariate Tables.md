## Table
### Key
* Independent attribute
* unique index to look an item
* In a list([1,2,3,4,5]), single key is used
* In a 2D matrix([[1,2,3],[4,5,6],[7,8,9]]), 2 keys are used

### Value
* Dependent attribute
* value of cell

## Scatterplot
* Usage: finding trend, outlier, distribution, correlation and cluster
* Data: 2 quantitative attributes
* Mark: point
* Channel: horizontal+vertical position
* There is no key in the scatter plot. Only values exist.

## Bar chart
* Usage: compare values
* Data: 1 categorical attribute(name of the item), 1 quantitative attribute (value of that item)
* Mark: line
* Channel: length of bars to express quantitative value, one spacial region per mark

## Stacked bar chart
* Usage: part to whole relationship
* Data: 2 categorical attribute, 1 quantitative attribute
* Mark: Glyph(composite bar object)

## Streamgraph
* Emphasizes horizontal continuity
* Data: 1 categorical (key) attribute, 1 ordered (key) attribute, 1 quantitative (value) attribute
    * Derived data: geometry, height from the center represents the quantitative value

## Dot/line chart
* Usage: finding trend by looking at the connection between points.
* Data: 1 quantitative key attribute, 1 quatitative value attribute
* Mark: point, line connection between points
* Channel: line length to express quantitative value, seperated and ordered by key attribute

### Bar chart vs line chart
* We don't use line chart for categorical key attribute.

|Key attribute|Choose|
|-------------|------|
|Categorical key attribute|Bar chart|
|Ordered key attribute|Line chart|

## Indexed line chart
* Usage: showing change over time
* Data: 1 quantitative key attribute, 1 quantitative value attribute
    * Derived data: new quantitative value attribute

## Gantt chart
* Usage: Emphasize temporal overlap, find start time and end time
* Data: 1 categorical key attribute, 2 quantitative value attributes
* Mark: line
* channel: horizontal position(x axis) is the start time and the end time

## Slopegraph
* Usage: Emphasize change in rank or value
* Data: 2 quantitative value attributes
    * Derived data: magnitude of the change
* Mark: point, line
* Channel: 2 vertical position express attribute's value(line width, line color)

## Heatmap
* Usage: finding cluster and outlier
* Data: 2 categorical (key) attributes, 1 quantitative (value) attribute
* Mark: point
* Channel: color by quantitative (value) attribute

## Cluster heatmap
* Derived data: 2 cluster hierarchies
* Dendogram

## Radial bar chart
Mark: line
Channel: length, angle representing value

## Star plot
Mark: line

## Radar plot (Radial line chart)
* Mark: point, connecting line
* Only use when the data is cyclic

## Pie chart
* Area is very less accurate
* Only use when there is only two levels or for part to whole task

## Coxcomb chart
* Mark: line
* Channel: length of line
* Data: 1 categorical (key) attribute, 1 quantitative (value) attribute

## Normalized bar chart
* Usage: part to whole judgement


## Glyphmap
* Radial display is good for cyclic pattern

## Scatterplot matrix (SPLOM)
* Mark: point

## Parallel coordinate
* Mark: parallel axes, line for each item
