const { it } = exports.lab = require('lab').script();
const Code = require('code');
const expect = Code.expect;
const moment = require('moment')
const fs = require('fs');
const {getAllHolidaysForYear, holidays} = require('../holidays')
const testFolder = './src/test/testData/'
const testResultFolder = './src/test/testResults/'

const mapping = {
  "chinese_new_year.txt" : 'Chinese New Year',
  "diwali.txt" : 'Diwali',
  "dragon_boat.txt" : 'Dragon Boat Festival',
  "easter.txt" : 'Easter',
  "gudi_padwa.txt" : 'Gudi Padwa',
  "hanukkah.txt" : 'Hanukkah',
  "holi.txt" : 'Holi',
  "laborday.txt" : 'Labor Day',
  "lag_baomer.txt" : 'Lag BaOmer',
  "lantern_festival.txt" : 'Lantern Festival',
  "longtaitou.txt" : 'Longtaitou Festival',
  "maha_shivaratri.txt" : 'Maha Shivaratri',
  "mahavir_jayanti.txt" : 'Mahavir Jayanti',
  "passover.txt" : 'Passover',
  "purim.txt" : 'Purim',
  "qing_ming.txt" : 'Qingming',
  "qixi.txt" : 'Qixi Festival',
  "rama_navami.txt" : 'Rama Navami',
  "rosh_hashanah.txt" : 'Rosh Hashanah',
  "shavuot.txt" : 'Shavuot',
  "spirit.txt" : 'Ghost Festival',
  "sukkot.txt" : 'Sukkot',
  "tu_bishavat.txt" : 'Tu BiShvat',
  "vasant_panchami.txt" : 'Vasant Panchami',
  "yom_haatzmaut.txt" : 'Yom HaAtzmaut',
  "yom_kippur.txt" : 'Yom Kippur'
}

fs.readdirSync(testFolder).forEach(file => {
  if (file.indexOf('.txt') !== -1){
    fs.writeFileSync(`${testResultFolder}${file.replace('.txt','_result.txt')}`, 'dateFromInternet :::::::: dateFromCode\n\n')
    const data = fs.readFileSync(`${testFolder}${file}`).toString()
    it (`holiday test: ${file}`, () => {
      let dataarray = data.split('\n');
      const memberName = mapping[file]

      dataarray.forEach(d=>{
        if (d !== ''){
          const dateFromInternet = moment(d, 'YYYY MMM D')
          const holidayDate = holidays[memberName](dateFromInternet.year()).date
          const dateFromCode = moment(`${holidayDate.month}-${holidayDate.day}-${holidayDate.year}`, 'M-D-YYYY')
          fs.writeFileSync(`${testResultFolder}${file.replace('.txt','_result.txt')}`, `${dateFromInternet} :::::::: ${dateFromCode}\n`,{'flag': 'a'})
          expect(dateFromInternet.isSame(dateFromCode, 'day')).to.equal(true)
        }
      })

    })
  }
})
