// 1. GROUP이용해서 묶기
// 2. 배치 다시하기
// 3. 주석 다시 달기
// 4. 새로운 파일에 코드 복사해서 붙이고 보내기

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

    // Define drawing area to be 'svg'
    this.svg = d3.select('#vis')
      .append('svg')
      .attr('width', this.width)
      .attr('height', this.height)

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

    // add text based on yScale
    this.trialLabels = this.svg.selectAll('.trial-label-left')
      .data(this.trials)
      .enter()
      .append('text')
      .attr('class', 'trial-label-left')
      .attr('x', 10) // Adjusted the x position to the left
      .attr('y', trial => vis.yScale(trial) + 20)
      .text(trial => "Trial " + trial);

    // add text based non yScale and the value is averageAccuracy(Trial)
    this.trialLabels = this.svg.selectAll('.trial-label-right')
      .data(this.trials)
      .enter()
      .append('text')
      .attr('class', 'trial-label-right')
      .attr('x', 450) // Adjusted the x position to the left
      .attr('y', trial => vis.yScale(trial) + 20)
      .text(trial => vis.averageAccuracy(trial));

    // put title in the upper left corner
    this.svg.append('text')
      .attr('class', 'title')
      .attr('x', 10)
      .attr('y', 20)
      .text('Trial/Accuracy scatterplot')
      .style('font-weight', 'bold')

    // put min per accuract text at the upper right corner
    this.svg.append('text')
      .attr('class', 'average')
      .attr('x', this.width - 200)
      .attr('y', 20)
      .text('Mean accuracy per trial')
      .style('font-weight', 'bold')

    // put Accuracy at the bottom left
    this.svg.append('text')
      .attr('class', 'accuracy')
      .attr('x', 10)
      .attr('y', 200)
      .text('Accuracy')
      .style('font-weight', 'bold')

    // Drawing six vertical lines
    const points = [0, 0.2, 0.4, 0.6, 0.8, 1.0];

    this.lines = vis.svg.append('g')
      .attr('class', 'lines')

    this.lines
      .selectAll("line")
      .data(points)
      .enter()
      .append("line")
      .attr("x1", point => vis.xScale(point))
      .attr("x2", point => vis.xScale(point))
      .attr("y1", 0)
      .attr("y2", vis.height - 50)
      .attr("stroke", "black")

    // add text under each line
    this.lines
      .selectAll("text")
      .data(points)
      .enter()
      .append("text")
      .attr("x", point => vis.xScale(point))
      .attr("y", vis.height - 30)
      .text(point => point)



    vis.renderVis()
  }


  renderVis() {
    let vis = this

    vis.circles = this.svg.append('g')
      .attr('class', 'circles')

    // Add circles
    vis.circles.selectAll('circle')
      .data(this.csvData)
      .enter()
      .append('circle')
      .attr('r', '8px')
      .attr('cx', obj => vis.width * obj.accuracy)
      .attr('cy', obj => this.yScale(obj.trial))
      .attr('fill', 'green')
      .attr('fill-opacity', 0.5);


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