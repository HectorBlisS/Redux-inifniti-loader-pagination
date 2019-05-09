import firebase from 'firebase'
// Your web app's Firebase configuration
let firebaseConfig = {
    apiKey: "AIzaSyCGN8a9Yaw3GL1Bj1YmPrHTrsRJMRBmIXs",
    authDomain: "fir-hub-3a019.firebaseapp.com",
    databaseURL: "https://fir-hub-3a019.firebaseio.com",
    projectId: "fir-hub-3a019",
    storageBucket: "fir-hub-3a019.appspot.com",
    messagingSenderId: "765151449645",
    appId: "1:765151449645:web:36d4d09054d83973"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export function login(email, password) {
    return firebase.auth()
        .signInWithEmailAndPassword(email, password)
        .then(snap => snap.user)
}