class LexisChart {

    /**
     * Class constructor with initial configuration
     * @param {Object}
     */
    // Todo: Add or remove parameters from the constructor as needed
    constructor(_config, data) {
        this.config = {
            parentElement: _config.parentElement,
            containerWidth: 1000,
            containerHeight: 380,
            margin: {
                top: 20,
                right: 15,
                bottom: 20,
                left: 30
            }
        }
        this.initVis();
        this.data = data;
        this.unclicked_data = [];
    }

    initVis() {
        let vis = this;


        // calculate the size of the scatterplot
        vis.width = vis.config.containerWidth - vis.config.margin.left - vis.config.margin.right;
        vis.height = vis.config.containerHeight - vis.config.margin.top - vis.config.margin.bottom;

        // set range for x in the screen (monitor)
        vis.xScale = d3.scaleLinear()
            .range([0, vis.width]);

        // set range for y in the screen (monitor)
        vis.yScale = d3.scaleLinear()
            .range([vis.height, 0]);

        // set x axis
        vis.xAxis = d3.axisBottom(vis.xScale)
            .ticks(5)
            .tickSize(-10)
            .tickPadding(10);

        // set y axis
        vis.yAxis = d3.axisLeft(vis.yScale)
            .ticks(5)
            .tickSize(-10)
            .tickPadding(10);

        // append svg tag
        vis.svg = d3.select(vis.config.parentElement).append('svg')
            .attr('id', 'lexis-chart')
            .attr('width', vis.config.containerWidth)
            .attr('height', vis.config.containerHeight);

        // append chart group
        vis.chart = vis.svg.append('g')
            .attr('transform', `translate(${vis.config.margin.left},${vis.config.margin.top})`);

        // append x group
        vis.xAxisG = vis.chart.append('g')
            .attr('class', 'axis x-axis')
            .attr('transform', `translate(0,${vis.height})`)

        // append y group
        vis.yAxisG = vis.chart.append('g')
            .attr('class', 'axis y-axis')

        // Explanation of x axis
        vis.chart.append('text')
            .attr('class', 'axis-title')
            .attr('y', vis.height - 15)
            .attr('x', vis.width + 10)
            .attr('dx', '.4em')
            .attr('dy', '1em')
            .style('font-family', 'Noto Sans JP')
            .style('text-anchor', 'end')
            .style('font-weight', 'bold')
            .text('Year');

        // Explanation of y axis
        vis.chart.append('text')
            .attr('class', 'axis-title')
            .attr('x', 0)
            .attr('y', 0)
            .attr('dx', '-0.9em')
            .attr('dy', '0.1em')
            .style('font-weight', 'bold')
            .text('Age');

        // for creating arrow head (snake head)
        vis.createMarkerEnds();

    }

    updateVis() {
        let vis = this;

        // variable for not clicked data
        vis.unclicked_data = vis.data.filter(d => d.leader != clicked_data.leader);

        // append line group
        vis.lineG = vis.chart.append('g')
            .attr('id', 'lines');


        // getter function to get the start year
        vis.startYear = function (d) {
            return d.start_year;
        }
        // getter function to get the end year
        vis.endYear = function (d) {
            return d.end_year;
        }

        // getter function to get the start age
        vis.startAge = function (d) {
            return d.start_age;
        }
        // getter function to get the end age
        vis.endAge = function (d) {
            return d.end_age;
        }

        // domain of x axis
        vis.xScale.domain([1920, 2020]);

        // domain of y axis
        vis.yScale.domain([10, 100]);

        // go to next step
        vis.renderVis();
    }

