let imageURL = document.querySelector("#imageURL")
var config = {
  apiKey: "AIzaSyCJKDwtk29W3zq89GvgVkjpyxS1z-7Pd6c",
  authDomain: "cloud-cafe-9c804.firebaseapp.com",
  databaseURL: "https://cloud-cafe-9c804.firebaseio.com",
  projectId: "cloud-cafe-9c804",
  storageBucket: "cloud-cafe-9c804.appspot.com",
  messagingSenderId: "522301092944"
};
firebase.initializeApp(config);
const auth = firebase.auth();
const db = firebase.firestore();
const functions = firebase.functions();
const storage = firebase.storage();
let userCount = document.querySelector("#userCount");
let bookingCount = document.querySelector('#bookingCount');
let tourCount = document.querySelector("#tourCount");
db.collection('timetable').doc("RxbL42EDq0SnVbqhAtRS").onSnapshot(snapshot => {

  let changes = snapshot.data();
 let str = changes.timetable;

let res = str.replace("http", "https");
console.log(res);
  imageURL.src = res;

  // userCount.textContent = changes.length

});
