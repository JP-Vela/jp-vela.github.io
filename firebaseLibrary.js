
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDSC8XR8gI7n3BEPtQifpuOse82yiBl-kc",
    authDomain: "feisty-oxide-236718.firebaseapp.com",
    databaseURL: "https://feisty-oxide-236718.firebaseio.com",
    projectId: "feisty-oxide-236718",
    storageBucket: "feisty-oxide-236718.appspot.com",
    messagingSenderId: "11072209267",
    appId: "1:11072209267:web:b6cf54951d78f169b30506",
    measurementId: "G-6HFMEPMMZ4"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();


function writeUserData(name, email, message) {
  firebase.database().ref('users/'+name).once('value').then(function(data) {
    if(data.exists()){
      //console.log(data.val());
      firebase.database().ref('users/'+name).set({
      username: name,
      email: email,
      message: data.val().message+("---"+message),
    }, function(error) {
    if (error) {
      alert("Sorry, a technical issue happened and your message could not be sent.");
    } else {
      alert("It worked! I will get back to you as soon as I can.");
    }
    });

    } else {
      firebase.database().ref('users/'+name).set({
        username: name,
        email: email,
        message: message,
      }, function(error) {
      if (error) {
        alert("Sorry, a technical issue happened and your message could not be sent.");
      } else {
        alert("It worked! I will get back to you as soon as I can.");
      }
      });
    }
  });
}
//  writeUserData("dude","myemail");
