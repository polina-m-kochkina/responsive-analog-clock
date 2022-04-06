/*=============== CLOCK ===============*/
const hour = document.getElementById('clock-hour'),
      minutes = document.getElementById('clock-minutes'),
      seconds = document.getElementById('clock-seconds')

const clock = () => {
    let date = new Date()

    let hh = date.getHours() * 30,
        mm = date.getMinutes() * 6,
        ss = date.getSeconds() * 6

    // add a rotation to the elements
    hour.style.transform = `rotateZ(${hh + mm / 12}deg)`
    minutes.style.transform = `rotateZ(${mm}deg)`
    seconds.style.transform = `rotateZ(${ss}deg)`
}
setInterval(clock, 1000) // 1000 = 1s

/*=============== CLOCK & DATE TEXT ===============*/
const textHours = document.getElementById('text-hour'),
      textMinutes = document.getElementById('text-minutes'),
      textAmPm = document.getElementById('text-ampm'),
      dateDay = document.getElementById('date-day'),
      dateMonth = document.getElementById('date-month'),
      dateYear = document.getElementById('date-year')

const clockText = () => {
    let date = new Date()

    let hh = date.getHours(),
        ampm,
        mm = date.getMinutes(),
        day = date.getDate(),
        month = date.getMonth(),
        year = date.getFullYear()

    // change the hours from 24 to 12 hours and establish whether it is AM or PM
    if (hh >= 12) {
        hh = hh - 12
        ampm = 'PM'
    } else {
        ampm = 'AM'
    }

    // detect if it's 0 AM and transform to 12 AM
    if (hh == 0) {
        hh = 12
    }

    // add a zero before hours
    if (hh < 10) {
        hh = `0${hh}`
    }

    // show hours
    textHours.innerHTML = `${hh}:`

    // add a ziro before the minutes
    if (mm < 10) {
        mm = `0${mm}`
    }

    // show minutes
    textMinutes.innerHTML = mm

    // show am or pm
    textAmPm.innerHTML = ampm

    // get and show the month of the year
    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

    // show day, month and year
    dateDay.innerHTML = day
    dateMonth.innerHTML = `${months[month]},`
    dateYear.innerHTML = year

}
setInterval(clockText, 1000) // 1000 = 1s

/*==================== DARK/LIGHT THEME ====================*/