const { it } = exports.lab = require('lab').script();
const Code = require('code');
const expect = Code.expect;
const moment = require('moment')
const jsCal = require('../jscal')
const {getAllHolidaysForYear, holidays} = require('../calendar') // {getAllHolidaysForYear, holidays} from './calendar'

it('gets Yom Kippur right', () => {

    const yk_dates = ['2018 September 19',
    '2019 October 9',
    '2020 September 28',
    '2021 September 16',
    '2022 October 5',
    '2023 September 25',
    '2024 October 12',
    '2025 October 2',
    '2026 September 21',
    '2027 October 11',
    '2028 September 30',
    '2029 September 19',
    '2030 October 7',
    '2031 September 27',
    '2032 September 15',
    '2033 October 3',
    '2034 September 23',
    '2035 October 13',
    '2036 October 1',
    '2037 September 19',
    '2038 October 9']

    yk_dates.forEach(d => {
        const date = moment(d, 'YYYY MMM D')
        const yk = holidays['Yom Kippur'](date.year()).date
        const ykdate = moment(`${yk.month}-${yk.day}-${yk.year}`, 'M-D-YYYY')
        expect(date.isSame(ykdate, 'day')).to.equal(true)
    })
});