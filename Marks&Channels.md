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
* Bar chart have 1 categorical key attribute and 1 qquantitative value attribute
* Vertical position: use line mark to encode value attribute
* Horizontal position: seperate key attributes
* Case we use bar chart
    * When finding value
    * When comparing value
* It can represent hundreds of items but not thousand