import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'


const firebaseConfig = {
    apiKey: "AIzaSyBu7DcBe3S8fJrDmhJ7VVko64TZychguK8",
    authDomain: "olx-clone-abe40.firebaseapp.com",
    projectId: "olx-clone-abe40",
    storageBucket: "olx-clone-abe40.appspot.com",
    messagingSenderId: "888943375324",
    appId: "1:888943375324:web:d63aacdfe38bfd8e711519",
    measurementId: "G-ZS1Z9P0F54"
};



export default firebase.initializeApp(firebaseConfig)