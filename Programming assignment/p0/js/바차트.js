function showBarChart(data) {
	// Margin object with properties for the four directions
	const margin = {top: 5, right: 20, bottom: 20, left: 50};

	// Width and height as the inner dimensions of the chart area
	const width = 500 - margin.left - margin.right,
	height = 140 - margin.top - margin.bottom;

	// Define 'svg' as a child-element (g) from the drawing area and include spaces
	const svg = d3.select('#chart').append('svg')
		.attr('width', width + margin.left + margin.right)
		.attr('height', height + margin.top + margin.bottom)
		.append('g')
		.attr('transform', `translate(${margin.left}, ${margin.top})`);

	// All subsequent functions/properties can basically ignore the margins

	// Initialize linear and ordinal scales (input domain and output range)
	const xScale = d3.scaleLinear()
		.domain([0, d3.max(data, d => d.sales)])
		.range([0, width]);

	const yScale = d3.scaleBand()
		.domain(data.map(d => d.month))
		.range([0, height])
		.paddingInner(0.15);

	// Initialize axes
	const xAxis = d3.axisBottom(xScale)
		.ticks(6)
		.tickSizeOuter(0);

	const yAxis = d3.axisLeft(yScale)
		.tickSizeOuter(0);

	// Draw the axis (move xAxis to the bottom with 'translate')
	const xAxisGroup = svg.append('g')
		.attr('class', 'axis x-axis')
		.attr('transform', `translate(0, ${height})`)
		.call(xAxis);

	const yAxisGroup = svg.append('g')
		.attr('class', 'axis y-axis')
		.call(yAxis);

	// Add rectangles
	svg.selectAll('rect')
		.data(data)
		.enter()
	  .append('rect')
		.attr('class', 'bar')
		.attr('width', d => xScale(d.sales))
		.attr('height', yScale.bandwidth())
		.attr('y', d => yScale(d.month))
		.attr('x', 0);
}