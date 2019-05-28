$(document).ready(function(){
  var config = {
    apiKey: "AIzaSyAYLkNfHoFRxS6Zl1rIk5aGAy9YHpM66Dg",
    authDomain: "trainassignment-5f1b1.firebaseapp.com",
    databaseURL: "https://trainassignment-5f1b1.firebaseio.com",
    storageBucket: "trainassignment-5f1b1.appspot.com"
  };
  firebase.initializeApp(config);

  // Get a reference to the database service
  var database = firebase.database();


$("button").on("click", function () {
    console.log("you've been clicked!", $("#train-name").val())
    console.log("you've been clicked!", $("#destination").val())
    console.log("you've been clicked!", $("#startDate").val())
    console.log("you've been clicked!", $("#frequency").val())
    var newTrain= {
      trainName: $("#train-name").val(),
      destination: $("#destination").val(),
      startDate: $("#startDate").val(),
      frequency: $("#frequency").val(),
    }
    database.ref().push(newTrain)
  })

  database.ref().on("child_added", function(childSnapshot) {
  console.log(childSnapshot.val())

    $("#full-member-list").append("<tr class='newTrain'> <th class='trainName'> " +
      childSnapshot.val().trainName +
      " </th><th class='destination'> " + childSnapshot.val().destination +
      " </th><th class='startDate'> " + childSnapshot.val().startDate +
      " </th><th class='frequency'> " + childSnapshot.val().frequency +
      " </th><th class='frequency'> " + childSnapshot.val().frequency +
      " </th></tr>");

    // Handle the errors
  }, function(errorObject) {
    console.log("Errors handled: " + errorObject.code);
  });
})

