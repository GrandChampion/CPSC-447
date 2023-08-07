# Spatial data
* usage: to represent spatial attribute that have primary importance
* Example
    * geographic data
    * cartographic data
    * sensor data
    * simulation data

# Geographic map
* Each region(country) is interlocking mark(encoded attributes are fixed in each mark)
* Things that are fixed(interlocked attribute)
    * shape of region
    * area of region
    * position of region
* we cannot encode additional attribute

## Thematic map
* it is one type of geographic map
* Theme is the same as attribute.
* thematic map combines map with tabular data
* two meanings of region
    * region in geographic or reference map: interlocking area mark(province, country), point mark(city)
    * region in tabular data: categorical (key) attribute used to look up value attribute
* Types of thematic map
    * choropleth map
    * symbol map
    * cartogram
    * dot density map

### Choropleth map
* choropleth means multiple areas
* usage: understand geographic relationship
* two encoded data
    * geometry
    * table which have 1 quantitative attribute per region
* Encoding
    * position: geometry
    * color: sequential segmented colormap
* It is recommended to use for regions that are similar size
* Advantage
    * Easy to understand
    * data is collected based on geographical region
* Drawback
    * large region is represented more important which is sometimes not true
    * color choice have huge impact on perception

### Symbol map
* symbol is used to represent mark or glyph
* Advantage
    * intuitive to understand
    * symbol can be emphasized based on attribute, not the size of region.
* Drawback
    * marks can overlap

### Cartogram
* Benefit
    * size disparity: user can differentiate the size of marks easily
* Drawback
    * difficult to extract exact quantity
    * there can be distortion of region on the map
#### Contiguous cartogram
* there is original interlocking marks. then we derive other interlocking marks based on original interlocking marks and quantitative attributes.
* we use algorithm to derive new interlocking marks.

#### Grid cartogram
* it has uniform sized shapes arranged in rectilinear grid
* it use approximate spatial position and relative spatial position

### Dot density map
* usage: we can recognize pattern or clustering
* difference between symbol map
    * symbol map has only one mark per region
    * dot density map's mark represent a constant number of items (Example: one dot equals to 50,000)
* each dot has uniform size and shape
* we can use color channel
* Benefit
    * we can avoid non-uniform region size problem of choropleth map
* Drawback
    * Normalization problem
    * Difficult for user to extract quantity
    * Rendering dots is expensive task in computation.

# Projection
* Mercator projection(default projection): distortion near the poles
