import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Replace this with your own config details
var config = {
  apiKey: "AIzaSyBAdec2qnTXJLvyim-hfH45UDoNymkefu0",
  authDomain: "marioplan-894e0.firebaseapp.com",
  databaseURL: "https://marioplan-894e0.firebaseio.com",
  projectId: "marioplan-894e0",
  storageBucket: "marioplan-894e0.appspot.com",
  messagingSenderId: "150980838300"
};
firebase.initializeApp(config);
// firebase.firestore().settings({ timestampsInSnapshots: true });
// console.log(firebase.firestore())

export default firebase 
