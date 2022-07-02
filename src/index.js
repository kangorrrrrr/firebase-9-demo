// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDoc, getDocs } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJp9OmuSmOtdmXsEmksFT8_BOUQiY654Q",
  authDomain: "fir-9-dojo-6f126.firebaseapp.com",
  projectId: "fir-9-dojo-6f126",
  storageBucket: "fir-9-dojo-6f126.appspot.com",
  messagingSenderId: "158713707649",
  appId: "1:158713707649:web:a90123929ccdd07cb82180"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Init FireStore and 
const db = getFirestore(app);

// collection ref
const colRef = collection(db, "books")

// get collection data
getDocs(colRef)
    .then((snapshot) => {
        let books = [];
        snapshot.docs.forEach((doc) => {
            books.push({ ...doc.data(), id: doc.id })
        })
        console.log(books);
    })
    .catch( err  => 
        console.log('Error ', err.message)
    
    )