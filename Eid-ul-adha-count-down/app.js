setInterval(function () {
    var date = new Date().getTime()
    var eid = new Date("17 june 2024 00:00:00").getTime()

    var diff = eid - date

    var eidDayLeft = Math.floor(diff / (1000 * 60 * 60 * 24));
    var eidHoursLeft = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var eidMinLeft = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    var eidSecLeft = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById("box1").innerText = eidDayLeft
    document.getElementById("box2").innerText = eidHoursLeft
    document.getElementById("box3").innerText = eidMinLeft
    document.getElementById("box4").innerText = eidSecLeft

    if (diff < 0) {
        clearInterval()
        document.getElementById("box1").innerText = "00";
        document.getElementById("box2").innerText = "00";
        document.getElementById("box3").innerText = "00";
        document.getElementById("box4").innerText = "00";
    }

}, 1000)


