// initVis()
// renderVIs()

class Scatterplot {
  constructor(inputData) {

    // Margin list
    const margin = { top: 5, right: 20, bottom: 20, left: 50 };

    // Initialize data
    this.csvData = inputData

    // get the types of trials
    this.trials = Array.from(new Set(this.csvData.map(row => row.trial))).sort()

    // run initVis
    this.initVis()

  }

  initVis() {
    let vis = this

    vis.width = 500
    vis.height = 250

    // Initialize x scale (accuracy)
    // from value to pixel value
    vis.xScale = d3.scalePoint()
      .domain([0, 0.2, 0.4, 0.6, 0.8, 1.0])
      .range([0, this.width])

    // Initialize y scale (trial type)
    // if insert trial number, it gives starting y point
    vis.yScale = d3.scaleBand()
      .domain(this.trials)
      .range([0, vis.height])


  }

  updateVis() {
    let vis = this
  }

  renderVis() {
    let vis = this

  }
}