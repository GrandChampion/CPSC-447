class Scatterplot {

  // Todo: Draw chart based on the given instructions
  constructor(array) {
    // Initializing background
    const background = d3.select('#vis')
      .append('svg')
      .attr('width', '500px')
      .attr('height', '250px')

    // Inserting circles
    background.selectAll('circle')
      .data(array)
      .enter() //# enter(): of data > # of DOM element
      .append('circle')
      .attr('r', '8px')
      .attr('cx', function (element) {
        return 20 + 450 * element['accuracy']
      })
      .attr('cy', function (element) {
        return element['trial'] * 50
      })
      .attr('fill', 'green')
      .attr('fill-opacity', 0.5)

      // Drawing 6 of X axes

  }
}