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
  "Epiphany" : (year) => {
    return {
      date : jsCal.gregorian_from_fixed(jsCal.epiphany(year)),
      calendar : "Roman"
    }
  },
  "Independence Day" : (year) => {
    return {
      date : jsCal.gregorian_from_fixed(jsCal.independence_day(year)),
      calendar : "Roman"
    }
  },
  "Easter" : (year) => {
    return {
      date : jsCal.gregorian_from_fixed(jsCal.easter(year)),
      calendar : "Roman"
    }
  },
  "Christmas" : (year) => {
    return {
      date : jsCal.gregorian_from_fixed(jsCal.christmas(year)),
      calendar : "Roman"
    }
  },
  "Diwali" : (year) => {
    return {
      date : jsCal.gregorian_from_fixed(jsCal.diwali(year)),
      calendar : "Hindu"
    }
  },
  "Shivaratri" : (year) => {
    return {
      date : jsCal.gregorian_from_fixed(jsCal.shiva(year)),
      calendar : "Hindu"
    }
  },
  "Rama Navami" : (year) => {
    return {
      date : jsCal.gregorian_from_fixed(jsCal.rama(year)),
      calendar : "Hindu"
    }
  },
  "Ramadan" : (year) => {
    let ramadanDate=[]
    for(let i=1; i<=30; i++){
      ramadanDate.push(jsCal.gregorian_from_fixed(jsCal.islamic_in_gregorian(9, i, year)))
    }
    return {
      date : ramadanDate,
      calendar : "Islamic"
    }
  },
  "Mawlid an-Nabi" : (year) => {
    return {
      date : jsCal.gregorian_from_fixed(jsCal.miwlid_an_nabi(year)),
      calendar : "Islamic"
    }
  },
  "Yom Kippur" : (year) => {
    return {
      date : jsCal.gregorian_from_fixed(jsCal.yom_kippur(year)),
      calendar : "Hebrew"
    }
  },
  "Passover" : (year) => {
    return {
      date : jsCal.gregorian_from_fixed(jsCal.passover(year)),
      calendar : "Hebrew"
    }
  },
  "Advent" : (year) => {
    return {
      date : jsCal.gregorian_from_fixed(jsCal.advent(year)),
      calendar : "Roman"
    }
  },
  "Chinese New Year" : (year) => {
    return {
      date : jsCal.gregorian_from_fixed(jsCal.chinese_new_year(year)),
      calendar : "Chinese"
    }
  },
  "Dragon Boat Festival" : (year) => {
    return {
      date : jsCal.gregorian_from_fixed(jsCal.dragon_festival(year)),
      calendar : "Chinese"
    }
  },
  "Qingming" : (year) => {
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
