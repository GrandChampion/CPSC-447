/**
 * Load data from CSV file asynchronously and visualize it
 */
d3.csv('data/experiment_data.csv')
  .then(data => {

    // Todo: Preprocess data and show chart
    console.log(data)
    const scatterplot = new Scatterplot(data)
  })
  .catch(error => console.error(error));
