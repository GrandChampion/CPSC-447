class Scatterplot {
  constructor(data1) {
    // Create SVG element
    const background = d3.select('#vis')
      .append('svg')
      .attr('width', '500px')
      .attr('height', '250px');

    // Add circles
    background.selectAll('circle')
      .data(data1)
      .enter()
      .append('circle')
      .attr('r', '8px')
      .attr('cx', d => 20 + 450 * d.accuracy)
      .attr('cy', d => d.trial * 50)
      .attr('fill', 'green')
      .attr('fill-opacity', 0.5);

    // Add x axes
    const axisStartPosition = d3.scaleLinear()
      .range([0, 450])
      .domain([0, 1]);

    background.selectAll('line')
      .data([0, 0.2, 0.4, 0.6, 0.8, 1.0])
      .enter()
      .append('line')
      .attr('x1', axisStartPosition)
      .attr('x2', axisStartPosition)
      .attr('y1', 0)
      .attr('y2', 250)
      .attr('stroke', 'black');

    // Add labels on the left side of each circle row
    background.selectAll('.trial-label-left')
      .data([1, 2, 3, 4])
      .enter()
      .append('text')
      .attr('class', 'trial-label-left')
      .attr('x', -10)
      .attr('y', d => d * 50)
      .text(d => `Trial ${d}`);

    // Add labels on the right side of each circle row
    background.selectAll('.trial-label-right')
      .data([1, 2, 3, 4])
      .enter()
      .append('text')
      .attr('class', 'trial-label-right')
      .attr('x', 450)
      .attr('y', d => d * 50)
      .text(d => d);

    // Add other labels
    background.append('text')
      .attr('x', 0)
      .attr('y', 235)
      .text('Accuracy');

    background.append('text')
      .attr('x', 0)
      .attr('y', 10)
      .text('Trial/Accuracy Scatterplot');

    background.append('text')
      .attr('x', 300)
      .attr('y', 10)
      .text('Mean accuracy per trial');

    // Utility functions
    function separateTrial(myData) {
      const trial1 = [];
      const trial2 = [];
      const trial3 = [];
      const trial4 = [];

      for (let i = 0; i < myData.length; i++) {
        const trial = myData[i].trial;

        switch (trial) {
          case 1:
            trial1.push(myData[i]);
            break;
          case 2:
            trial2.push(myData[i]);
            break;
          case 3:
            trial3.push(myData[i]);
            break;
          case 4:
            trial4.push(myData[i]);
            break;
          default:
            break;
        }
      }

      return [trial1, trial2, trial3, trial4];
    }

    function getSumOfAccuracy(trial) {
      let sum = 0;
      for (let i = 0; i < trial.length; i++) {
        sum += parseFloat(trial[i].accuracy);
      }
      return d3.format('.2f')(sum / trial.length);
    }

    // Log the results
    console.log(separateTrial(data1));
    console.log(getSumOfAccuracy(separateTrial(data1)[3]));
    let meanTrial1 = getSumOfAccuracy(separateTrial(data1)[0]);
  }
}