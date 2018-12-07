console.log('Hello from JavaScript! Update with webpack.config.js.');


// var moment = require('moment');
// ES2015 import instead of require
import moment from 'moment';

let fromNow = moment().startOf('day').fromNow();        // 20 hours ago
console.log('fromNow: ' + fromNow);

// test ES2015 transpilation with babel (template string)
let name = 'Dmitriy';
let time = 'today';
console.log(`Hello ${name}, how are you ${time}?`); // string has to be with tildas, not quotes!