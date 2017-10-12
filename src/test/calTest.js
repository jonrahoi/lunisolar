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
    const fixed = jsCal.fixed_from_gregorian(jsCal.gregorian_date(year*1, jsCal.JANUARY, 1))
    return {
        "fixed" : fixed,
        "diwali" : jsCal.gregorian_from_fixed(jsCal.diwali(year)),
        "easter" : jsCal.gregorian_from_fixed(jsCal.easter(year)),
        "yom_kippur" : jsCal.gregorian_from_fixed(jsCal.yom_kippur(year)),
        "passover" : jsCal.gregorian_from_fixed(jsCal.passover(year)),
        "chinese_new_year" : jsCal.gregorian_from_fixed(jsCal.chinese_new_year(year)),
        "chinese_ny_name" : jsCal.chinese_year_name(year),
        "qing_ming" : jsCal.gregorian_from_fixed(jsCal.qing_ming(year)),
        "independence_day" : jsCal.gregorian_from_fixed(jsCal.independence_day(year)),
        "advent" : jsCal.gregorian_from_fixed(jsCal.advent(year)),
        "christmas" : jsCal.gregorian_from_fixed(jsCal.christmas(year)),
        "epiphany" : jsCal.gregorian_from_fixed(jsCal.epiphany(year)),
        "daylight_saving_start" : jsCal.gregorian_from_fixed(jsCal.daylight_saving_start(year)),
        "daylight_saving_end" : jsCal.gregorian_from_fixed(jsCal.daylight_saving_end(year)),
        "hindu_lunar_year" : jsCal.hindu_lunar_from_fixed(fixed),
        "old_hindu_lunar_year" : jsCal.old_hindu_lunar_from_fixed(fixed)
    }
}

console.log(`cli.year = ${cli.year}`)
console.log(getAllHolidaysForYear(cli.year))