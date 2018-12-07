console.log('Hello from JavaScript! Update with webpack.config.js.');


var moment = require('moment');

let fromNow = moment().startOf('day').fromNow();        // 20 hours ago
console.log('fromNow: ' + fromNow);