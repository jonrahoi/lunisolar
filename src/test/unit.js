const { it } = exports.lab = require('lab').script();
const Code = require('code');
const expect = Code.expect;
const moment = require('moment')
const fs = require('fs');
const {getAllHolidaysForYear, holidays} = require('../holidays')

it('holiday test', () => {
  fs.readFile('./src/test/testData/spirit.txt', 'utf8', function (err, data) {
    let dataarray = data.split('\n');
    dataarray.forEach(d=>{
      if(d!==""){
        const dateFromInternet = moment(d, 'YYYY MMM D')
        const holidayDate = holidays['Ghost Festival'](dateFromInternet.year()).date
        const dateFromCode = moment(`${holidayDate.month}-${holidayDate.day}-${holidayDate.year}`, 'M-D-YYYY')
        console.log(`${dateFromCode}  ::::  ${dateFromInternet}`);
        expect(dateFromInternet.isSame(dateFromCode, 'day')).to.equal(true)
      }
    })
  })
})
