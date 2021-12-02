
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyBOK6faZ4GYBmApYZuteLPug56YtWxuSX4",
      authDomain: "kwitter-938aa.firebaseapp.com",
      databaseURL: "https://kwitter-938aa-default-rtdb.firebaseio.com",
      projectId: "kwitter-938aa",
      storageBucket: "kwitter-938aa.appspot.com",
      messagingSenderId: "1067983325417",
      appId: "1:1067983325417:web:5a999b972ddda6a5230878"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
