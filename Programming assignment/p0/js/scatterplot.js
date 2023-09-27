class Scatterplot {
  constructor(inputData) {

    // Margin list
    this.margin = { left: 50, right: 30, top: 20, bottom: 10 }
    this.circleRadius = 8

    // Initialize data
    this.csvData = inputData

    // get types of trials in csv file
    this.trials = Array.from(new Set(this.csvData.map(row => row.trial))).sort()

    this.initVis()

  }

  initVis() {
    let vis = this

    // width and height
    vis.width = 500
    vis.height = 250

    // Initialize svg
    this.svg = d3.select('#vis')
      .append('svg')
      .attr('width', this.width)
      .attr('height', this.height)


    // Initialize x scale (accuracy)
    // from value to pixel value
    vis.xScale = d3.scalePoint()
      .domain([0, 0.2, 0.4, 0.6, 0.8, 1.0])
      .range([this.margin.left, this.width - this.margin.right - 15])


    // Scale band for circles
    vis.circleScale = d3.scaleLinear()
      .domain([0, 1])
      .range([this.margin.left, this.width - this.margin.right - 15])

    // Initialize y scale (trial type)
    // if insert trial number, it gives starting y point
    vis.yScale = d3.scaleBand()
      .domain(this.trials)
      .range([this.margin.top + 30, vis.height - this.margin.bottom])

    // add text based on yScale
    this.trialLabels = this.svg.append('g').selectAll('.trial-label-left')
      .data(this.trials)
      .enter()
      .append('text')
      .attr('class', 'trial-label-left')
      .attr('x', 0)
      .attr('y', trial => vis.yScale(trial) + 5)
      .text(trial => "Trial " + trial)
      .attr("font-size", 12)

    // add text based non yScale and the value is averageAccuracy(Trial)
    this.averageAccuracy = this.svg.selectAll('.trial-label-right')
      .data(this.trials)
      .enter()
      .append('text')
      .attr('class', 'trial-label-right')
      .attr('x', this.width - this.margin.right) // Adjusted the x position to the left
      .attr('y', trial => vis.yScale(trial))
      .text(trial => vis.averageAccuracy(trial))
      .attr('font-size', 12)

    // Header
    this.headerGroup = this.svg.append('g').attr('class', 'Header')

    // Top left: Trial/Accuracy scatterplot
    this.headerGroup.append('text')
      .attr('class', 'title')
      .attr('x', 0)
      .attr('y', this.margin.top)
      .text('Trial/Accuracy scatterplot')
      .style('font-weight', 'bold')

    // Top right: Mean accuracy per trial
    this.headerGroup.append('text')
      .attr('class', 'average')
      .attr('x', this.width - 180)
      .attr('y', this.margin.top)
      .text('Mean accuracy per trial')
      .style('font-weight', 'bold')

    // Footer
    this.footerGroup = this.svg.append('g').attr('class', 'Footer')
    this.footerGroup.append('text')
      .attr('class', 'accuracy')
      .attr('x', 0)
      .attr('y', this.height - 10)
      .text('Accuracy')
      .style('font-weight', 'bold')

    // Starting point
    const points = [0, 0.2, 0.4, 0.6, 0.8, 1.0]

    // Chart (scatter plot)
    this.chartGroup = this.svg.append('g').attr('class', 'Chart (Scatterplot)')

    this.chartGroup
      .selectAll("line")
      .data(points)
      .enter()
      .append("line")
      .attr("x1", point => vis.xScale(point))
      .attr("x2", point => vis.xScale(point))
      .attr("y1", this.margin.top + 10)
      .attr("y2", this.height - this.margin.bottom - 30)
      .attr("stroke", "black")

    // grid under line
    this.chartGroup
      .selectAll("text")
      .data(points)
      .enter()
      .append("text")
      .attr("x", point => vis.xScale(point) - 7)
      .attr("y", this.height - this.margin.bottom - 15)
      .text(point => point)

    vis.renderVis()
  }

  renderVis() {
    let vis = this

    // Circle group
    vis.circles = this.svg.append('g')
      .attr('class', 'Circle')

    // Add circles
    vis.circles.selectAll('circle')
      .data(this.csvData)
      .enter()
      .append('circle')
      .attr('r', '8px')
      .attr('cx', obj => this.circleScale(obj.accuracy))
      .attr('cy', obj => this.yScale(obj.trial))
      .attr('fill', 'green')
      .attr('fill-opacity', 0.5)
  }


  // API
  // Input: trial number
  // Output: average accuracy of that trial
  averageAccuracy(trial) {
    let vis = this
    let trialData = vis.csvData.filter(row => row.trial == trial)
    let sum = 0
    trialData.forEach(row => sum += row.accuracy)
    return d3.format(".2f")(sum / trialData.length)
  }

}