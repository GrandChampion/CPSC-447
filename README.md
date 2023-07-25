## Chapters
1.  Abstractions
1.  Marks and Channels
1.  Interactive Views
1.  Multivariable Tables
1.  Maps
1.  Color
1.  Aggregation
1.  Networks
1.  Rules of Thumb

# 3 types of attributes
## Categoriacal attribute
### Type 1: Categorical attribute
* Example: Movie genre, file extension, city name, fruit name, animal species, street name, car model, type of cheese, color of eye, human name, ISBN of book, size of Starbucks drink(Tall, Grande, Venti)
* Data that doesn't have implit order
* Data can have hierarchical structure.
* We can compare two things are the same or different
    * Example: Are two apples the same? Is the one orange and the other an apple?
* We can assign external order
    * Example: sort fruit in the order of alphabet

## Ordered attribute
* Data that have implicit order
### Type 2: Ordinal attribute
* Size of cloth(Small, Medium, Large), Top 10 movie, Movie rating, Bank waitlist, Size of egg, Weight class in sports, ABCDF grading scheme
* We cannot do arithematic operation(addition, subtraction), but there exist order to compare relatively for this data.
* There is no unit for this data.

### Type 3: Quantitative attribute
* Example: Height(cm), weight(kg), temperature(°C), stock price, date, rotation of bus, number of thunder storm in 2021, number of teeth, Tire air pressure(psi), umemployment(%), length of yatch(ft)
* We can do numerical comparison and arithematic operation(addition, subtraction)
* There is unit for this data

## Mark
* Basic geometric element that describes item and link
* Most basic visual element
### Dimensions of Mark
* We can classify mark based on spatial dimension


#### 0 dimensional mark: point
#### 1 dimensional mark: line
#### 2 dimensional mark: area
#### 3 dimensional mark: volume

## Channel
* Channel expresses information using attribute of mark
* Channel is way to arrange marks

### Various channels
#### Spatial position channel
* Horizontal
* Vertical
* Both
#### Color channel
* Hue(name of color)
* Saturation(Intensity of hue(color))
* Luminance(Amount of light penetrating the area)

#### Size channel
* case of 1d mark: length
* case of 2d mark: area
* case of 3d mark: volume
#### Motion-oriented channel
* Direction of motion
* Velocity
#### Angle or Tilt channel
#### Curvature channel
#### Shape channel
* Example: triangle, star, line ...


### Types of visual channel
* Human have 2 types of sensory modality
#### Identity channel
* We can recognize which mark is used for which meaning
* Example: Shape, Hue, Motion

#### Magnitude channel
* We can recognize how many of something exists
* Example: Length, area, volume, luminance, angle, saturation

### Types of mark
* Mark representing entity(item, node)
    * Example: point, line, area
* Mark representing connection of entities
    * Connection mark: a line mark that represents the relation between two entities
    * Containment mark, Enclosure mark, Nesting mark: group marks and put hierarchy using area mark

## Table
* Ways to encode tabular data
    * Express value
    * Separate region
    * Order region
    * Align region
* Arrangement of spatial axes orientation
    * Rectilinear
    * Parallel
    * Radial

## Key and Value
* Key
    * We can specify item(entity)
    * Key can be categorical or ordinal attribute(data)
* Value
    * Value is dependent attribute to key
    * Value can be categorical or ordinal or quantitative attribute(data)
    * Level: Unique ones among categorical or ordinal attribute

### Scatter plot
* We encode 2 types of quantitative variables using horizontal and vertical spatical position channel and 0 dimensional point mark
* It can represent upto hundred items
* Case we use scatter plot
    * When finding trend
    * When finding outlier
    * When finding Distribution
    * When finding correlation
    * When finding cluster

### Region
* Area representing the same data
* 3 ways to analyze region
    * If it is categorical attribute: Seperation
    * If it is ordinal attribute: alignment, ordering

### Bar chart

* 1개의 categorical key 속성과 1개의 양적 값(quantitative value) 속성을 갖는다.
* 세로(vertical) 위치: 선분 표시(line mark)로 값 속성(value attribute)를 표현해 준다.
* 가로(horizontal) 위치: Key 속성을 나누어 준다.
* 막대표를 이용하는 경우
    * 값을 찾아야 하는 경우
    * 값을 비교해야 하는 경우
* 수백개의 개체(item)까지 나타낼 수 있다. 하지만, 천개의 개체는 표현이 불가능 하다.

### Stacked bar chart
### Stream graph
### Dot/Line chart
### Indexed line chart
### Gantt chart
### Slope graph
### Heat map
### Cluster heat map
### Radial bar chart
### Star plot
### Radar plot
### Pie chart
### Cox comb chart
### Normalized stacked bar chart
### Glyph map
### SPLOM
### Parallel coordinate



## Interactive View 11단원




## Multiple View 12단원




## 지도 8단원



## 네트워크 9단원

## Color 10단원