    renderVis() {
        let vis = this;
        // variable for not clicked data and also label is 1
        let labled_data = vis.data.filter(d => d.label == 1 || clicked_data.includes(d));

        // add texts to line group
        // It should be line group, because text is part of line
        const texts = vis.lineG.selectAll('.text')
            .data(labled_data, d => d.leader)
            .join('text')
            .attr('class', 'text')
            .text(d => d.leader)
            .attr('transform', d => `translate(${vis.xScale(vis.startYear(d)) + 10},${vis.yScale(vis.startAge(d)) - 10}) rotate(-23)`)
            .style('font-family', 'Noto Sans JP')

        // adding arrow to line group
        const lines = vis.lineG.selectAll('.line')
            .data(vis.data, d => d.leader)
            .join('line')
            .attr('class', 'arrow')
            .attr('x1', d => vis.xScale(vis.startYear(d)))
            .attr('x2', d => vis.xScale(vis.endYear(d)))
            .attr('y1', d => vis.yScale(vis.startAge(d)))
            .attr('y2', d => vis.yScale(vis.endAge(d)))
            .attr('marker-end', 'url(#arrow-head)')
            .attr('stroke-width', 3)
            .attr('stroke', d => '#ddd');

        // Code to decide color of arrow when rendering
        lines.each(function (d) {
            if (d.label == 1 && clicked_data.includes(d)) {
                // when labeled data is clicked and is clicked
                d3.select(this)
                    .attr('stroke', '#e89f03')
                    .attr('marker-end', 'url(#arrow-head-highlighted-selected)')
                    .raise()
            } else if (d.label == 1 && !clicked_data.includes(d)) {
                // when labeled data is not clicked and is not clicked
                d3.select(this)
                    .attr('stroke', '#aeaeca')
                    .attr('marker-end', 'url(#arrow-head-highlighted)')
                    .raise()
            } else if (d.label == 0 && clicked_data.includes(d)) {
                // when labeled data is not clicked and is clicked
                d3.select(this)
                    .attr('stroke', '#e89f03')
                    .attr('marker-end', 'url(#arrow-head-highlighted-selected)')
                    .raise()
            }
            else if (d.label == 0 && !clicked_data.includes(d)) {
                // when labeled data is not clicked and is not clicked
                d3.select(this)
                    .attr('stroke', '#ddd')
                    .attr('marker-end', 'url(#arrow-head)')
                    .lower()
            }
        })

        // Code for clicking arrow
        lines.on('click', function (event, clicked_line) {

            if (clicked_line.label == 1 && clicked_data.includes(clicked_line)) {

                d3.select(this)
                    .attr('stroke', '#aeaeca')
                    .attr('marker-end', 'url(#arrow-head-highlighted)')
                    .raise();
                // remove from clicked_data
                clicked_data.splice(clicked_data.indexOf(clicked_line), 1);
            } else if (clicked_line.label == 1 && !clicked_data.includes(clicked_line)) {
                d3.select(this)
                    .attr('stroke', '#e89f03')
                    .attr('marker-end', 'url(#arrow-head-highlighted-selected)')
                    .raise();

                // add to clicked_data
                clicked_data.push(clicked_line);

            } else if (clicked_line.label == 0 && clicked_data.includes(clicked_line)) {
                d3.select(this)
                    .attr('stroke', '#ddd')
                    .attr('marker-end', 'url(#arrow-head)')
                    .lower();
                clicked_data.splice(clicked_data.indexOf(clicked_line), 1);
            }
            else if (clicked_line.label == 0 && !clicked_data.includes(clicked_line)) {
                d3.select(this)
                    .attr('stroke', '#e89f03')
                    .attr('marker-end', 'url(#arrow-head-highlighted-selected)')
                    .raise();
                clicked_data.push(clicked_line);
            }

            // update lexis chart
            var linesElement = document.getElementById("lines");
            linesElement.remove();
            lexischart.updateVis();
            scatterplot.updateVis();
        })





        // function to convert from float to integer
        const to_integer = d3.format('.0f');

        // Code on making tool tip
        lines.on('mouseover', function (event, d) {
            d3.select('#tooltip')
                .style('display', 'block')
                .style('left', (event.pageX) + 'px')
                .style('top', (event.pageY) + 'px')
                .html(`
            <div class="tooltip-title">${d.leader}</div>
              <div><i>${d.country}, ${d.start_year}-${d.end_year}</i></div>
              <ul>
                <li>Age at inauguration: ${d.start_age}</li>
                <li>Time in office: ${d.duration}</li>
                <li>GDP/capita: ${to_integer(d.pcgdp)}</li>`)

            // emphasize the line
            d3.select(this)
                .attr('stroke', '#888')
                .attr('marker-end', 'url(#arrow-head-hovered)');
        }).on('mouseleave', () => {
            // tool tip disappears
            d3.select('#tooltip').style('display', 'none');

            // de-emphasize the line based on the clicked_data and label
            lines.each(function (d) {
                if (d.label == 1 && clicked_data.includes(d)) {
                    // when labeled data is clicked and is clicked
                    d3.select(this)
                        .attr('stroke', '#e89f03')
                        .attr('marker-end', 'url(#arrow-head-highlighted-selected)')
                        .raise()
                } else if (d.label == 1 && !clicked_data.includes(d)) {
                    // when labeled data is not clicked and is not clicked
                    d3.select(this)
                        .attr('stroke', '#aeaeca')
                        .attr('marker-end', 'url(#arrow-head-highlighted)')
                        .raise()
                } else if (d.label == 0 && clicked_data.includes(d)) {
                    // when labeled data is not clicked and is clicked
                    d3.select(this)
                        .attr('stroke', '#e89f03')
                        .attr('marker-end', 'url(#arrow-head-highlighted-selected)')
                        .raise()
                }
                else if (d.label == 0 && !clicked_data.includes(d)) {
                    // when labeled data is not clicked and is not clicked
                    d3.select(this)
                        .attr('stroke', '#ddd')
                        .attr('marker-end', 'url(#arrow-head)')
                        .lower()
                }
            })

        });



        // draw x axis
        vis.xAxisG
            .call(vis.xAxis)
            .call(g => g.select('.domain').remove());

        // draw y axis
        vis.yAxisG
            .call(vis.yAxis)
            .call(function (g) {
                return g.select('.domain').remove();
            })

    }

