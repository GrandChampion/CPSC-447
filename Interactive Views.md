# Manipulating view

## Changing over time
### Re-encoding
* Change the visual encoding
* Example: changing from bar chart to map

### Changing parameters
* add widget(slider, button, radio button, checkbox, dropdown)
* effect: if we have widget, what will happen if we click button is obvious for user.
* disadvantage: use screen space (higher information density)

### Changing order of data
* applied on: table
* change bars of bar chart to ascending or descending order (data driven reorder)
* effect: we can find extreme value or trend

### Reorder data
* applied on: table with many attributes
* we select a column and reorder based on that column.
* effect: we can find correlation between attributes

### Changing alignment
* applied on: stacked bar
* effect: By aligning to left or middle or right or even at the start of a bar, we can compare bars easily.

### Animating transition
* applied on: bar chart, tree
* effect: In brain, smooth transition from one state to another and reduce cognitive load

## Selecting item in the view
### Selection
* Design choice
    * Interaction modality(how user interact with computer)
        * click/tap an item
        * hover over an item
        * put mouse by touching or nearby or in distant
    * Semantic
        * when selected, add to selected set
        * click on background set the state to default
        * first click as primary selection and second click and secondary selection (Example: map)
        * by selecting, add item to a group


### Highlighting
* change visual encoding for selected target
* design choice
    * change item color when item is clicked
    * add outline mark when clicked (Example: add star mark when selected)
    * change size when clicked
    * change shape when clicked
* Warning: avoid using motion

## Navigating within a view
* Metaphor: change visible items within the view, by changing view point of camera
* Example
    * pan: moving an object across scrren by dragging with mouse
    * translate: moving an object to new location on the screen
    * scroll: moving an object up or down the screen
    * rotate(3D)
    * spin(3D)
    * zoom in and out
* Unconstrained navigation
    * User is allowed to move anywhere in the interface
    * Designer can easily implement
    * Hard for user to use
* Constrained navigation
    * User is restricted in moving and only can move within certain region
    * Example: When selecting area within the map, viewpoint zooms into that area restricting user to navigate only within the area

### Scrollytelling
* navigating page by scrolling down
* advantage: Intuitive and very interactive
* disadvantage: If user is in full screen mode, it is hard to see how far is left until the end of the page

# Benefit of interaction with computer
* ability to interact with visual representation and modify data. This is impossible in paper-based visualization.
* we can change visual encoding on the same data by need(Fluid task switching).
* In brain, animated transition help people to stay oriented

# Drawback of interaction with computer
* Sometimes, it takes time for people to understand visual encoding
* When changing view over time, user need to remember the previous view(cognitive load).
* Control of visualization can take too much area on the screen
* Invisible functionality can be hard to discover. (usually for a person using the view for the first time)
* User may not interact with the computer as designer intended

# Multiple view
## Type
* Juxtapose: placing multiple data representations side by side for the purpose of comparison or constrast
* Partition: dividing a dataset into partitions
* Superimpose: placing one set of visual element on another set of visual element

## Juxtapose
### Factors to consider
* Visual encoding of two views(same or different)
* How data is shared between views
* control of two views (Example: share navigation)

### Linked highlighting between views
* If user selects one region in one view, it highlights region on another view
* each view shares the same items
* each view have different attibute of items

#### Directionality of linking views
* Unidirectional linking: User can control only one view, and another view follows. However, there is no control in another view.
* Bidirectional linking: User can control both views and they interact one another.
    * bidirectional linking is more useful than unidirectional linking

### Overview detail view
* Visual encoding can be the same or different. (Example: bird eye view has the same map as original map)
* 2nd view has the subset of data from the 1st view
* It is bidirectional linking

### Overview detail naviation
* Data of 2nd view is subset of 1st view
* Unidirectional linking
* selecting in small view changes extent in the large view

### Tooltip
* popup information message box when hovered over or clicked
* it provides additional detail
    * it does not provide data in original view. it is a new information.

### Small multiples
* All views use the same visual encoding
* No data are shared on views

### Tradeoffs of using Juxtapose view
* Drawback(cost): Adding view takes area in the screen
* Benefit: Moving eyes between two views is takes low cognitive load, because single changing view needs human to memorize the previous state.

### Design choice
![View design choice](/image/View%20design%20choice.png)
* If encoding and the data is identical over views, we don't need multiple views.
* If visual encoding is different in views and none of data is shared, then we can't make multiple views.

### Reorderable list
* list that is linked to other views
* it makes easy to lookup data

## Partitioning
* It is important to decide the method to separate data in parts between views.