const firebaseConfig = {
    apiKey: "AIzaSyC3942q-7v3iacvM4MOCL26JN-DSf1oxuw",
    authDomain: "proiect2023-302c1.firebaseapp.com",
    projectId: "proiect2023-302c1",
    storageBucket: "proiect2023-302c1.appspot.com",
    messagingSenderId: "616136327003",
    appId: "1:616136327003:web:a05d66eaeccfaa1404647e",
    measurementId: "G-X33YGP7DPX"
  };

  const postareBtn = document.getElementById('postare-btn');
  const admin = "s0we8GCkpcMPH3gEw2gnJI1DwxT2";
  
  firebase.initializeApp(firebaseConfig);

  // referinta la serviciu de autentificare
  const auth = firebase.auth();

// referinta la baza de date
const db = firebase.firestore();

// referinta la colectia teme din Baza de date
const temeDb = db.collection("teme");

  let user = null;

const yearElement = document.getElementById('year');

if (yearElement) {
    let date = new Date();
    
    yearElement.innerHTML = date.getFullYear() + " ©";
}

function mobileMenu() {
    var x = document.getElementById("navbar");
    if (x.className === "") {
        x.className = "mobile";
    } else {
        x.className = "";
    }
}

function refresh() {
    window.location.reload();
}

function isAdmin() {
    if (user == null) {
        return false;
    }

    return admin == user.uid;
}

function formatareData(stamp) {

    let data = new Date(stamp);

    let an = data.getFullYear();
    let luna = data.getMonth() + 1;
    let zi = data.getDate();

    let result = zi + "-" + luna + "-" + an;
    
    return result;
}

auth.onAuthStateChanged( function(fuser) {
    user = fuser;
    
    if (isAdmin() == true) {
        postareBtn.style.display = "block";
    }
    else {
        postareBtn.style.display = "none";
    }

    document.querySelector("body").style.display = "block";
});


