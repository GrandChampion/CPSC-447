// Initialize helper function to convert date strings to date objects
const parseTime = d3.timeParse("%Y-%m-%d");

//Load data from CSV file asynchronously and render chart
d3.csv('data/disaster_costs.csv').then(data => {
  data.forEach(d => {
    d.cost = +d.cost;
    d.year = +d.year;
    d.date = parseTime(d.mid);
    // Optional: other data preprocessing steps
    // Extract month and day
    d.monthAndDay = d3.timeFormat("%m-%d")(d.date);
    // Make into number
    d.monthAndDay = Number(d.monthAndDay.replace("-", "."));
    floatingPoint = d.monthAndDay - Math.floor(d.monthAndDay);
    d.monthAndDay = d.monthAndDay - floatingPoint + (1.0 / 31.0) * floatingPoint;

    // Category of natural disaster
    d.disasterCategory = d.category
    // Name of natural disaster
    d.disasterName = d.name
  });

  const timeline = new Timeline({
    parentElement: '#vis',
  }, data);
});