const jsCal = require('../jscal')
const nopt = require('nopt')

const knownOpts = {
    year : Number
}
const shortHands = {
    y : ['--year']
}
const cli = nopt(knownOpts, shortHands, process.argv, 2)

const getAllHolidaysForYear = (year, options) => {
    // generate the entire blob
    const fixed = jsCal.fixed_from_gregorian(jsCal.gregorian_date(year, jsCal.JANUARY, 1))
    return {

        "Roman":{
          "epiphany" : jsCal.gregorian_from_fixed(jsCal.epiphany(year)),
          "independence_day" : jsCal.gregorian_from_fixed(jsCal.independence_day(year)),
          "easter" : jsCal.gregorian_from_fixed(jsCal.easter(year)),
          "christmas" : jsCal.gregorian_from_fixed(jsCal.christmas(year))
        },
        "Hindu": {
          "diwali" : jsCal.gregorian_from_fixed(jsCal.diwali(year))
        },
        "Islamic": {
          "start_of_ramadan" : jsCal.gregorian_from_fixed(jsCal.islamic_in_gregorian(9, 1, year)),
          "end_of_ramadan" : jsCal.gregorian_from_fixed(jsCal.islamic_in_gregorian(10, 1, year)-1),
          "miwlid_an_nabi" : jsCal.gregorian_from_fixed(jsCal.miwlid_an_nabi(year))
        },
        "Hebrew": {
          "yom_kippur" : jsCal.gregorian_from_fixed(jsCal.yom_kippur(year)),
          "passover" : jsCal.gregorian_from_fixed(jsCal.passover(year)),
          "advent" : jsCal.gregorian_from_fixed(jsCal.advent(year))
        },
        "Chinese": {
          "chinese_new_year" : jsCal.gregorian_from_fixed(jsCal.chinese_new_year(year)),
          "chinese_ny_name" : jsCal.chinese_year_name(year),
          "qing_ming" : jsCal.gregorian_from_fixed(jsCal.qing_ming(year))
        }
    }
}

// console.log(`cli.year = ${cli.year}`)
// console.log(getAllHolidaysForYear(cli.year))

module.exports = getAllHolidaysForYear
