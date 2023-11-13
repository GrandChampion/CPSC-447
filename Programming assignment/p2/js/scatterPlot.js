class ScatterPlot {

    /**
     * Class constructor with basic chart configuration
     * @param {Object}
     */
    // Todo: Add or remove parameters from the constructor as needed
    constructor(_config, data) {
        this.config = {
            parentElement: _config.parentElement, containerWidth: 720, containerHeight: 260,
            margin: {
                top: 30, right: 15, bottom: 20, left: 30
            }, tooltipPadding: _config.tooltipPadding || 15
            // Todo: Add or remove attributes from config as needed
        }

        this.data = data;
        this.translucent_data = [];


        this.initVis();
    }

    initVis() {
        let vis = this;
        // Todo: Create SVG area, chart, initialize scales and axes, add titles, etc

        // calculate the width and height of the chart
        vis.width = vis.config.containerWidth - vis.config.margin.left - vis.config.margin.right;
        vis.height = vis.config.containerHeight - vis.config.margin.top - vis.config.margin.bottom;

        // range of x axis
        vis.xScale = d3.scaleLinear()
            .range([0, vis.width]);

        // range of y axis
        vis.yScale = d3.scaleLinear()
            .range([vis.height, 0]);

        // set x axis
        vis.xAxis = d3.axisBottom(vis.xScale)
            .ticks(5)
            .tickSize(-vis.height - 10)
            .tickPadding(10);

        // set y axis
        vis.yAxis = d3.axisLeft(vis.yScale)
            .ticks(5)
            .tickSize(-vis.width - 10)
            .tickPadding(10);

        // svg
        vis.svg = d3.select(vis.config.parentElement).append('svg')
            .attr('id', 'scatter-plot')
            .attr('width', vis.config.containerWidth)
            .attr('height', vis.config.containerHeight);

        // chart group
        vis.chart = vis.svg.append('g')
            .attr('transform', `translate(${vis.config.margin.left},${vis.config.margin.top})`);

        vis.xAxisG = vis.chart.append('g')
            .attr('class', 'axis x-axis')
            .attr('transform', `translate(0,${vis.height})`)
            .attr('opacity', 0.5);

        vis.yAxisG = vis.chart.append('g')
            .attr('class', 'axis y-axis')
            .attr('opacity', 0.5);

        vis.chart.append('text')
            .attr('class', 'axis-title')
            .attr('y', vis.height - 15)
            .attr('x', vis.width + 10)
            .attr('dx', '.4em')
            .attr('dy', '1em')
            .style('font-family', 'Noto Sans JP')
            .style('text-anchor', 'end')
            .style('font-weight', 'bold')
            .text('GDP per capita (USD)');

        vis.chart.append('text')
            .attr('class', 'axis-title')
            .attr('x', 0)
            .attr('y', 0)
            .attr('dx', '-0.9em')
            .attr('dy', '0.1em')
            .style('font-weight', 'bold')
            .text('Age');

        vis.circleG = vis.chart.append('g')
            .attr('id', 'circles');
        vis.translucent_circleG = vis.chart.append('g')
            .attr('id', 'translucent-circles');

    }

    updateVis() {
        let vis = this;
        vis.xValue = function (d) {
            return d.pcgdp;
        }

        vis.yValue = function (d) {
            return d.start_age;
        }

        vis.xScale.domain([0, d3.max(vis.data, vis.xValue)]);

        vis.yScale.domain([10, 100]);

        vis.renderVis();

    }

    renderVis() {
        let vis = this;
        // filter not null
        vis.data = vis.data.filter(d => d.pcgdp != null);
        vis.translucent_data = vis.translucent_data.filter(d => d.pcgdp != null);


        // adding circles
        const circles = vis.circleG.selectAll('.point')
            .data(vis.data, d => d.leader)
            .join('circle')
            .attr('class', 'point')
            .attr('r', '5px')
            .attr('opacity', 0.5)
            .attr('cy', d => vis.yScale(vis.yValue(d)))
            .attr('cx', d => vis.xScale(vis.xValue(d)))
            // if data is included in clicked_data, change color
            .attr('fill', d => {
                if (clicked_data.includes(d)) {
                    return '#e89f03';
                } else {
                    return '#1f77b4';
                }
            });

        // what happens when clicked
        circles.on('click', function (event, clicked_circle) {

            if (clicked_data.includes(clicked_circle)) {

                d3.select(this).attr('fill', '#1f77b4');
                clicked_data.splice(clicked_data.indexOf(clicked_circle), 1);
            } else {
                d3.select(this).attr('fill', '#e89f03');
                clicked_data.push(clicked_circle);
            }

            var linesElement = document.getElementById("lines");
            linesElement.remove();
            lexischart.updateVis();
        })


        // semi transparent circles
        const translucent_circles = vis.translucent_circleG.selectAll('.translucentPoint')
            .data(vis.translucent_data, d => d.leader)
            .join('circle')
            .attr('class', 'translucentPoint')
            .attr('r', '5px')
            .attr('opacity', 0.1)
            .attr('cy', d => vis.yScale(vis.yValue(d)))
            .attr('cx', d => vis.xScale(vis.xValue(d)));


        const to_integer = d3.format('.0f');

        // tooltip
        circles.on('mouseover', function (event, d) {

            // change the color of the circle
            d3.select(this).attr('opacity', 1);

            d3.select('#tooltip')
                .style('display', 'block')
                .style('left', (event.pageX + vis.config.tooltipPadding) + 'px')
                .style('top', (event.pageY + vis.config.tooltipPadding) + 'px')
                .html(`
            <div class="tooltip-title">${d.leader}</div>
              <div><i>${d.country}, ${d.start_year}-${d.end_year}</i></div>
              <ul>
                <li>Age at inauguration: ${d.start_age}</li>
                <li>Time in office: ${d.duration}</li>
                <li>GDP/capita: ${to_integer(d.pcgdp)}</li>`)
        }).on('mouseleave', () => {
            // change color back
            circles.attr('opacity', 0.5);

            d3.select('#tooltip').style('display', 'none');
        });

        // Actually, draw axes
        vis.xAxisG
            .call(vis.xAxis)
            .call(g => g.select('.domain').remove());

        vis.yAxisG
            .call(vis.yAxis)
            .call(function (g) {
                return g.select('.domain').remove();
            })
    }

}