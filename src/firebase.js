// import firebase app function
import { initializeApp } from "firebase/app";

// firebase database configuration
const firebaseConfig = {
  apiKey: "AIzaSyAa_Xv0b44rtQuUWa6NMuIyEHNdXM-MDL4",
  authDomain: "superhero-showdown-54de3.firebaseapp.com",
  databaseURL: "https://superhero-showdown-54de3-default-rtdb.firebaseio.com",
  projectId: "superhero-showdown-54de3",
  storageBucket: "superhero-showdown-54de3.appspot.com",
  messagingSenderId: "324183819789",
  appId: "1:324183819789:web:c06b993fa689285883f744"
};

// firebase app intialize function variable
const firebase = initializeApp(firebaseConfig);

// export firebase variable
export default firebase;