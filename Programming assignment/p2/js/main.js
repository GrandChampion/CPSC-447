/**
 * Load data from CSV file asynchronously and render charts
 */

// Global variables
let barchart, scatterplot, lexischart;
var original_data;
var filtered_data_by_country;

// Lexis chart and scatterplot's clicked data
var clicked_data = [];

// Indicator if the bar is clicked or not
var male_bar_is_clicked = false;
var female_bar_is_clicked = false;

d3.csv('data/leaderlist.csv').then(data => {

    data.forEach(d => {
        Object.keys(d).forEach(attr => {
            if (attr == 'pcgdp') {
                d[attr] = (d[attr] == 'NA') ? null : +d[attr];
            } else if (attr != 'country' && attr != 'leader' && attr != 'gender') {
                d[attr] = +d[attr];
            }
        });
    });

    data.sort((a, b) => a.label - b.label);

    // save original data initially
    original_data = data;


    // Global filter
    // filter data  whose duration is greater than 0
    original_data = original_data.filter(d => d.duration > 0);

    // default when starting is oecd
    filtered_data_by_country = original_data.filter(d => d.oecd == 1);

    // Initialize bar chart
    barchart = new BarChart({ parentElement: '#barchart' }, filtered_data_by_country);
    barchart.updateVis();

    // Initialize scatterplot
    scatterplot = new ScatterPlot({ parentElement: '#scatterplot' }, filtered_data_by_country)
    scatterplot.updateVis();

    // Initialize lexis chart
    lexischart = new LexisChart({ parentElement: '#lexischart' }, filtered_data_by_country)
    lexischart.updateVis();

}).catch(error => console.error(error)); // catching error if wrong

// Global filter
// what happens if the country selector is changed
d3.selectAll('#country-selector').on('change', function () {
    if (this.value === 'oecd') {
        filtered_data_by_country = original_data.filter(d => d.oecd == 1);
        clicked_data = [];
    } else if (this.value === 'eu27') {
        filtered_data_by_country = original_data.filter(d => d.eu27 == 1);
        clicked_data = [];
    } else if (this.value === 'brics') {
        filtered_data_by_country = original_data.filter(d => d.brics == 1);
        clicked_data = [];
    } else if (this.value === 'gseven') {
        filtered_data_by_country = original_data.filter(d => d.gseven == 1);
        clicked_data = [];
    } else if (this.value === 'gtwenty') {
        filtered_data_by_country = original_data.filter(d => d.gtwenty == 1);
        clicked_data = [];
    }

    // reset bar chart
    barchart.male_bar_is_clicked = false;
    barchart.female_bar_is_clicked = false;

    var male_bar = document.getElementById('bars').firstElementChild;
    var female_bar = male_bar.nextElementSibling;

    male_bar.style.fill = '#AEAECA';
    female_bar.style.fill = '#AEAECA';

    // updata bar chart
    barchart.data = filtered_data_by_country;
    barchart.updateVis();

    // update scatterplot
    scatterplot.data = filtered_data_by_country;
    scatterplot.updateVis();

    // update lexis chart
    var linesElement = document.getElementById("lines"); // need this code to remove the arrows
    linesElement.remove();
    lexischart.data = filtered_data_by_country;
    lexischart.updateVis();
});

