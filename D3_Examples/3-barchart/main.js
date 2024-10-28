//Define data
let data = [
  { name: 'Rainne'    , rating: 8 },
  { name: 'Buddy'    , rating: 7 },
  { name: 'Paddy'   , rating: 3 },
  { name: 'Sticky', rating: 9 },
  { name: 'Midnight'  , rating: 5 },
  { name: 'Leo'  , rating: 6 }
];

let 
  width = 600,
  height = 400;

let margin = {
  top:30,
  bottom: 50,
  left: 50,
  right:30
}

// Make a canvas for the picture
let svg = d3.select('body')
            .append('svg')
            .attr('width', width)
            .attr('height', height)
            .style('background', 'lightyellow')

// Define the scale
let yScale = d3.scaleLinear() // for the continous data
              .domain([0,10]) //the data
              .range([height - margin.bottom, margin.top])

let xScale = d3.scaleBand()
              .domain(data.map(d => d.name))
              .range([margin.left, width - margin.right])
              .padding(0.5);

// Draw the axis
let yAxis = svg.append('g')
            .call(d3.axisLeft().scale(yScale))
            .attr('transform', `translate(${margin.left},0)`)

let xAxis  = svg.append('g')
            .call(d3.axisBottom().scale(xScale))
            .attr('transform', `translate(0,${height-margin.bottom})`)

//Draw the labels

svg.append('text')
  .attr('x', width/2)
  .attr('y', height - 15)
  .text('Name')
  .style('text-anchor', 'middle')

svg.append('text')
  .attr('x', 0 - height/2)
  .attr('y', 25)
  .text('Rating')
  .attr('transform', 'rotate(-90)')

//Draw the bars
bar = svg.selectAll('rect')
      .data(data)
      .enter()
      .append('rect')
      .attr('x', d => xScale(d.name))
      .attr('y', d => yScale(d.rating))
      .attr('width', xScale.bandwidth())
      .attr('height', d => height - margin.bottom - yScale(d.rating))
      .attr('fill', 'darkblue')

