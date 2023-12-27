# Decomposing color into 3 channels
* luminance channel(used for ordered data): degree of brightness(black and white)
* saturation channel(used for ordered data): degree of colorfulness
* hue channel(used for categorical data): type of color

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

# Color deficiency(color blindness)
* some people cannot see some colors

## Luminance
* Human eye use luminance to detect edge of object

## 3 Human perception
* Human has 3 channels in the eye sight
    * Luminance achromatic channel
    * red-green chroma channel$(a^{\star})$: common type of color blindness
    * yellow-blue chroma channel$(b^{\star})$: rare type of color blindness

# Design for color deficiency
* never to encode only by hue alone
* solution
    * use various luminance
    * use various shaped marks
    * use blue and orange for red-green color deficiency

# Color space
* Luminance, hue, saturation color space
    * luminance, saturation and hue
    * It is good for visual encoding.
    * However, this color space is not common.
* RGB color space
    * it is good for monitors.
    * it is difficult when visual encoding, because it is hard to interpret colors.
    * it is commonly used.
    * RGB is good for display hardware.
* CIE color space
    * it is designed for human vision perception
    * it is good for interpolating(creating new color by blending other colors)
* HSL/HSV color space
    * lightness is not the same as luminance

# Contrast
* Background color and text color needs contrast for readability
* Change luminance of mark based on the background
    * if background is low luminance(black), use high luminance mark
    * if background is high luminance(white), use medium luminance mark
## Bezold effect
* outline color of object gives different feeling

# Color perception in brain
* human vision perceive color by comparing relatively
* human visual system considers
    * background
    * adaptation
* color does not help perceive other things(shape, mark...)
