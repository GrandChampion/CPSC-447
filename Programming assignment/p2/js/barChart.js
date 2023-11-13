class BarChart {


    /**
     * Class constructor with initial configuration
     * @param {Object}
     */
    // Todo: Add or remove parameters from the constructor as needed
    constructor(_config, data) {
        this.config = {
            parentElement: _config.parentElement,
            containerWidth: 240,
            containerHeight: 260,
            margin: {
                top: 30,
                right: 5,
                bottom: 20,
                left: 33
            }
        }
        // Instance variables
        this.data = data;
        this.initVis();
    }

    initVis() {
        let vis = this;

        vis.width = vis.config.containerWidth - vis.config.margin.left - vis.config.margin.right;
        vis.height = vis.config.containerHeight - vis.config.margin.top - vis.config.margin.bottom;

        vis.yScale = d3.scaleLinear()
            .range([vis.height, 0])

        vis.xScale = d3.scaleBand()
            .range([0, vis.width])
            .paddingInner(0.2);

        // x axis
        vis.xAxis = d3.axisBottom(vis.xScale)
            .ticks(['Male', 'Female', 'Non binary'])
            .tickSizeOuter(0);

        // y axis
        vis.yAxis = d3.axisLeft(vis.yScale)
            .ticks(5)
            .tickSizeOuter(0);

        // svg
        vis.svg = d3.select(vis.config.parentElement).append('svg')
            .attr('id', 'bar-chart')
            .attr('width', vis.config.containerWidth)
            .attr('height', vis.config.containerHeight)

        // append title
        vis.svg.append('text')
            .attr('class', 'axis-title')
            .attr('dy', 16)
            .attr('font-weight', 'bold')
            .text('Gender');


        // svg group
        vis.chart = vis.svg.append('g')
            .attr('transform', `translate(${vis.config.margin.left},${vis.config.margin.top})`)

        // empty x axis group
        vis.xAxisG = vis.chart.append('g')
            .attr('class', 'axis x-axis')
            .attr('transform', `translate(0,${vis.height})`);

        // empty y axis group
        vis.yAxisG = vis.chart.append('g')
            .attr('class', 'axis y-axis')

        // bar group
        vis.barG = vis.chart.append('g')
            .attr('id', 'bars')
    }

    updateVis() {
        let vis = this;

        // filtered data
        let aggregatedDataMap = d3.rollups(vis.data, filtered_data => filtered_data.length,
            filter_function => filter_function.gender);
        vis.aggregatedData = Array.from(aggregatedDataMap, ([gender, count]) => ({
            gender, count
        }))

        // set x and y domain
        vis.xScale.domain(vis.aggregatedData.map(d => d.gender));
        vis.yScale.domain([0, d3.max(vis.aggregatedData, d => d.count)]);

        vis.xValue = d => d.gender;

        vis.yValue = d => d.count;

        vis.renderVis();
    }

    renderVis() {
        let vis = this;
        // bar rendering
        let bars = vis.barG.selectAll('.bar')
            .data(vis.aggregatedData, vis.xValue)
            .join('rect')
            .attr('class', 'bar')
            .attr('x', d => vis.xScale(vis.xValue(d)))
            .attr('width', vis.xScale.bandwidth())
            .attr('y', d => vis.yScale(vis.yValue(d)))
            .attr('height', d => vis.height - vis.yScale(vis.yValue(d)))
            .attr('fill', '#AEAECA')
            // what happens when clicked
            .on('click', function (event, clicked_bar) {
                // run filtering function
                filtering_of_bar_chart(clicked_bar);
            })

        // draw x axis
        vis.xAxisG.call(vis.xAxis);
        // draw y axis
        vis.yAxisG.call(vis.yAxis);
    }
}

function filtering_of_bar_chart(bar_entity) {


    // change color
    color_when_unselected = '#AEAECA'
    color_when_selected = '#716f8e'
    var male_bar = document.getElementById('bars').firstElementChild;
    var female_bar = male_bar.nextElementSibling;
    gender_of_clicked_bar = bar_entity.gender


    // if nothing selected
    if (!male_bar_is_clicked && !female_bar_is_clicked) {
        if (gender_of_clicked_bar === 'Male') {
            male_bar.style.fill = color_when_selected;
            filtered_data_by_bar_chart = filtered_data_by_country.filter(d => d.gender === 'Male');
            remainder_data = filtered_data_by_country.filter(d => d.gender === 'Female');
            male_bar_is_clicked = true;
        } else {
            female_bar.style.fill = color_when_selected;
            filtered_data_by_bar_chart = filtered_data_by_country.filter(d => d.gender === 'Female');
            remainder_data = filtered_data_by_country.filter(d => d.gender === 'Male');

            female_bar_is_clicked = true;
        }
    } else { // if at least one selected

        if (male_bar_is_clicked && gender_of_clicked_bar === 'Male') {
            male_bar.style.fill = color_when_unselected;
            filtered_data_by_bar_chart = filtered_data_by_country;
            remainder_data = [];
            //reset
            male_bar_is_clicked = false;

        } else if (female_bar_is_clicked && gender_of_clicked_bar === 'Female') {
            female_bar.style.fill = color_when_unselected;
            female_bar_is_clicked = false;
            filtered_data_by_bar_chart = filtered_data_by_country;
            remainder_data = [];
        } else if (male_bar_is_clicked && gender_of_clicked_bar === 'Female') {
            female_bar.style.fill = color_when_selected;
            male_bar.style.fill = color_when_unselected;
            filtered_data_by_bar_chart = filtered_data_by_country.filter(d => d.gender === 'Female');
            remainder_data = filtered_data_by_country.filter(d => d.gender === 'Male');
            male_bar_is_clicked = false;
            female_bar_is_clicked = true;

        } else if (female_bar_is_clicked && gender_of_clicked_bar === 'Male') {
            female_bar.style.fill = color_when_unselected;
            male_bar.style.fill = color_when_selected;
            filtered_data_by_bar_chart = filtered_data_by_country.filter(d => d.gender === 'Male');
            remainder_data = filtered_data_by_country.filter(d => d.gender === 'Female');
            male_bar_is_clicked = true;
            female_bar_is_clicked = false;
        }
    }

    // update scatter plot
    scatterplot.data = filtered_data_by_bar_chart;
    scatterplot.translucent_data = remainder_data;
    scatterplot.updateVis();

    // update lexis chart
    var linesElement = document.getElementById("lines");
    linesElement.remove();
    lexischart.data = filtered_data_by_bar_chart;
    lexischart.updateVis();

}