    // snake head
    /**
     * Create all of the different arrow heads.
     * Styles: default, hover, highlight, highlight-selected
     * To switch between these styles you can switch between the CSS class.
     * We populated an example css class with how to use the marker-end attribute.
     * See link for more info.
     * https://observablehq.com/@stvkas/interacting-with-marker-ends
     */
    createMarkerEnds() {
        let vis = this;
        // Default arrow head
        // id: arrow-head
        vis.chart.append('defs').append('marker')
            .attr('id', 'arrow-head')
            .attr('markerUnits', 'strokeWidth')
            .attr('refX', '2')
            .attr('refY', '2')
            .attr('markerWidth', '10')
            .attr('markerHeight', '10')
            .attr('orient', 'auto')
            .append('path')
            .attr('d', 'M0,0 L2,2 L 0,4')
            .attr('stroke', '#ddd')
            .attr('fill', 'none');

        // Hovered arrow head
        // id: arrow-head-hovered
        vis.chart.append('defs').append('marker')
            .attr('id', 'arrow-head-hovered')
            .attr('markerUnits', 'strokeWidth')
            .attr('refX', '2')
            .attr('refY', '2')
            .attr('markerWidth', '10')
            .attr('markerHeight', '10')
            .attr('orient', 'auto')
            .append('path')
            .attr('d', 'M0,0 L2,2 L 0,4')
            .attr('stroke', '#888')
            .attr('fill', 'none');

        // Highlight arrow head
        // id: arrow-head-highlighted
        vis.chart.append('defs').append('marker')
            .attr('id', 'arrow-head-highlighted')
            .attr('markerUnits', 'strokeWidth')
            .attr('refX', '2')
            .attr('refY', '2')
            .attr('markerWidth', '10')
            .attr('markerHeight', '10')
            .attr('orient', 'auto')
            .append('path')
            .attr('d', 'M0,0 L2,2 L 0,4')
            .attr('stroke', '#aeaeca')
            .attr('fill', 'none');

        // Highlighted-selected arrow head
        // id: arrow-head-highlighted-selected
        vis.chart.append('defs').append('marker')
            .attr('id', 'arrow-head-highlighted-selected')
            .attr('markerUnits', 'strokeWidth')
            .attr('refX', '2')
            .attr('refY', '2')
            .attr('markerWidth', '10')
            .attr('markerHeight', '10')
            .attr('orient', 'auto')
            .append('path')
            .attr('d', 'M0,0 L2,2 L 0,4')
            .attr('stroke', '#e89f03')
            .attr('fill', 'none');
    }
}


