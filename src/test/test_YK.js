const jsCal = require('../jscal')
var fs = require('fs');
var file = fs.createWriteStream('arrayYK.txt');
var dates = []
var months = {  1 : "January",
  2: "February",
  3: "March",
  4: "April",
  5: "May",
  6: "June",
  7: "July",
  8: "August",
  9: "September",
  10: "October",
  11: "November",
  12: "December"
}

for(let year = 2018;year<=2038;year++){
date = jsCal.gregorian_from_fixed(jsCal.yom_kippur(year))
//console.log(date);
dates.push(date)
file.on('error', function(err) { console.log(err); });
file.write(date.year+ '\t\t' + months[date.month] + ' '+ date.day+'\n');
}
file.end()
