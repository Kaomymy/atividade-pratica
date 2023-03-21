const firebaseConfig = {
    apiKey: "AIzaSyDZ9pveVqK92qsn4k1qcvSVYTrSLqp9RbA",
    authDomain: "vamosconversar-ce6f9.firebaseapp.com",
    projectId: "vamosconversar-ce6f9",
    storageBucket: "vamosconversar-ce6f9.appspot.com",
    messagingSenderId: "122244969685",
    appId: "1:122244969685:web:4c1ee9b9df48c6f395de5c"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  function addUser()
  {
    userName = document.getElementById ("userName").value;
    firebase.database().ref("/").child(userName).update({
        purpose: "adicionar usuario"
    });
  }