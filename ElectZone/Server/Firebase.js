
import { initializeApp,getApps } from "firebase/app";
import {initializeAuth,getAuth} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyA6QTLX1SDCi6Fs8jSFOrtpf8bR3a4n4d8",
  authDomain: "electzone-ac081.firebaseapp.com",
  projectId: "electzone-ac081",
  storageBucket: "electzone-ac081.firebasestorage.app",
  messagingSenderId: "89748707261",
  appId: "1:89748707261:web:bc00df601fb94aae6ba4d4",
  measurementId: "G-2FWZLRL9WX"
};
let app ,auth;
try{
  if(getApps().length === 0){
    app = initializeApp(firebaseConfig);
    auth = initializeAuth(app);
  }else{
    app = getApps()[0];
    auth = getAuth();
  }
}catch(error){
console.log(error.message);
}
export {app ,auth};