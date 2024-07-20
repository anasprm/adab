
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDgulR7dHUAGjUWAruXgpVJGMZlczG-wZE",
    authDomain: "web1-f019b.firebaseapp.com",
    databaseURL: "https://web1-f019b-default-rtdb.firebaseio.com",
    projectId: "web1-f019b",
    storageBucket: "web1-f019b.appspot.com",
    messagingSenderId: "539144616343",
    appId: "1:539144616343:web:bbbb470f816557c95a2cd2"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

let cotactinfo = firebase.database().ref("infos");

document.querySelector(".contact").addEventListener("submit",submitForm);

function submitForm(e)
{e.preventDefault();
  let name=document.querySelector(".name").value;
  let email=document.querySelector(".email").value;
  let password=document.querySelector(".password").value;
  saveForminfo(name,email);
}

function saveForminfo (name,email){
  let newforminfo=cotactinfo.push();
  newForminfo.set(
    {

      name:name,
      email:email
    }
  );
}