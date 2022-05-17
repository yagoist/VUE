import firebase from 'firebase/compat/app'
import 'firebase/compat/database'
import 'firebase/compat/auth'

const firebaseConfig = {
    apiKey: "AIzaSyD_M5ia04hFGTROFhdgnxggSZO6BVXUEHM",
    authDomain: "fir-leson-gb.firebaseapp.com",
    projectId: "fir-leson-gb",
    storageBucket: "fir-leson-gb.appspot.com",
    messagingSenderId: "819344234298",
    appId: "1:819344234298:web:d22d62d7464e939ae0e203"
  };
  

  const firebasedb = firebase.initializeApp(firebaseConfig)
  export const db = firebasedb.database().ref()
  export const auth = firebase.auth()