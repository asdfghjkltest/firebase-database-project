// Initializing Firebase Database
var db = firebase.database();

// Formats date to structure and organize object
var dt = new Date();
var day = dt.getFullYear() + "/" + (dt.getMonth() + 1) + "/" + dt.getDate();
var time = dt.getHours() + "/" + dt.getMinutes() + "/" + dt.getSeconds();

// Define function to submit to Firebase
function submitForm(submission, day) {
    db.ref(day + "/visitors/" + time).set({
        visitor: submission,
        date: Date($.now())
    }, function (error) {
        if (error) {
            console.log("failed")
        } else {
            console.log("sucess")
        }
    }).then(clear());
};

// Define fuction to clear input value
function clear() {
    $("#visitorName").val("");
    $("#visitorEmail").val("");
    $("#visitorBusiness").val("");
    $("#visitorPurpose").val("");
}

// // Define function to read from Firebase
// function readDB() {
//     db.ref("/2019/11/9/").orderByKey().once("value")
//         .then(function (snapshot) {
//             snapshot.forEach(function (childSnapshot) {
//                 // key will be "ada" the first time and "alan" the second time
//                 var key = childSnapshot.key;
//                 // childData will be the actual contents of the child
//                 var childData = childSnapshot.val();
//                 console.log(key, childData);
//                 // $("#results").append(
//                 //     "<li>" +
//                 //     childData.date + "<br>" +
//                 //     JSON.stringify(childData.visitor) +
//                 //     "</li>")
//             });
//         });
// }

// Load jQuery and waits for click to gather info
$(document).ready(function () {
    $("#submit").click(function () {
        signer = {
            name: $("#visitorName").val(),
            email: $("#visitorEmail").val(),
            business: $("#visitorBusiness").val(),
            purpose: $("#visitorPurpose").val()
        }
        console.log(signer)
        submitForm(signer, day);
        $("#confirmation").fadeIn();
        $("#confirmation").fadeOut();
        // $("#results").text(readDB())
    })
    // $("#results").text(readDB())
});

// primary,gaitherburg maryland stuck on booting up reseed the ram
// greg david john omberto ignacio
// hrgi firewall, no changes, moved to another switch, similar situation before.