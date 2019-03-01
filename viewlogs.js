var db = firebase.database();

var info;

function button() {
    event.preventDefault();
    let year1 = $("#year1").val();
    let month1 = $("#month1").val();
    let day1 = $("#day1").val();
    logsOfDate(year1, month1, day1);
}

function logsOfDate(year, month, day) {
    db.ref("logs/" + year + "/" + month + "/" + day).once('value')
        .then(function (snapshot) {
            let data = snapshot.val();
            let keys = Object.keys(data);
            keys.forEach((key) => {
                log = data[key]
                name = log.info.noc;
                dateTime = log.date.fullDate;
                cracList = log.info.cracList;
                crac1 = log.info.cracList[0];
                crac2 = log.info.cracList[1];
                crac3 = log.info.cracList[2];
                crac4 = log.info.cracList[3];
                crac5 = log.info.cracList[4];
                crac6 = log.info.cracList[5];
                crac1temp = log.info[crac1].tempFarenheit;
                crac2temp = log.info[crac2].tempFarenheit;
                crac3temp = log.info[crac3].tempFarenheit;
                crac4temp = log.info[crac4].tempFarenheit;
                crac5temp = log.info[crac5].tempFarenheit;
                crac6temp = log.info[crac6].tempFarenheit;
                crac1humid = log.info[crac1].humidPercent;
                crac2humid = log.info[crac2].humidPercent;
                crac3humid = log.info[crac3].humidPercent;
                crac4humid = log.info[crac4].humidPercent;
                crac5humid = log.info[crac5].humidPercent;
                crac6humid = log.info[crac6].humidPercent;

                $("#logs").append('<tr><th scope="col">' + name + '</th><td colspan="1">' + dateTime + 
                '</td>' +
                '<td colspan="1"> CRAC#' + crac1 + ': ' + crac1temp + '°F ' + crac1humid + '%</td>' +
                '<td colspan="1"> CRAC#' + crac2 + ': ' + crac2temp + '°F ' + crac2humid + '%</td>' +
                '<td colspan="1"> CRAC#' + crac3 + ': ' + crac3temp + '°F ' + crac3humid + '%</td>' +
                '<td colspan="1"> CRAC#' + crac4 + ': ' + crac4temp + '°F ' + crac4humid + '%</td>' +
                '<td colspan="1"> CRAC#' + crac5 + ': ' + crac5temp + '°F ' + crac5humid + '%</td>' +
                '<td colspan="1"> CRAC#' + crac6 + ': ' + crac6temp + '°F ' + crac6humid + '%</td></tr>')
            })
        })
}

$(document).ready(function () {
    $("#submit").click(button)
})