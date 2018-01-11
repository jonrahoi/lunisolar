const { it } = exports.lab = require('lab').script();
const Code = require('code');
const expect = Code.expect;
const moment = require('moment')
const fs = require('fs');
const {getAllHolidaysForYear, holidays} = require('../holidays')
const testFolder = './testData/'

const mapping = {
  "spirit.txt" : 'Ghost Festival'
}

fs.readdirSync(testFolder).forEach(file => {
    if (file.indexOf('.txt') !== -1){
        const data = fs.readFileSync(`${testFolder}${file}`).toString()
        it (`holiday test: ${file}`, () => {
          let dataarray = data.split('\n');
          const memberName = mapping[file]

          dataarray.forEach(d=>{
            if (d !== ''){
              const dateFromInternet = moment(d, 'YYYY MMM D')
              const holidayDate = holidays[memberName](dateFromInternet.year()).date
              const dateFromCode = moment(`${holidayDate.month}-${holidayDate.day}-${holidayDate.year}`, 'M-D-YYYY')
              console.log(`${dateFromCode}  ::::  ${dateFromInternet}`);
              expect(dateFromInternet.isSame(dateFromCode, 'day')).to.equal(true)
              done()
            }
          })

        })
    }
})
