
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
    firebase.database().ref('users/'+name).set({
      username: name,
      email: email,
      message: message,
    });
  }
//  writeUserData("dude","myemail");
