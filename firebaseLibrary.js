
  // Your web app's Firebase configuration
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyA-ViQfuJax2qgSsCmrXkU62n1GgzdPiEA",
    authDomain: "bright-calculus-192808.firebaseapp.com",
    databaseURL: "https://bright-calculus-192808.firebaseio.com",
    projectId: "bright-calculus-192808",
    storageBucket: "bright-calculus-192808.appspot.com",
    messagingSenderId: "473684000709",
    appId: "1:473684000709:web:ef958d1a68a650753b95ac"
  };
  // Initialize Firebase
  var app = firebase.initializeApp(firebaseConfig);

//  firebase.analytics();
  console.log(firebase);
  var db = firebase.firestore();
  console.log(); 
  //var messages = db.collection("users").doc("messages");
  console.log(db);
  function writeUserData(name, email, message) {
     var messageDoc = db.collection("users");
     messageDoc.add({
       username: name,
       email: email,
       message:message,
     }).then(function (docRef){
      console.log("Document written with ID: ", docRef);
     }).catch(function(e){
       console.error("Error adding document: ", error);
       alert("Sorry, there was an error when submitting your form");
     });

  }
//  writeUserData("tes","test");