# Reason for filtering and aggregation
* there are too many datasets, so we cannot show them all with the number of pixels in the monitor.
* we reduce the amount of data we show in a single view

# Filter
* Throwing items or attribute away
* Benefit: make computation cheaper
* Drawback: when it is filtered, it is hard to imagine what existed originally
* Way to filter
    * filter by attribute bigger of smaller than threshold value(dividing into noise and signal)
## Difference between query and filter
* query starts from nothing to some elements
* filter starts from everything, then remove elements
## Example
* Film finder
* Cross filtering

# Aggregation
* Represent items or attributes together to make things visually simple
* type
    * static aggregation
    * dynamic aggregation
* Benefit: gives reduced set of entire signals
* Drawback: difficult to pick right signal to be aggregated

## Static item aggregation examples
* histogram: static item aggregation based on bin(0-5, 5-10 ...)
    * Scented widget: advanced widget
* boxplot: we take a table as input and derive lower fence, lower quartile, median, upper quartile, upper fence
    * high scalability: there is no limit for number of items
* Continuous scatterplot
    * high scalability

### Spatial aggregation(type of static aggregation)
* MAUP(Modifiable areal unit problem): if we change boundary of region, result is changed dramatically.
    * zone effect 
    * scale effect
    * gerrymandering

## Dynamic item aggregation(Clustering)
* clustering: classificating items into bins based on similarity measure
    * cluster hierarchy: we can control the level of aggregation
    * Hierarchical parallel coordinate

### Attribute aggregation(type of dynamic aggregation)
* it is also called dimensionality reduction
* create compact low dimensional space from high dimensional space
* Example: dimensionality reduction for document