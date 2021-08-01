import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyA0aJi0NE1ZvvVvq-MpZghbkvUPkTqAw-s",
  authDomain: "wily-app-2fdb4.firebaseapp.com",
  projectId: "wily-app-2fdb4",
  storageBucket: "wily-app-2fdb4.appspot.com",
  messagingSenderId: "849092262617",
  appId: "1:849092262617:web:c8796586d140c5b4c39cc8"
};

if(firebase.apps.length === 0){
firebase.initializeApp(firebaseConfig);
}
export default firebase.firestore();
