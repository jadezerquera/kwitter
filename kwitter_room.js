
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyApXCs4d_mtVvercglkD6avdmx30XLLZ8g",
      authDomain: "classtest-7cad1.firebaseapp.com",
      databaseURL: "https://classtest-7cad1-default-rtdb.firebaseio.com",
      projectId: "classtest-7cad1",
      storageBucket: "classtest-7cad1.appspot.com",
      messagingSenderId: "438919356571",
      appId: "1:438919356571:web:260b94e07379ddf36f263e"
    };
    
    
    // Initialize Firebase
 firebase.initializeApp(firebaseConfig);


 user_name=localStorage.getItem("user_name");
 document.getElementById("user_name").innerHTML="welcome" + user_name + "!";

 function addRoom()
 {
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name" , room_name);

      window.location = " index.html";
 }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name) { 
console.log(name);
 localStorage.setItem("room_name", name);
   window.location = "index.html";
 }

 function logout()
 {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
 }

