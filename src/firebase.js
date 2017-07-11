import firebase from 'firebase'

var config = {
  apiKey: "AIzaSyBX8NoV1QM34NpnWpXczDaBN5zsGosHDMA",
  authDomain: "fir-test-88cf7.firebaseapp.com",
  databaseURL: "https://fir-test-88cf7.firebaseio.com",
  projectId: "fir-test-88cf7",
  storageBucket: "fir-test-88cf7.appspot.com",
  messagingSenderId: "938016558700"
};

export default firebase.initializeApp(config);