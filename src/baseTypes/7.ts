/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum Day {
    Mon = 'Weekdays',
    Tue = 'Weekdays',
    Wed = 'Weekdays',
    Thu = 'Weekdays',
    Fri = 'Weekdays', 
    Sat = 'Weekend',
    Sun = 'Weekend',
}


const isWeekend = (day: Day): void => {
    console.log(day === 'Weekend' ? true : false)
}

isWeekend(Day.Sun)