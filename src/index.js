// import gkChart from './gkChart.json';
// import uniqueRandomArray from 'unique-random-array'
var gkChart = require('./gkChart.json');
var uniqueRandomArray = require('unique-random-array');

module.exports = {
    all : gkChart,
    random: uniqueRandomArray(gkChart)
}