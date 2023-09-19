# Data
* sequence of values
    * Example: apple, califormia, 2000
* semantic: meaning of value in real world
* type of data
    * item
    * link
    * attribute
    * position

# Item
* individual entity
* Example: a car, a stock, city
* a row in a table: (apple, california, 2000)
* independent variable

# Attribute(Dimension)
* property of item
* For car item, attribute is horsepower, brand
* dependent variable to item
* attributes are columns in a table
    * Name attributes
    * Location attributes

## 3 types of attributes
### Categoriacal attribute
#### Type 1: Categorical attribute
* Example: Movie genre, file extension, city name, fruit name, animal species, street name, car model, type of cheese, color of eye, human name, ISBN of book, size of Starbucks drink(Tall, Grande, Venti)
* Data that doesn't have implit order
* Data can have hierarchical structure.
* We can compare two things are the same or different
    * Example: Are two apples the same? Is the one orange and the other an apple?
* We can assign external order
    * Example: sort fruit in the order of alphabet

### Ordered attribute
* Data that have implicit order
* Direction of ordered attribute
    * sequential: going from minimum to maximum or from maximum to minimum
    * divergent: set point 0, and value goes down and up
    * cyclic: (Example: year round weather data)
* Availability of dataset
    * static dataset: given all dataset to user at once
    * dynamic dataset: giving data as user keep using the visualization
#### Type 2: Ordinal attribute
* Size of cloth(Small, Medium, Large), Top 10 movie, Movie rating, Bank waitlist, Size of egg, Weight class in sports, ABCDF grading scheme
* We cannot do arithematic operation(addition, subtraction), but there exist order to compare relatively for this data.
* There is no unit for this data.

#### Type 3: Quantitative attribute
* Example: Height(cm), weight(kg), temperature(°C), stock price, date, rotation of bus, number of thunder storm in 2021, number of teeth, Tire air pressure(psi), umemployment(%), length of yatch(ft)
* We can do numerical comparison and arithematic operation(addition, subtraction)
* There is unit for this data


# Link
* relationship between two items
* Example: friendship on facebook

# Position
* location point in 2D or 3D space
* Example: pixel coordinate(x,y), latitude and longitude

# Grid
* unit of quantity sampled for continuous data

# 3 major Dataset type
1. Tabular data
    * one item per row
    * cell hold value for item-attribute pair
    * there is an unique key(ID) for each row
    * multidimensional table: table can have 2 or more keys
1. Network(graph) data
    * node is also called vertex
    * link is also called edge
    * attribute can be attached to either node or link
    * Tree
        * there is no cycle
        * tree can represent hierarchy
1. Spatial (field) data
    * choosing right type of grid is important
    * sample: attributes that are actually measured in survey 
    * interpolation: how to derive un-measured points from samples
    * 3 division in spatial field
        1. Scalar: encoding 1 attribute per cell
        1. Vector field: encoding 2 attributes per cell
        1. Tensor: encoding multiple attributes per cell
    * Geometry
        * shape of item
        * spatial position, region

# 1 minor dataset: Collection
* group of items
* type
    * set: unordered collection of unique items
    * list: ordered collection which allow duplicates of items
    * cluster: group of items based on condition set manually

# 3 operations of data abstraction
* translating domain specific language into language of visualization
* Step
    1. Figure out the dataset type(table or network or spatial) and attribute type(categorical or ordered)
    1. find the cardinality(number of items) of dataset
        * for categorical attribute: find number of levels
        * for quantitative attribue: find range
    1. consider transforming the data

# Data model
* using arithmetic operation(+,-,/,*) on number data
* using data type of programming language (int, float, string)

# Conceptual model
* mental construction of data(Semantic)
* example: temparature

# Way to derive attribute
* change data type (int->string)
* add additional data
* computation(addition, subtraction, division...)

# Task abstraction
* use (action, target) pair
    * type of action(independent from each other)
        * analyze
        * search: finding item with specific condition
        * query: find about characteristic of item
## Analyzing action
* Consuming given data
    * discovering(explore)
    * presentation(explain)
* Producing new data
    * annotate(adding new information)
    * record(can be used as history of process)
    * derive new data
## Searching action
* things user use for searching: target or location
* type of searching
    * lookup: user knows both target(example: english word in a dictionary) and location(example: alphabetical order).
    * locate: user only knows target(example: finding node in network)
    * browse: user only knows location. But user doesn't know what looking for. (Example: going to science section in the book store, but don't know what book to buy)
    * explore: user doesnt know target and location (Example: finding good restaurant in Vancovuer)
## Querying action
* type of querying
    * identify: finding one thing
    * compare: compare multiple things to each other
    * summarize: look at all of data and summarize

## Target
* target which is in all type of data
    * trend
    * outlier
    * feature
* task specific to attribute
    * if there is only one attribute: understanding distribution
    * if there there are multiple attributes
        * dependency
        * correlation
        * similarity
* task specific to network data
    * understanding topological structure of network
        * finding path
* task specific to spatial data
    * understanding shape(Example: In 3D medical image, comparing tumor to bone.)


## Range (Quantitative)
* min and max value for quantitative attribute.
* e.g, [0,100], [Jan-03-2023,Dec-01-2023]

## Cardinarlity (categorical)
* Unique number of items for categorical attribute.

* Example (rows)
[true, 1, 1.0]
[false, 2, 2.5]
['apple',1,2.2]
    * true/false: cardinality is 2

## Discrepancy
* value assigned to cell, which is not in cardinality.
    * Example
      * [false, 2, 2.5]
        ['apple',1,2.2]
    
* solution
  * delete
  * edit: mispelled country name