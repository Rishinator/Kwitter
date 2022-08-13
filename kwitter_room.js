var firebaseConfig = {
      apiKey: "AIzaSyAo_Se6zXDACYdbK1oOT0vPkrKRvpMIql0",
      authDomain: "kwitternew-5eb98.firebaseapp.com",
      databaseURL: "https://kwitternew-5eb98-default-rtdb.firebaseio.com",
      projectId: "kwitternew-5eb98",
      storageBucket: "kwitternew-5eb98.appspot.com",
      messagingSenderId: "567827830008",
      appId: "1:567827830008:web:1e51d826e3fe9d4332570d"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome " + user_name + "!";


function addRoom()
{
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}
    
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#" + Room_names +"</div><hr>";
document.getElementById("output").innerHTML += row;      
});});}
getData();

function redirectToRoomName(name)
{
console.log(name);
localStorage.setItem("room_name", name);
window.location = "kwitter_page.html";
}


function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}