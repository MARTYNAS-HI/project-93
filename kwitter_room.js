
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyA4LhEx9C9UgW4EoPmeomMn4L_Yscxcies",
    authDomain: "class-93-d950c.firebaseapp.com",
    databaseURL: "https://class-93-d950c-default-rtdb.firebaseio.com",
    projectId: "class-93-d950c",
    storageBucket: "class-93-d950c.appspot.com",
    messagingSenderId: "939950555516",
    appId: "1:939950555516:web:d64ebcca781fda703b24f9",
    measurementId: "G-L5WM45HHSF"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
