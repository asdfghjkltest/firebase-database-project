// Initializing Firebase Database
var db = firebase.database();

// Formats date to structure and organize object
var dt = new Date();
var day, day2, time;
function updateDate() {
    day = String(dt.getFullYear()) + String((dt.getMonth() + 1)) + String(dt.getDate());
    day2 = dt.getFullYear() + ":" + (dt.getMonth() + 1) + ":" + dt.getDate();
}
// Log submission
function submitForm(information) {
    db.ref("/logs/" + day).push({
        info: information,
        date: {
            fullDate: Date($.now()),
            day: day2
        }
    }, function (error) {
        if (error) {
            console.log("failed")
        } else {
            console.log("sucess")
        }
    })
        .then(clear())
}

// Define fuction to clear input value
function clear() {
    $("#temp1").val("");
    $("#temp2").val("");
    $("#temp3").val("");
    $("#temp4").val("");
    $("#temp5").val("");
    $("#temp6").val("");
    $("#humid1").val("");
    $("#humid2").val("");
    $("#humid3").val("");
    $("#humid4").val("");
    $("#humid5").val("");
    $("#humid6").val("");
    $("#notes").val("");
}

// Defines function for grabbing information and organizes into an object
function grabInfo() {
    var name = $("#nocName").val();
    var note = $("#notes").val();
    var logInfo = {
        noc: name,
        notes: note
    };
    var crac1 = $("#crac1").val();
    var crac2 = $("#crac2").val();
    var crac3 = $("#crac3").val();
    var crac4 = $("#crac4").val();
    var crac5 = $("#crac5").val();
    var crac6 = $("#crac6").val();
    var temp1 = $("#temp1").val();
    var temp2 = $("#temp2").val();
    var temp3 = $("#temp3").val();
    var temp4 = $("#temp4").val();
    var temp5 = $("#temp5").val();
    var temp6 = $("#temp6").val();
    var humid1 = $("#humid1").val();
    var humid2 = $("#humid2").val();
    var humid3 = $("#humid3").val();
    var humid4 = $("#humid4").val();
    var humid5 = $("#humid5").val();
    var humid6 = $("#humid6").val();
    logInfo[crac1] = {
        tempFarenheit: temp1,
        humidPercent: humid1
    };
    logInfo[crac2] = {
        tempFarenheit: temp2,
        humidPercent: humid2
    };
    logInfo[crac3] = {
        tempFarenheit: temp3,
        humidPercent: humid3
    };
    logInfo[crac4] = {
        tempFarenheit: temp4,
        humidPercent: humid4
    };
    logInfo[crac5] = {
        tempFarenheit: temp5,
        humidPercent: humid5
    };
    logInfo[crac6] = {
        tempFarenheit: temp6,
        humidPercent: humid6
    };
    console.log(logInfo);
    return logInfo;
};

// Load jQuery
$(document).ready(function () {
    $("#submit").click(function () {
        updateDate();
        submitForm(grabInfo());
    })
});