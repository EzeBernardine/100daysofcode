
// given a function with arguements
function date(time, date, month){
  console.log({
    date: date,
    time: time, 
    month: month
  })
}
date('2pm','25th ', 'Augus\'t' )
//  it will log Object { date: "25th ", time: "2pm", month: "Augus't" }

// But if the arguements arenotpassed in completely like
function date(time, date, month){
  console.log({
    date: date,
    time: time, 
    month: month
  })
}
date('2pm','25th ' )
// thi will log  
Object{
  date: "25th "
  month: undefined​
  time: "2pm"
}

// To overide this
function date(time, date , month = 'August'){
  console.log({
    date: date,
    time: time, 
    month: month
  })
}
date('2pm','25th ' )
// this will log this
Object {
  date: "25th ",
  time: "2pm",
  month: "August"
}

// To omit the middle arguement
function date(time, date= '12th', month = 'August') {
  console.log({
    time: time,
    date: date,
    month: month
  })
}
date('2pm',undefined,  'June ')
// undefined here means no data was passed in, so the default value will be used
Object {
  time: "2pm",
  date: "12th",
  month: "June "
}