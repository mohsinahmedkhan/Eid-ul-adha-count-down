setInterval (function() {
var date = new Date() ;
var eid = new Date("17 june 2024") ;
var diff = eid - date;

let eidDayLeft = diff / (1000 * 60 * 60 * 24)
let eidHoursLeft = diff / (1000 * 60 * 60) % 24
let eidMinLeft = diff / (1000 * 60) % 60
let eidSecLeft = diff / (1000) % 60

let resultDay = `${Math.floor(eidDayLeft)}`
let resultHr = `${Math.floor(eidHoursLeft)}`
let resultMin = `${Math.floor(eidMinLeft)}`
let resultSec = `${Math.floor(eidSecLeft)}`

document.getElementById("box1").innerText = resultDay
document.getElementById("box2").innerText = resultHr
document.getElementById("box3").innerText = resultMin
document.getElementById("box4").innerText = resultSec

})
setInterval()
