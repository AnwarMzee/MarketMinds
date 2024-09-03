<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyB_quRQBU4uRKylCP8PpeQXUv8EFSnsbc4",
    authDomain: "marketminds-3d569.firebaseapp.com",
    projectId: "marketminds-3d569",
    storageBucket: "marketminds-3d569.appspot.com",
    messagingSenderId: "412000510536",
    appId: "1:412000510536:web:cbb1e8bfe1249060042e7d",
    measurementId: "G-4B5TW239NK"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>