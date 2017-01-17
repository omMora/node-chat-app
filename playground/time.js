var moment = require('moment');

// Jan 1st 1970 00:00:00 am

// var date = new Date();
// console.log(date.getMonth());
var createdAt = 1236548;
var date = moment(createdAt);
console.log(date.format('MMM Do, YYYY'));

// 10:35 am
// 6:01 am
console.log(date.format('h:mm a'));
