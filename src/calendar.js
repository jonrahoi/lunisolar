const jsCal = require('./jscal')
const nopt = require('nopt')
const moment = require('moment')

const knownOpts = {
  year : Number
}
const shortHands = {
  y : ['--year']
}
const cli = nopt(knownOpts, shortHands, process.argv, 2)

const holidays = {
  "epiphany" : (year) => {
    return {
      date : jsCal.gregorian_from_fixed(jsCal.epiphany(year)),
      calendar : "Roman"
    }
  },
  "independence_day" : (year) => {
    return {
      date : jsCal.gregorian_from_fixed(jsCal.independence_day(year)),
      calendar : "Roman"
    }
  },
  "easter" : (year) => {
    return {
      date : jsCal.gregorian_from_fixed(jsCal.easter(year)),
      calendar : "Roman"
    }
  },
  "christmas" : (year) => {
    return {
      date : jsCal.gregorian_from_fixed(jsCal.christmas(year)),
      calendar : "Roman"
    }
  },
  "diwali" : (year) => {
    return {
      date : jsCal.gregorian_from_fixed(jsCal.diwali(year)),
      calendar : "Hindu"
    }
  },
  "ramadan" : (year) => {
    let ramadanDate=[]
    for(let i=1; i<=30; i++){
      ramadanDate.push(jsCal.gregorian_from_fixed(jsCal.islamic_in_gregorian(9, i, year)))
    }
    return {
      date : ramadanDate,
      calendar : "Islamic"
    }
  },
  "miwlid_an_nabi" : (year) => {
    return {
      date : jsCal.gregorian_from_fixed(jsCal.miwlid_an_nabi(year)),
      calendar : "Islamic"
    }
  },
  "yom_kippur" : (year) => {
    return {
      date : jsCal.gregorian_from_fixed(jsCal.yom_kippur(year)),
      calendar : "Hebrew"
    }
  },
  "passover" : (year) => {
    return {
      date : jsCal.gregorian_from_fixed(jsCal.passover(year)),
      calendar : "Hebrew"
    }
  },
  "advent" : (year) => {
    return {
      date : jsCal.gregorian_from_fixed(jsCal.advent(year)),
      calendar : "Roman"
    }
  },
  "chinese_new_year" : (year) => {
    return {
      date : jsCal.gregorian_from_fixed(jsCal.chinese_new_year(year)),
      calendar : "Chinese"
    }
  },
  "dragon_festival" : (year) => {
    return {
      date : jsCal.gregorian_from_fixed(jsCal.dragon_festival(year)),
      calendar : "Chinese"
    }
  },
  "qing_ming" : (year) => {
    return {
      date : jsCal.gregorian_from_fixed(jsCal.qing_ming(year)),
      calendar : "Chinese"
    }
  }
}

const getAllHolidaysForYear = (year, options) => {
  const days = []
  const thisYear = moment([year])
  //console.log(year, moment([year]))

  const numDays = moment([year]).isLeapYear() ? 366 : 365

  for (let x=0; x<numDays; x++){
    const d = moment([year]).dayOfYear(x)
    days.push({
      day: x,
      date: d.date(),
      holidays: [],
      month: d.month()+1
    })
  }

  Object.keys(holidays).map(name => {
    const h = holidays[name](year)
    h.name = name
    console.log(`is array ${h.date instanceof Array}`);

    let date, dayOfYear, day
    if(h.date instanceof Array){
      h.date.map(d=>{
        date = moment(`${d.month}-${d.day}-${d.year}`, 'M-D-YYYY')
        dayOfYear = date.dayOfYear()
        day = days[dayOfYear]
        if (day){
          day.holidays.push(h)
        }
      })
    }
    else{
      date = moment(`${h.date.month}-${h.date.day}-${h.date.year}`, 'M-D-YYYY')
      dayOfYear = date.dayOfYear()
      day = days[dayOfYear]
      if (day){
        day.holidays.push(h)
      }
    }
  })
  return days
}

// console.log(getAllHolidaysForYear(cli.year))

module.exports = getAllHolidaysForYear
