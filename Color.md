# Decomposing color into 3 channels
* luminance channel(ordered): degree of brightness
* saturation channel(ordered): degree of colorfulness
* hue channel(categorical): type of color

## Categorical color
* using different types of colors for each line in the graph
* Drawback: there are limited number of colors

## Ordered color
* using colors which have different saturation for each line in the graph
* Drawback: if we have too many classes, then it is difficult to differentiate

### Using rainbow as ordered color
* Drawback
    * rainbow color is not ordered color in human perception
    * rainbow spectrum is not linear. if we select parts which have the same length in the spectrum, each part will have different number of colors within it.
    * rainbow color is suitable for categorical attribute
* Benefit
    * It is good for contrasting near structures
* Alternative
    1. Use less hues(Example: only purple and yellow)
    1. Use multiple hues ordered based on increasing luminance

### Virdis and magma
* colors are ordered in the ascending order of luminance together
* it is uniform for human perception

### Color channel interaction
* saturation, luminance and transparency of color goes together.
* when designing, we need to consider color's saturation, luminance and transparency

# Univariate color palette
1. categorical color palette(qualitative, nominal color palette)
    * goal: maximize distinguishability between attributes
1. ordered color palette
    * type
        * diverging: neutral color(white, yellow, grey) is used for middle value of data.
        * sequential: order by luminance
        * cyclic: have many hues

# Bivariate color map
* there is high saturation version and low saturation version for the same hue.