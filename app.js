// npm: node package manager contains different open source code for us to use.
// modules, packages, dependencies are refer to pacakge itself.

// We start from package.json [A manifest file to give information about the project]

const _ = require('lodash');

const items = [12,[23,[54,67,[9]]]]; // Nested Array

const flattenedArray = _.flattenDeep(items);
console.log(flattenedArray);
console.log("Node is running to look for our changes");