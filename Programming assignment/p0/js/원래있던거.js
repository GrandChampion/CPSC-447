const background = d3.select('#vis')
.append('svg')
.attr('width', '500px')
.attr('height', '250px');

// Inserting circles
background.selectAll('circle')
.data(data)
.enter()
.append('circle')
.attr('r', '8px')
.attr('cx', function (element) {
  return 20 + 450 * element['accuracy'];
})
.attr('cy', function (element) {
  return element['trial'] * 50;
})
.attr('fill', 'green')
.attr('fill-opacity', 0.5);

// Using linear scale
let axisStartPosition = d3.scaleLinear()
.range([0, 450])
.domain([0, 1]);

// Insert 6 black x axes
background.selectAll('line')
.data([0, 0.2, 0.4, 0.6, 0.8, 1.0])
.enter()
.append('line')
.attr('x1', accuracy => {
  return 5 + axisStartPosition(accuracy);
})
.attr('x2', accuracy => {
  return axisStartPosition(accuracy) + 5;
})
.attr('y1', 0)
.attr('y2', 250)
.attr('stroke', 'black');

// Labels on the left side of each circle row
background.selectAll('.trial-label-left')
.data([1, 2, 3, 4])
.enter()
.append('text')
.attr('class', 'trial-label-left')
.attr('x', 10) // Adjusted the x position to the left
.attr('y', trial => trial * 50)
.text(trial => "Trial " + trial);


let averageOfTrial1 = getSumOfAccuracy(separateTrial(data)[0]);
let averageOfTrial2 = getSumOfAccuracy(separateTrial(data)[1]);
let averageOfTrial3 = getSumOfAccuracy(separateTrial(data)[2]);
let averageOfTrial4 = getSumOfAccuracy(separateTrial(data)[3]);

// write text at next to first circle row
background.append('text')
.attr('x', 450) // Adjusted the x position to the right
.attr('y', 50)
.text(averageOfTrial1);

// write text at next to first circle row
background.append('text')
.attr('x', 450) // Adjusted the x position to the right
.attr('y', 120)
.text(averageOfTrial2);

// write text at next to first circle row
background.append('text')
.attr('x', 450) // Adjusted the x position to the right
.attr('y', 180)
.text(averageOfTrial3);

// write text at next to first circle row
background.append('text')
.attr('x', 450) // Adjusted the x position to the right
.attr('y', 230)
.text(averageOfTrial4);

// Other labels (Accuracy, Trial/Accuracy Scatterplot, Mean accuracy per trial)
background.append('text')
.attr('x', 0)
.attr('y', 235) // Adjusted the y position for "Accuracy"
.text('Accuracy');

background.append('text')
.attr('x', 0)
.attr('y', 20)
.text('Trial/Accuracy Scatterplot');

background.append('text')
.attr('x', 300)
.attr('y', 20)
.text('Mean accuracy per trial');


// make generic function
// can be more than 4 trials

function separateTrial(myData) {
let trial1 = [];
let trial2 = [];
let trial3 = [];
let trial4 = [];
for (let i = 0; i < data.length; i++) {
  if (data[i].trial == 1) {
    trial1.push(data[i]);
  } else if (data[i].trial == 2) {
    trial2.push(data[i]);
  } else if (data[i].trial == 3) {
    trial3.push(data[i]);
  } else if (data[i].trial == 4) {
    trial4.push(data[i]);
  }
}
return [trial1, trial2, trial3, trial4]
}

console.log(separateTrial(data))

function getSumOfAccuracy(trial) {
let sum1 = 0;
for (let i = 0; i < trial.length; i++) {
  sum1 += parseFloat(trial[i].accuracy);
}
return d3.format(".2f")(sum1 / trial.length);
}

console.log(getSumOfAccuracy(separateTrial(data)[3]))