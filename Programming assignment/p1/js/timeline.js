class Timeline {

  /**
   * Class constructor with initial configuration
   * @param {Object}
   * @param {Array}
   */
  constructor(_config, _data) {
    this.config = {
      parentElement: _config.parentElement,
      disasterCategories: _config.disasterCategories,
      containerWidth: 800,
      containerHeight: 900,
      margin: { top: 120, right: 20, bottom: 20, left: 45 },
      tooltipPadding: 15,
      legendWidth: 170,
      legendHeight: 8,
      legendRadius: 5
    }
    this.data = _data;

    // Minimum year of dataset
    this.minYear = d3.min(this.data, d => d.year);
    // Maximum year of dataset
    this.maxYear = d3.max(this.data, d => d.year);

    // Minimum cost of dataset
    this.minCost = d3.min(this.data, row => row.cost)
    // Maximum cost of dataset
    this.maxCost = d3.max(this.data, row => row.cost)

    // Initialize selectedCategory to have all types of disaster
    this.selectedCategories = ["winter-storm-freeze", "drought-wildfire", "flooding", "tropical-cyclone", "severe-storm"];
    this.initVis();
  }

  /**
   * We initialize the arc generator, scales, axes, and append static elements
   */
  initVis() {
    let vis = this;

    // Calculate inner chart size. Margin specifies the space around the actual chart.
    vis.width = vis.config.containerWidth - vis.config.margin.left - vis.config.margin.right;
    vis.height = vis.config.containerHeight - vis.config.margin.top - vis.config.margin.bottom;

    /////////////////////////////////////////////////////////////////////////////////////////////
    //         X axis preparation
    vis.xScale = d3.scaleLinear().domain([1, 13]).range([0, vis.width]);
    vis.xAxisValue = d3.axisTop(vis.xScale)
      .tickValues([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])
      .tickFormat(selectedMonth => {
        let month = ["Jan.", "Feb.", "Mar.", "Apr.", "May", "Jun.", "Jul.", "Aug.", "Sep.", "Oct.", "Nov.", "Dec."];
        return month[selectedMonth - 1]
      });
    /////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////////
    //         Y axis preparation
    vis.yScale = d3.scaleLinear().domain([vis.minYear, vis.maxYear]).range([vis.height, 0]);
    vis.yAxisValue = d3.axisLeft(vis.yScale)
      .tickValues(d3.range(1980, 2018, 1))
      .tickFormat(d => d)
    vis.distanceBetweenYAxis = vis.yScale(this.maxYear - 1) - vis.yScale(this.maxYear)
    /////////////////////////////////////////////////////////////////////////////////////////////


    // Initialize arc generator that we use to create the SVG path for the half circles.
    vis.arcGenerator = d3.arc()
      .outerRadius(d => vis.radiusScale(d))
      .innerRadius(0)
      .startAngle(-Math.PI / 2)
      .endAngle(Math.PI / 2);

    // Define size of SVG drawing area
    vis.svg = d3.select(vis.config.parentElement).append('svg')
      .attr('width', vis.config.containerWidth)
      .attr('height', vis.config.containerHeight + 50);

    // Append group element that will contain our actual chart
    // and position it according to the given margin config
    vis.chartArea = vis.svg.append('g')
      .attr('transform', `translate(${vis.config.margin.left},${vis.config.margin.top})`);

    /////////////////////////////////////////////////////////////////////////////////////////////
    //         X axis actual creation
    vis.xAxisGroup = vis.chartArea.append('g')
      .attr("class", "axis xaxis")
      .attr("transform", "translate(0, 0)")
    vis.xAxisGroup.call(vis.xAxisValue);
    /////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////////
    //         Y axis actual creation
    vis.yAxisGroup = vis.chartArea.append('g')
      .attr("class", "axis yaxis")
      .attr("transform", `translate(0, ${vis.distanceBetweenYAxis})`)
    vis.yAxisGroup.call(vis.yAxisValue);
    /////////////////////////////////////////////////////////////////////////////////////////////

    // Initialize clipping mask that covers the whole chart
    vis.chartArea.append('defs')
      .append('clipPath')
      .attr('id', 'chart-mask')
      .append('rect')
      .attr('width', vis.width)
      .attr('y', -vis.config.margin.top)
      .attr('height', vis.config.containerHeight);

    // Apply clipping mask to 'vis.chart' to clip semicircles at the very beginning and end of a year
    vis.chart = vis.chartArea.append('g')
      .attr('clip-path', 'url(#chart-mask)');

    vis.updateVis();
  }


  /*
  API: Draw line for each year
   */
  updateVis() {
    let vis = this;

    // create Year group
    vis.yearGroup = vis.chart.append('g')
      .attr('class', 'year-group')
    // create line group which contains all the line
    vis.lineGroup = vis.yearGroup.append('g')
      .attr('class', 'line-group')

    // Year line
    vis.lineGroup.selectAll()
      .data(d3.range(1980, 2017 + 1, 1))
      .join('line')
      .attr('class', 'year-line')
      .attr('x1', 0)
      .attr('x2', vis.width)
      .attr('y1', d => vis.yScale(d) + vis.distanceBetweenYAxis - 0.5)
      .attr('y2', d => vis.yScale(d) + vis.distanceBetweenYAxis - 0.5)
      .attr('stroke', 'black')
      .attr('stroke-width', 1)

    vis.renderVis();
    vis.renderLegend();
  }

  /*
  API: Draw semicircle, disaster name with the highest cost, and tooltip
   */
  renderVis() {
    let vis = this;
    /////////////////////////////////////////////////////////////////////////////////////////////
    //         Making semi circle preparation
    // convert cost into radius
    vis.radiusScale = d3.scaleLinear().domain([0, this.maxCost]).range([4, 140]);
    // convert date into x position
    vis.dayMonthScale = d3.scaleLinear().domain([1.1, 12.31]).range([0, vis.width]);

    // Only select rows whose categories are in selected categories
    vis.selectedData = vis.data.filter(row => {
      return vis.selectedCategories.includes(row.disasterCategory)
    })

    vis.circleGroup = vis.yearGroup.append('g').attr('class', 'circle-group')
    /////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////////
    //         Create semi circle
    vis.circleGroup.selectAll()
      .data(vis.selectedData)
      .join('path')
      .attr('class', 'semi-circle')
      .attr('transform', row => `translate(${vis.dayMonthScale(row.monthAndDay)}, ${vis.yScale(row.year) + vis.distanceBetweenYAxis})`)
      .attr('d', row => vis.arcGenerator(vis.radiusScale(row.cost)))
      .attr('fill', function (row) {
        if (row.disasterCategory === 'winter-storm-freeze') {
          return "#ccc"
        } else if (row.disasterCategory === 'drought-wildfire') {
          return "#ffffd9"
        } else if (row.disasterCategory === 'flooding') {
          return "#41b6c4"
        } else if (row.disasterCategory === 'tropical-cyclone') {
          return "#081d58"
        } else if (row.disasterCategory === 'severe-storm') {
          return "#c7e9b4"
        }
      })
      .attr('opacity', 0.6) // from instruction
      .attr('stroke', '#333') // from instruction
      .attr('stroke-width', 0.3) // from instruction
    /////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////////
    // Semi circle creation
    vis.circleGroup.selectAll()
      .data(d3.range(vis.minYear, vis.maxYear + 1, 1))
      .join('text')
      .attr('class', 'year-cost')
      .attr('x', vis.width)
      .attr('y', function (d) {
        return vis.yScale(d) + vis.distanceBetweenYAxis
      })
      .attr('dy', -5)
      .attr('text-anchor', 'end')
      .text(yearData => {
        let cost = 0;
        let year = yearData;
        let name = '';
        vis.xPosisionList = [];
        vis.selectedData.forEach(row => {
          if (row.year === year) {
            if (row.cost > cost) {
              cost = row.cost;
              name = row.disasterName;
            }
          }
        })
        return name;
      })
      .attr('font-size', 10)
      .attr('font-weight', 'bold')
      .attr('fill', '#333')
    vis.circleGroup.selectAll('.year-cost')
      .attr('x', function (d) {
        let year = d;
        let cost = 0;
        let xPosision = 0;
        vis.selectedData.forEach(row => {
          if (row.year === year) {
            if (row.cost > cost) {
              cost = row.cost;
              xPosision = vis.dayMonthScale(row.monthAndDay);
            }
          }
        })
        return xPosision;
      })


    /////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////////
    //             Tool tip creation
    vis.circleGroup.selectAll('.semi-circle')
      .on('mouseover', function (event, d) {
        let year = d.year;
        let cost = 0;
        let name = '';
        vis.selectedData.forEach(row => {
          if (row.year === year) {
            if (row.cost > cost) {
              cost = row.cost;
              name = row.disasterName;
            }
          }
        })
        d3.select(this)
          .attr('opacity', 1)
        vis.tooltip = vis.svg.append('g')
          .attr('class', 'tooltip')
          .attr('transform', `translate(${vis.dayMonthScale(d.monthAndDay)}, ${vis.yScale(d.year) + vis.distanceBetweenYAxis})`)
        vis.tooltip.append('rect')
          .attr('x', 20)
          .attr('y', d.year / 100 + 105)
          .attr('width', 200)
          .attr('height', 50)
          .attr('fill', 'grey')
        vis.tooltip.append('text')
          .attr('x', 25)
          .attr('y', d.year / 100 + 105 + 15)
          .attr('font-size', 10)
          .attr('font-weight', 'bold')
          .text(name)
        vis.tooltip.append('text')
          .attr('x', 25)
          .attr('y', d.year / 100 + 105 + 30)
          .attr('font-size', 10)
          .text(`$${d.cost} billion`)
      })
      .on('mouseout', function (event) {
        d3.select(this)
          .attr('opacity', 0.6)
        vis.tooltip.remove();
      })
    /////////////////////////////////////////////////////////////////////////////////////////////
  }

  /*
  API: Create legend, update chart based on selected legend item
   */
  renderLegend() {
    let vis = this;
    /////////////////////////////////////////////////////////////////////////////////////////////
    //         Initializing legend
    // reset everything under .myLegend tag
    d3.select('.myLegend').selectAll('*').remove();

    // select .myLegend tag again and append div
    vis.legendPlace = d3.select('.myLegend')
      .append('div')
      .attr('class', 'legend-group')

    // Initialize the legend items as a array of object
    vis.legendItemList = [
      { name: 'Winter storms, freezing', class: 'winter-storm-legend' },
      { name: 'Drought and wildfire', class: 'drought-legend' },
      { name: 'Flooding', class: 'flooding-legend' },
      { name: 'Tropical cyclones', class: 'tropical-cyclone-legend' },
      { name: 'Severe storms', class: 'severe-storm-legend' },
    ]


    vis.legendItemList.forEach((disasterLegendItem) => {
      let currentLegendItem = vis.legendPlace.append('div').attr('class', 'legend-item');

      //append circle for each legend item
      currentLegendItem.append('span').attr('class', `legend-circle ${disasterLegendItem.class}`);

      // append text for each legend item
      currentLegendItem.append('text').text(disasterLegendItem.name).attr('id', disasterLegendItem.class);
    })
    /////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////////
    //         Clicking Legend Item related

    // Winter storm button
    vis.legendPlace.selectAll('.winter-storm-legend')
      .on('click', function (event, data) {
        // Remove every semi circle
        vis.yearGroup.selectAll('.semi-circle').remove();
        // Remove every text
        vis.yearGroup.selectAll('.year-cost').remove();

        // Changing opacity
        if (d3.select('.winter-storm-legend').style('opacity') === '1') {
          d3.select('.winter-storm-legend').style('opacity', 0.3)
          d3.select('#winter-storm-legend').style('opacity', 0.3)
        } else {
          d3.select('.winter-storm-legend').style('opacity', 1)
          d3.select('#winter-storm-legend').style('opacity', 1)
        }

        // If included in selectedCategory remove
        if (vis.selectedCategories.includes("winter-storm-freeze")) {
          vis.selectedCategories = vis.selectedCategories.filter(item => item !== "winter-storm-freeze")
        }
        // If not included, add to selectedCategory
        else if (vis.selectedCategories.includes("winter-storm-freeze") === false) {
          vis.selectedCategories.push("winter-storm-freeze")
        }
        // run rendering
        vis.renderVis()
      })

    // Drought and wildfire button
    vis.legendPlace.selectAll('.drought-legend')
      .on('click', function (event, data) {
        // Remove every semi circle
        vis.yearGroup.selectAll('.semi-circle').remove();
        // Remove every text
        vis.yearGroup.selectAll('.year-cost').remove();

        // Changing opacity
        if (d3.select('.drought-legend').style('opacity') === '1') {
          d3.select('.drought-legend').style('opacity', 0.3)
          d3.select('#drought-legend').style('opacity', 0.3)
        } else {
          d3.select('.drought-legend').style('opacity', 1)
          d3.select('#drought-legend').style('opacity', 1)
        }

        // If included in selectedCategory remove
        if (vis.selectedCategories.includes("drought-wildfire")) {
          vis.selectedCategories = vis.selectedCategories.filter(item => item !== "drought-wildfire")
        }
        // If not included, add to selectedCategory
        else if (vis.selectedCategories.includes("drought-wildfire") === false) {
          vis.selectedCategories.push("drought-wildfire")
        }
        // run rendering
        vis.renderVis()
      })

    // Flooding button
    vis.legendPlace.selectAll('.flooding-legend')
      .on('click', function (event, data) {
        // Remove every semi circle
        vis.yearGroup.selectAll('.semi-circle').remove();
        // Remove every text
        vis.yearGroup.selectAll('.year-cost').remove();

        // Changing opacity
        if (d3.select('.flooding-legend').style('opacity') === '1') {
          d3.select('.flooding-legend').style('opacity', 0.3)
          d3.select('#flooding-legend').style('opacity', 0.3)
        } else {
          d3.select('.flooding-legend').style('opacity', 1)
          d3.select('#flooding-legend').style('opacity', 1)
        }

        // If included in selectedCategory remove
        if (vis.selectedCategories.includes("flooding")) {
          vis.selectedCategories = vis.selectedCategories.filter(item => item !== "flooding")
        }
        // If not included, add to selectedCategory
        else if (vis.selectedCategories.includes("flooding") === false) {
          vis.selectedCategories.push("flooding")
        }
        // run rendering
        vis.renderVis()
      })

    // Tropical cyclones button
    vis.legendPlace.selectAll('.tropical-cyclone-legend')
      .on('click', function (event, data) {
        // Remove every semi circle
        vis.yearGroup.selectAll('.semi-circle').remove();
        // Remove every text
        vis.yearGroup.selectAll('.year-cost').remove();

        // Changing opacity
        if (d3.select('.tropical-cyclone-legend').style('opacity') === '1') {
          d3.select('.tropical-cyclone-legend').style('opacity', 0.3)
          d3.select('#tropical-cyclone-legend').style('opacity', 0.3)
        } else {
          d3.select('.tropical-cyclone-legend').style('opacity', 1)
          d3.select('#tropical-cyclone-legend').style('opacity', 1)
        }

        // If included in selectedCategory remove
        if (vis.selectedCategories.includes("tropical-cyclone")) {
          vis.selectedCategories = vis.selectedCategories.filter(item => item !== "tropical-cyclone")
        }
        // If not included, add to selectedCategory
        else if (vis.selectedCategories.includes("tropical-cyclone") === false) {
          vis.selectedCategories.push("tropical-cyclone")
        }
        // run rendering
        vis.renderVis()
      })

    // Severe storms button
    vis.legendPlace.selectAll('.severe-storm-legend')
      .on('click', function (event, data) {
        // Remove every semi circle
        vis.yearGroup.selectAll('.semi-circle').remove();
        // Remove every text
        vis.yearGroup.selectAll('.year-cost').remove();

        // Changing opacity
        if (d3.select('.severe-storm-legend').style('opacity') === '1') {
          d3.select('.severe-storm-legend').style('opacity', 0.3)
          d3.select('#severe-storm-legend').style('opacity', 0.3)
        } else {
          d3.select('.severe-storm-legend').style('opacity', 1)
          d3.select('#severe-storm-legend').style('opacity', 1)
        }

        // If included in selectedCategory remove
        if (vis.selectedCategories.includes("severe-storm")) {
          vis.selectedCategories = vis.selectedCategories.filter(item => item !== "severe-storm")
        }
        // If not included, add to selectedCategory
        else if (vis.selectedCategories.includes("severe-storm") === false) {
          vis.selectedCategories.push("severe-storm")
        }
        // run rendering
        vis.renderVis()
      })

    /////////////////////////////////////////////////////////////////////////////////////////////
  }
}