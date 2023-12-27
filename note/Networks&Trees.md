# Network data

- network data is a type of dataset
- types: network, tree

## Network

- model relationship between things
- it is also called graph
- both node and link can have attributes

## Tree

- among networks, if there is no cycle, it is called tree
- node of tree have only one parent node except for root

# Network tasks

- 2 types of network tasks

## Topology based task

- finding path in the topology of network
- finding topological neighbor: finding a way from node A to node B by
  traversing links
- comparing importance measure of nodes(example: how will the traffic effected
  if we remove specific node)
- identifying cluster within the topology(set of nodes which are highly
  connected)

## Attribute based task

- Finding distribution
- Finding extreme value

## Combination task: topology based task+attribute based task

- Finding friend of friend who likes cats
  - topology based task: find all the adjacent nodes of selected node
  - attribute based task: check the adjacent nodes have cat(attribute == cat)

# Node link diagram

- basic type of network
- node: point mark
- link: line mark

## way to make a good node link diagram

- minimize
  - edge crossing another edge
  - overlapping node on top of another node
  - distance between neighbor node
  - white space for information density
  - bending edges like squiggle link
- maximize
  - angle between edges which are connected to a node
- emphasize symmetry if topology has symmetry

### Reason why making optimal graph is hard

- creating optimal graph is np-hard
- conflicting criteria
  - minimizing number of edge crossing conflicts with making edge length uniform
  - trying to use up white space conflicts with trying to make network
    symmetrically

### Optimization based layout

1. create optimization problem of layout problem
1. convert criteria into weighted cost function $$F(layout)=a\times (crossing
   \
   counts) + b\times (drawing\ space\ used)+ \cdots$$
1. use optimization techniques to find layout with the minimal cost
   - optimization technique
     - energy based physics model
     - force directed placement
     - spring embedder

#### Force directed placement
* link: pull together like a spring
* nodes: repel each other like magnets
* Task it is good for.
    * exploring topology structure
    * tracing and locating path
    * finding clustering structure
* Advantage of using this method
    * it can visualize clusters easily
    * length of edges are uniform
* Disadvantage of using this method
    * result is nondeterministic(there can be multiple variants using this method)
    * Computationally expensive $O({node}^{3})$
        * if there are too many nodes, it reaches computational limit, so cannot create the graph
* Scalability
    * need to have less number of edges than number of nodes

### Circular layout and arc diagram
* put restriction on original network
* nodes should be reordered to make network structure easy to understand
    * use barycentric ordering

### Adjacency matrix representation of network
* each row and column represent nodes
* good for finding topological neighboring nodes
* bad for finding topological path
* Derived data
    * 1 quantitative attribute: weighted edge between nodes
    * 2 categorical attribute: list of nodes
* high scalability
  * we can have 1000 nodes
  * we can have 1 million edges $\left( 1000\times 1000 \right)$
* Edge centric view: adjacency matrix focuses on position of edges thand nodes

## When to choose node link vs adjacency matrix
|Condition|Design choice|
|---------|-------------|
|small network|node link diagram|
|large network and don't need path tracing|adjacency matrix|


### NodeTrix
* it is a hybrid of node link diagram and adjacency matrix


# Tree
## Node link tree
* data: tree
* visual encoding
  * link: connection mark
  * node: point mark
  * radial orientation
    * distance from center: depth of tree
* task
  * understanding topology
  * following path
* scalability
  * With node label: 1000
  * Without node label: 10000 nodes
### connection and containment in tree
* connection mark: visualize topology of tree
* containment mark: visualize parent-child relationship or nested structure


### Implicit way to show parent-child relationship in a tree
* Treemap (contianment)
* Sunburst position (radial)
* Icicle plot (rectilinear)

## factors to consider when drawing a tree
* information density: whether we need to put label inside each node
* redundancy