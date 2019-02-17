var db = firebase.database();

var info;

function grabInfo() {
    db.ref("logs").once("value")
    .then(function (snapshot) {
        info = snapshot.exportVal();
        dates = Object.keys(info);
        dates.forEach(function (date) {
            logList = Object.keys(info[date]);
            logList.forEach((function (log) {
                path = info[date][log];
                $("#logs").append(path.date.fullDate)
                $("#logs").append(path.info.noc)
                var cracList = [];
                Object.keys(path.info).forEach(function (i) {
                    if (i != "noc" && i != "notes") {
                        cracList.push(i)
                    }
                })
                cracList.forEach(function(num) {
                    $("#logs").append("crac#" + num + "temp:" + path.info[num].tempFarenheit + "humid:" + path.info[num].humidPercent)
                })
            }))
            // console.log(logList)
        })
        // console.log(dates)
    })
}

$(document).ready(function () {
    grabInfo()




    // $("#logs").append("test")
})