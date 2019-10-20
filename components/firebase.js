import firebase from 'firebase/app';
import "firebase/firestore";
import 'firebase/auth';
import 'firebase/storage';


const firebaseConfig = {
    apiKey: "AIzaSyDNJGm5r1GPqlg1Ldjj-RKC5YcwGWFAbxk",
    authDomain: "product-challenger.firebaseapp.com",
    databaseURL: "https://product-challenger.firebaseio.com",
    projectId: "product-challenger",
    storageBucket: "product-challenger.appspot.com",
    messagingSenderId: "1061594925169",
    appId: "1:1061594925169:web:d743b21b1cb755bbf0f3d0",
    measurementId: "G-33QYXFHPJR"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}



console.log("initializing app");
console.log(firebase);

export const firestore = firebase.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage();
export default firebase;
