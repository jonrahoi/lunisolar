const jscal = require('./jscal')
const moment = require('moment')

const holidays = {

  //1st day of 1st lunar month	Chinese New Year (Spring Festival)
  "Chinese New Year" : (year) => {
    return {
      date : jscal.gregorian_from_fixed(jscal.chinese_new_year(year)),
      calendar : "Chinese"
    }
  },
  //15th day of 1st lunar month	Lantern Festival
  "Lantern Festival" : (year) => {
    var fixed = jscal.fixed_from_gregorian(jscal.gregorian_date(year, jscal.JANUARY, 1));
    var chinese = jscal.chinese_from_fixed(fixed);
    var ret = [];
    let lanternDate
    ret.push(jscal.gregorian_from_fixed(jscal.fixed_from_chinese(jscal.chinese_date(chinese.cycle, chinese.year, 1, chinese.leap, 15))));
    ret.push(jscal.gregorian_from_fixed(jscal.fixed_from_chinese(jscal.chinese_date(chinese.cycle, chinese.year + 1, 1, chinese.leap, 15))));
    ret.push(jscal.gregorian_from_fixed(jscal.fixed_from_chinese(jscal.chinese_date(chinese.cycle, chinese.year + 2, 1, chinese.leap, 15))));
    for(let i=0; i<ret.length; i++){
      if(year===ret[i].year) lanternDate = ret[i]
    }

    return {
      date : lanternDate,
      calendar : "Chinese"
    }
  },
  //2nd day of 2nd lunar month	Zhonghe Festival (Blue Dragon Festival)
  "Longtaitou Festival" : (year) => {
    var fixed = jscal.fixed_from_gregorian(jscal.gregorian_date(year, jscal.JANUARY, 1));
    var chinese = jscal.chinese_from_fixed(fixed);

    var ret = [];
    let longtaitouDate
    ret.push(jscal.gregorian_from_fixed(jscal.fixed_from_chinese(jscal.chinese_date(chinese.cycle, chinese.year, 2, chinese.leap, 2))));
    ret.push(jscal.gregorian_from_fixed(jscal.fixed_from_chinese(jscal.chinese_date(chinese.cycle, chinese.year + 1, 2, chinese.leap, 2))));
    ret.push(jscal.gregorian_from_fixed(jscal.fixed_from_chinese(jscal.chinese_date(chinese.cycle, chinese.year + 2, 2, chinese.leap, 2))));
    for(let i=0; i<ret.length; i++){
      if(year===ret[i].year) longtaitouDate = ret[i]
    }
    return {
      date : longtaitouDate,
      calendar : "Chinese"
    }
  },
  //3rd day of 3rd lunar month	Shangsi Festival
  "Double Third Festival" : (year) => {
    var fixed = jscal.fixed_from_gregorian(jscal.gregorian_date(year, jscal.JANUARY, 1));
    var chinese = jscal.chinese_from_fixed(fixed);

    var ret = [];
    let doubleThirdDate
    ret.push(jscal.gregorian_from_fixed(jscal.fixed_from_chinese(jscal.chinese_date(chinese.cycle, chinese.year, 3, chinese.leap, 3))));
    ret.push(jscal.gregorian_from_fixed(jscal.fixed_from_chinese(jscal.chinese_date(chinese.cycle, chinese.year + 1, 3, chinese.leap, 3))));
    ret.push(jscal.gregorian_from_fixed(jscal.fixed_from_chinese(jscal.chinese_date(chinese.cycle, chinese.year + 2, 3, chinese.leap, 3))));
    for(let i=0; i<ret.length; i++){
      if(year===ret[i].year) doubleThirdDate = ret[i]
    }
    return {
      date : doubleThirdDate,
      calendar : "Chinese"
    }
  },
  "Qingming" : (year) => {
    //console.log(jscal.solar_term(5, year));
    return {
      date : jscal.gregorian_from_fixed(jscal.qing_ming(year)),
      calendar : "Chinese"
    }
  },
  // 5th day of 5th lunar month	Duanwu Festival (Dragon Boat Festival)
  "Dragon Boat Festival" : (year) => {
    var fixed = jscal.fixed_from_gregorian(jscal.gregorian_date(year, jscal.JANUARY, 1));
    var chinese = jscal.chinese_from_fixed(fixed);

    var ret = [];
    let dragonBoatDate
    ret.push(jscal.gregorian_from_fixed(jscal.fixed_from_chinese(jscal.chinese_date(chinese.cycle, chinese.year, 5, chinese.leap, 5))));
    ret.push(jscal.gregorian_from_fixed(jscal.fixed_from_chinese(jscal.chinese_date(chinese.cycle, chinese.year + 1, 5, chinese.leap, 5))));
    ret.push(jscal.gregorian_from_fixed(jscal.fixed_from_chinese(jscal.chinese_date(chinese.cycle, chinese.year + 2, 5, chinese.leap, 5))));
    for(let i=0; i<ret.length; i++){
      if(year===ret[i].year) dragonBoatDate = ret[i]
    }
    return {
      date : dragonBoatDate,
      calendar : "Chinese"
    }
  },
  //7th day of 7th lunar month	Qixi Festival (The Night of Sevens, Magpie Festival)
  "Qixi Festival" : (year) => {
    var fixed = jscal.fixed_from_gregorian(jscal.gregorian_date(year, jscal.JANUARY, 1));
    var chinese = jscal.chinese_from_fixed(fixed);

    var ret = [];
    let qixiDate
    ret.push(jscal.gregorian_from_fixed(jscal.fixed_from_chinese(jscal.chinese_date(chinese.cycle, chinese.year, 7, chinese.leap, 7))));
    ret.push(jscal.gregorian_from_fixed(jscal.fixed_from_chinese(jscal.chinese_date(chinese.cycle, chinese.year + 1, 7, chinese.leap, 7))));
    ret.push(jscal.gregorian_from_fixed(jscal.fixed_from_chinese(jscal.chinese_date(chinese.cycle, chinese.year + 2, 7, chinese.leap, 7))));
    for(let i=0; i<ret.length; i++){
      if(year===ret[i].year) qixiDate = ret[i]
    }
    return {
      date : qixiDate,
      calendar : "Chinese"
    }
  },
  //15th day of 7th lunar month	Ghost Festival
  "Ghost Festival" : (year) => {
    var fixed = jscal.fixed_from_gregorian(jscal.gregorian_date(year, jscal.JANUARY, 1));
    var chinese = jscal.chinese_from_fixed(fixed);

    var ret = [];
    let ghostDate
    ret.push(jscal.gregorian_from_fixed(jscal.fixed_from_chinese(jscal.chinese_date(chinese.cycle, chinese.year, 7, chinese.leap, 15))));
    ret.push(jscal.gregorian_from_fixed(jscal.fixed_from_chinese(jscal.chinese_date(chinese.cycle, chinese.year + 1, 7, chinese.leap, 15))));
    ret.push(jscal.gregorian_from_fixed(jscal.fixed_from_chinese(jscal.chinese_date(chinese.cycle, chinese.year + 2, 7, chinese.leap, 15))));
    for(let i=0; i<ret.length; i++){
      if(year===ret[i].year) ghostDate = ret[i]
    }
    return {
      date : ghostDate,
      calendar : "Chinese"
    }
  },
  //15th day of 8th lunar month	Mid-Autumn Festival (Moon Festival)
  "Mid-Autumn Festival" : (year) => {
    var fixed = jscal.fixed_from_gregorian(jscal.gregorian_date(year, jscal.JANUARY, 1));
    var chinese = jscal.chinese_from_fixed(fixed);

    var ret = [];
    let midAutumnDate
    ret.push(jscal.gregorian_from_fixed(jscal.fixed_from_chinese(jscal.chinese_date(chinese.cycle, chinese.year, 8, chinese.leap, 15))));
    ret.push(jscal.gregorian_from_fixed(jscal.fixed_from_chinese(jscal.chinese_date(chinese.cycle, chinese.year + 1, 8, chinese.leap, 15))));
    ret.push(jscal.gregorian_from_fixed(jscal.fixed_from_chinese(jscal.chinese_date(chinese.cycle, chinese.year + 2, 8, chinese.leap, 15))));
    for(let i=0; i<ret.length; i++){
      if(year===ret[i].year) midAutumnDate = ret[i]
    }
    return {
      date : midAutumnDate,
      calendar : "Chinese"
    }
  },
  //9th day of 9th lunar month	Double Ninth Festival (Chongyang Festival)
  "Chongyang" : (year) => {
    var fixed = jscal.fixed_from_gregorian(jscal.gregorian_date(year, jscal.JANUARY, 1));
    var chinese = jscal.chinese_from_fixed(fixed);

    var ret = [];
    let chongyangDate
    ret.push(jscal.gregorian_from_fixed(jscal.fixed_from_chinese(jscal.chinese_date(chinese.cycle, chinese.year, 9, chinese.leap, 9))));
    ret.push(jscal.gregorian_from_fixed(jscal.fixed_from_chinese(jscal.chinese_date(chinese.cycle, chinese.year + 1, 9, chinese.leap, 9))));
    ret.push(jscal.gregorian_from_fixed(jscal.fixed_from_chinese(jscal.chinese_date(chinese.cycle, chinese.year + 2, 9, chinese.leap, 9))));
    for(let i=0; i<ret.length; i++){
      if(year===ret[i].year) chongyangDate = ret[i]
    }
    return {
      date : chongyangDate,
      calendar : "Chinese"
    }
  },
  //8th day of 12th lunar month	Laba Festival
  "Laba Festival" : (year) => {
    var fixed = jscal.fixed_from_gregorian(jscal.gregorian_date(year, jscal.JANUARY, 1));
    var chinese = jscal.chinese_from_fixed(fixed);

    var ret = [];
    let labaDate
    ret.push(jscal.gregorian_from_fixed(jscal.fixed_from_chinese(jscal.chinese_date(chinese.cycle, chinese.year, 0, chinese.leap, 8))));
    ret.push(jscal.gregorian_from_fixed(jscal.fixed_from_chinese(jscal.chinese_date(chinese.cycle, chinese.year + 1, 0, chinese.leap, 8))));
    ret.push(jscal.gregorian_from_fixed(jscal.fixed_from_chinese(jscal.chinese_date(chinese.cycle, chinese.year + 2, 0, chinese.leap, 8))));
    for(let i=0; i<ret.length; i++){
      if(year===ret[i].year) labaDate = ret[i]
    }
    return {
      date : labaDate,
      calendar : "Chinese"
    }
  },

  //Muharram (1 Muharram)
  "Muharram" : (year) => {
    var fixed = jscal.fixed_from_gregorian(jscal.gregorian_date(year, jscal.JANUARY, 1));
    var islamic = jscal.islamic_from_fixed(fixed);
    return {
      date : jscal.gregorian_from_fixed(jscal.fixed_from_islamic(jscal.islamic_date(islamic.year, 1, 1))),
      calendar : "Islamic"
    }
  },
  //Mawlid al-Nabi (12 Rabi 1)
  "Mawlid an-Nabi" : (year) => {
    var fixed = jscal.fixed_from_gregorian(jscal.gregorian_date(year, jscal.JANUARY, 1));
    var islamic = jscal.islamic_from_fixed(fixed);
    return {
      date : jscal.gregorian_from_fixed(jscal.fixed_from_islamic(jscal.islamic_date(islamic.year, 3, 12))),
      calendar : "Islamic"
    }
  },
  //Eid al-Fitr (1 Shawwal)
  "Eid al-Fitr" : (year) => {
    var fixed = jscal.fixed_from_gregorian(jscal.gregorian_date(year, jscal.JANUARY, 1));
    var islamic = jscal.islamic_from_fixed(fixed);
    return {
      date : jscal.gregorian_from_fixed(jscal.fixed_from_islamic(jscal.islamic_date(islamic.year, 10, 1))),
      calendar : "Islamic"
    }
  },
  //Eid al-Adha (10 Dhu'l-Hijjah)                    u
  "Eid al-Adha" : (year) => {
    var fixed = jscal.fixed_from_gregorian(jscal.gregorian_date(year, jscal.JANUARY, 1));
    var islamic = jscal.islamic_from_fixed(fixed);
    return {
      date : jscal.gregorian_from_fixed(jscal.fixed_from_islamic(jscal.islamic_date(islamic.year, 12, 10))),
      calendar : "Islamic"
    }
  },
  "Ramadan" : (year) => {
    var fixed = jscal.fixed_from_gregorian(jscal.gregorian_date(year, jscal.JANUARY, 1));
    var islamic = jscal.islamic_from_fixed(fixed);
    var fd_start = jscal.fixed_from_islamic(jscal.islamic_date(islamic.year, 9, 1));
    var fd_end = jscal.fixed_from_islamic(jscal.islamic_date(islamic.year, 10, 1)) - 1;

    var ret = [];
    for (var i = fd_start; i <= fd_end; i++) {
      ret.push(jscal.gregorian_from_fixed(i));
    }
    return {
      date : ret,
      calendar : "Islamic"
    }
  },

  "Tu BiShvat" : (year) => {
    var fixed = jscal.fixed_from_gregorian(jscal.gregorian_date(year, jscal.JANUARY, 1));
    var hebrew = jscal.hebrew_from_fixed(fixed);
    return {
      date : jscal.gregorian_from_fixed(jscal.fixed_from_hebrew(jscal.hebrew_date(hebrew.year, jscal.SHEVAT, 15))),
      calendar : "Hebrew"
    }
  },
  "Purim" : (year) => {
    var fixed = jscal.fixed_from_gregorian(jscal.gregorian_date(year, jscal.JANUARY, 1));
    var hebrew = jscal.hebrew_from_fixed(fixed);
    var ret
    if (jscal.is_hebrew_leap_year(hebrew.year)) {
      ret = jscal.gregorian_from_fixed(jscal.fixed_from_hebrew(jscal.hebrew_date(hebrew.year, jscal.ADARII, 14)));
    }
    else {
      ret = jscal.gregorian_from_fixed(jscal.fixed_from_hebrew(jscal.hebrew_date(hebrew.year, jscal.ADAR, 14)));
    }
    return {
      date : ret,
      calendar : "Hebrew"
    }
  },
  "Passover" : (year) => {
    var fixed = jscal.fixed_from_gregorian(jscal.gregorian_date(year, jscal.JANUARY, 1));
    var hebrew = jscal.hebrew_from_fixed(fixed);
    return {
      date : jscal.gregorian_from_fixed(jscal.fixed_from_hebrew(jscal.hebrew_date(hebrew.year, jscal.NISAN, 15))),
      calendar : "Hebrew"
    }
  },
  "Holocaust Memorial Day" : (year) => {
    return {
      date : jscal.gregorian_date(year, jscal.JANUARY, 27),
      calendar : "Hebrew"
    }
  },
  "Yom Ha'atzmaut" : (year) => {
    var fixed = jscal.fixed_from_gregorian(jscal.gregorian_date(year, jscal.JANUARY, 1));
    var hebrew = jscal.hebrew_from_fixed(fixed);
    return {
      date : jscal.gregorian_from_fixed(jscal.fixed_from_hebrew(jscal.hebrew_date(hebrew.year, jscal.IYYAR, 5))),
      calendar : "Hebrew"
    }
  },
  "Lag BaOmer" : (year) => {
    var fixed = jscal.fixed_from_gregorian(jscal.gregorian_date(year, jscal.JANUARY, 1));
    var hebrew = jscal.hebrew_from_fixed(fixed);
    return {
      date : jscal.gregorian_from_fixed(jscal.fixed_from_hebrew(jscal.hebrew_date(hebrew.year, jscal.IYYAR, 18))),
      calendar : "Hebrew"
    }
  },
  "Shavuot" : (year) => {
    var fixed = jscal.fixed_from_gregorian(jscal.gregorian_date(year, jscal.JANUARY, 1));
    var hebrew = jscal.hebrew_from_fixed(fixed);
    return {
      date : jscal.gregorian_from_fixed(jscal.fixed_from_hebrew(jscal.hebrew_date(hebrew.year, jscal.SIVAN, 6))),
      calendar : "Hebrew"
    }
  },
  "Tisha B'Av" : (year) => {
    var fixed = jscal.fixed_from_gregorian(jscal.gregorian_date(year, jscal.JANUARY, 1));
    var hebrew = jscal.hebrew_from_fixed(fixed);
    return {
      date : jscal.gregorian_from_fixed(jscal.fixed_from_hebrew(jscal.hebrew_date(hebrew.year, jscal.AV, 9))),
      calendar : "Hebrew"
    }
  },
  "Rosh Hashanah" : (year) => {
    var fixed = jscal.fixed_from_gregorian(jscal.gregorian_date(year+1, jscal.JANUARY, 1));
    var hebrew = jscal.hebrew_from_fixed(fixed);
    var fd_start = jscal.fixed_from_hebrew(jscal.hebrew_date(hebrew.year, jscal.TISHRI, 1));
    var fd_end = jscal.fixed_from_hebrew(jscal.hebrew_date(hebrew.year, jscal.TISHRI, 2));

    var ret = [];
    for (var i = fd_start; i <= fd_end; i++) {
      ret.push(jscal.gregorian_from_fixed(i));
    }
    return {
      date : ret,
      calendar : "Hebrew"
    }
  },
  "Yom Kippur" : (year) => {
    return {
      date : jscal.gregorian_from_fixed(jscal.yom_kippur(year)),
      calendar : "Hebrew"
    }
  },
  "Sukkot" : (year) => {
    var fixed = jscal.fixed_from_gregorian(jscal.gregorian_date(year+1, jscal.JANUARY, 1));
    var hebrew = jscal.hebrew_from_fixed(fixed);
    var fd_start = jscal.fixed_from_hebrew(jscal.hebrew_date(hebrew.year, jscal.TISHRI, 14));
    var fd_end = jscal.fixed_from_hebrew(jscal.hebrew_date(hebrew.year, jscal.TISHRI, 21));

    var ret = [];
    for (var i = fd_start; i <= fd_end; i++) {
      ret.push(jscal.gregorian_from_fixed(i));
    }
    return {
      date : ret,
      calendar : "Hebrew"
    }
  },
  "Shemini Atzeret" : (year) => {
    var fixed = jscal.fixed_from_gregorian(jscal.gregorian_date(year+1, jscal.JANUARY, 1));
    var hebrew = jscal.hebrew_from_fixed(fixed);
    return {
      date : jscal.gregorian_from_fixed(jscal.fixed_from_hebrew(jscal.hebrew_date(hebrew.year, jscal.TISHRI, 22))),
      calendar : "Hebrew"
    }
  },
  "Simchat Torah" : (year) => {
    var fixed = jscal.fixed_from_gregorian(jscal.gregorian_date(year+1, jscal.JANUARY, 1));
    var hebrew = jscal.hebrew_from_fixed(fixed);
    return {
      date : jscal.gregorian_from_fixed(jscal.fixed_from_hebrew(jscal.hebrew_date(hebrew.year, jscal.TISHRI, 23))),
      calendar : "Hebrew"
    }
  },
  "Hanukkah" : (year) => {
    var fixed = jscal.fixed_from_gregorian(jscal.gregorian_date(year+1, jscal.JANUARY, 1));
    var hebrew = jscal.hebrew_from_fixed(fixed);
    var fd_start = jscal.fixed_from_hebrew(jscal.hebrew_date(hebrew.year, jscal.KISLEV, 24));
    var fd_end = jscal.fixed_from_hebrew(jscal.hebrew_date(hebrew.year, jscal.TEVET, 2));
    var ret = [];
    for (var i = fd_start; i <= fd_end; i++) {
      ret.push(jscal.gregorian_from_fixed(i));
    }
    return {
      date : ret,
      calendar : "Hebrew"
    }
  },
  "Mahavir Jayanti" : (year) => {
    var fixed = jscal.fixed_from_gregorian(jscal.gregorian_date(year+1, jscal.JANUARY, 1));
    var old_hindu = jscal.old_hindu_lunar_from_fixed(fixed);
    return {
      date : jscal.gregorian_from_fixed(jscal.fixed_from_old_hindu_lunar(jscal.old_hindu_lunar_date(old_hindu.year, 1, old_hindu.leap, 14))),
      calendar : "Hindu"
    }
  },
  "Makar Sankranti" : (year) => {
    return {
      date : jscal.gregorian_from_fixed(jscal.fixed_from_gregorian(jscal.gregorian_date(year, jscal.JANUARY, 14))),
      calendar : "Hindu"
    }
  },
  "Vasant Panchami" : (year) => {
    var fixed = jscal.fixed_from_gregorian(jscal.gregorian_date(year, jscal.JANUARY, 1));
    var old_hindu = jscal.old_hindu_lunar_from_fixed(fixed);
    return {
      date : jscal.gregorian_from_fixed(jscal.fixed_from_old_hindu_lunar(jscal.old_hindu_lunar_date(old_hindu.year, 11, old_hindu.leap, 5))),
      calendar : "Hindu"
    }
  },
  "Maha Shivaratri" : (year) => {
    var fixed = jscal.fixed_from_gregorian(jscal.gregorian_date(year, jscal.JANUARY, 1));
    var old_hindu = jscal.old_hindu_lunar_from_fixed(fixed);
    return {
      date : jscal.gregorian_from_fixed(jscal.fixed_from_old_hindu_lunar(jscal.old_hindu_lunar_date(old_hindu.year, 11, old_hindu.leap, 29))),
      calendar : "Hindu"
    }
  },
  //Full Moon, Month 12
  "Holi" : (year) => {
    var fixed = jscal.fixed_from_gregorian(jscal.gregorian_date(year, jscal.JANUARY, 1));
    var old_hindu = jscal.old_hindu_lunar_from_fixed(fixed);
    return {
      date : jscal.gregorian_from_fixed(jscal.fixed_from_old_hindu_lunar(jscal.old_hindu_lunar_date(old_hindu.year, 12, old_hindu.leap, 16))),
      calendar : "Hindu"
    }
  },
  "Gudi Padwa" : (year) => {
    var fixed = jscal.fixed_from_gregorian(jscal.gregorian_date(year+1, jscal.JANUARY, 1));
    var hindu = jscal.hindu_lunar_from_fixed(fixed);
    return {
      date : jscal.gregorian_from_fixed(jscal.fixed_from_hindu_lunar(jscal.hindu_lunar_date(hindu.year, 1, hindu.leap, 1))),
      calendar : "Hindu"
    }
  },
  "Diwali" : (year) => {
    return {
      date : jscal.gregorian_from_fixed(jscal.diwali(year)),
      calendar : "Hindu"
    }
  },
  "Rama Navami" : (year) => {
    return {
      date : jscal.gregorian_from_fixed(jscal.rama(year)),
      calendar : "Hindu"
    }
  },

  "Epiphany" : (year) => {
    return {
      date : jscal.gregorian_from_fixed(jscal.epiphany(year)),
      calendar : "Roman"
    }
  },
  "Groundhog Day" : (year) => {
    return {
      date : jscal.gregorian_from_fixed(jscal.fixed_from_gregorian(jscal.gregorian_date(year,jscal.FEBRUARY, 2))),
      calendar : "Roman"
    }
  },
  "Valentines Day" : (year) => {
    return {
      date : jscal.gregorian_from_fixed(jscal.fixed_from_gregorian(jscal.gregorian_date(year,jscal.FEBRUARY, 14))),
      calendar : "Roman"
    }
  },
  "St Patricks Day" : (year) => {
    return {
      date : jscal.gregorian_from_fixed(jscal.fixed_from_gregorian(jscal.gregorian_date(year,jscal.MARCH, 17))),
      calendar : "Roman"
    }
  },
  "Earth Day" : (year) => {
    return {
      date : jscal.gregorian_from_fixed(jscal.fixed_from_gregorian(jscal.gregorian_date(year,jscal.APRIL, 22))),
      calendar : "Roman"
    }
  },
  "Cinco de Mayo" : (year) => {
    return {
      date : jscal.gregorian_from_fixed(jscal.fixed_from_gregorian(jscal.gregorian_date(year,jscal.MAY, 5))),
      calendar : "Roman"
    }
  },
  "Independence Day" : (year) => {
    return {
      date : jscal.gregorian_from_fixed(jscal.independence_day(year)),
      calendar : "Roman"
    }
  },
  "Labor Day" : (year) => {
    return {
      date : jscal.gregorian_from_fixed(jscal.labor_day(year)),
      calendar : "Roman"
    }
  },
  "Election Day" : (year) => {
    return {
      date : jscal.gregorian_from_fixed(jscal.election_day(year)),
      calendar : "Roman"
    }
  },
  "Christmas" : (year) => {
    return {
      date : jscal.gregorian_from_fixed(jscal.christmas(year)),
      calendar : "Roman"
    }
  },
  "Easter" : (year) => {
    return {
      date : jscal.gregorian_from_fixed(jscal.easter(year)),
      calendar : "Roman"
    }
  }
}

const getAllHolidaysForYear = (year, options) => {
  const days = []

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

  Object.keys(holidays).forEach(name => {
    const h = holidays[name](year)
    h.name = name
    let date, dayOfYear, day
    if(h.date instanceof Array){
      h.date.forEach(d=>{
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

module.exports = {getAllHolidaysForYear, holidays}
