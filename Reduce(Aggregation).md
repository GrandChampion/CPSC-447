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
* Benefit: gives reduced set of entire signals
* Drawback: difficult to pick right signal to be aggregated

## Example
* Histogram: static item aggregation based on bin(0-5, 5-10 ...)
* Scented widget