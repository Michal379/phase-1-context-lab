// /* Your Code Here */
let employeeRecord=(["firstName", "familyName", "title", payPerHour, timeInEvents[''] ,timeOutEvents['']])
function createEmployeeRecord(employee){
    return{ 
        firstName:employee[0],
         familyName:employee[1], 
         title:employee[2],
          payPerHour:employee[3], 
          timeInEvents:[], 
          timeOutEvents:[],
    }
}
//createEmployeeRecords
let employeeRecords ;
let rows= [
    ["moe","sizlak","barkeep", 2 ],
    ["bartholomew","simpson","scamp", 3]
]
employeeRecords.length=10
function createEmployeeRecords(employee){
    return employee.map(record=>createEmployeeRecord(record))
}

 //createTimeInEvent
 function createTimeInEvent(dateStamp){
   let [date, hour]=dateStamp.split("")
 this.timeInEvents.push({
    type: "TimeIn",
    hour: 1400,
    date:date.split|(0,10)
 })
 return this
 }

 //createTimeOutEvent
 function createTimeOutEvent(dateStamp){
    let createTimeOUtEvent;
let [date, hour]=dateStamp.split("")
this.timeOutEvents.push({
   type: "TimeOut",
   hour: 1700,
   date:date.split(0,10)
})
return this
}

//hoursWorkedOnDate calculates that employee worked for two hours
function hoursWorkedOnDate(employeeRecord, date){
    const timeIn = employeeRecord.timeInEvents.find(event => event.date === date);
    const timeOut = employeeRecord.timeOutEvents.find(event => event.date === date);
    return (timeOut.hour - timeIn.hour)/100;
  }

//wagesEarnedOnDate
function wagesEarnedOnDate(employeeRecord, date){
    return hoursWorkedOnDate(employeeRecord,date)*employeeRecord.payPerHour;
}

//allWagesFor
function allWagesFor() {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

//findEmployeeByFirstName
function findEmployeeByFirstName(source,name){
    return source.find(record=>record.firstName===name)
 }

//calculatePayroll
 function  calculatePayroll(employeeRecords){
    return employeeRecords.reduce(function(memo, rec){
        return memo + allWagesFor.call(rec)
    }, 0)
}

