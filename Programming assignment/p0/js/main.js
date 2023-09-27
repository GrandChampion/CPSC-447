/**
 * Load data from CSV file asynchronously and visualize it
 */
d3.csv('data/experiment_data.csv')
  .then(csvData => {
    csvData.forEach(row => {
      row.trial = +row.trial
      row.accuracy = +row.accuracy
    })

    const scatterplot = new Scatterplot(csvData)
    // scatterplot.updateVis()
  }).catch(e => { console.log(e) })