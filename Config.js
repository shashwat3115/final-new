
import firebase from 'firebase'
require('@firebase/firestore')


const firebaseConfig = {
    apiKey: "AIzaSyDvHIEfnbErjLPOo-F-ECaA-EO3rTFqzoc",
    authDomain: "timetable-app-6c810.firebaseapp.com",
    databaseURL: "https://timetable-app-6c810.firebaseio.com",
    projectId: "timetable-app-6c810",
    storageBucket: "timetable-app-6c810.appspot.com",
    messagingSenderId: "687345201548",
    appId: "1:687345201548:web:dd84c2cb83dc395b9ea6a9"
  };
  // Initialize Firebase
  if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
  }

  export default firebase.firestore()
