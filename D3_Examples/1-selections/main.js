d3.select('.sex')
d3.select('.sex').size()
d3.select('.sex').node()

d3.select('.breed').text('Unknown')
d3.select('.name').text('Claudia')

d3.select('tr:nth-child(3) .breed').text('Domestic longhair')

d3.selectAll('.rate').text('5')

d3.select('tr:nth-child(3) .breed')
    .html('<b>Maybe</b>')
    .insert('span', ':first-child')
    .html('So ');

d3.selectAll('tr:nth-child(5)').remove()