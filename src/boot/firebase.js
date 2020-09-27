import * as firebase from 'firebase/app';

// Add the firebase products that you want to use
import 'firebase/auth';
// import 'firebase/firestore';

let firebaseConfig = {
	apiKey: "AIzaSyBOESMR7HMfBHwEcZpOEU_oeWsZ87ROJqA",
	authDomain: "haykokalipsis-awesome-todo.firebaseapp.com",
	databaseURL: "https://haykokalipsis-awesome-todo.firebaseio.com",
	projectId: "haykokalipsis-awesome-todo",
	storageBucket: "haykokalipsis-awesome-todo.appspot.com",
	messagingSenderId: "1041270132140",
	appId: "1:1041270132140:web:ad3e148f393ec93c19be09",
	measurementId: "G-0CH7L23NTS"
};

// Initialize Firebase
let firebaseApp = firebase.initializeApp(firebaseConfig);
let firebaseAuth = firebaseApp.auth();
// firebase.analytics();

export { firebaseAuth }
