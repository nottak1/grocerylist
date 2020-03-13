        //---------------------------------------------------------------------
        // Your web app's Firebase configuration (9 lines of code)
        // Replace the configuration with YOUR project's API information
        // copied from the firebase console (settings) of your project.
        //---------------------------------------------------------------------
        var firebaseConfig = {
            apiKey: "AIzaSyAACI1zKA1R4jnlB-alxRBbqVCx5zaxzYo",
            authDomain: "grocerylist-3592d.firebaseapp.com",
            databaseURL: "https://grocerylist-3592d.firebaseio.com",
            projectId: "grocerylist-3592d",
            storageBucket: "grocerylist-3592d.appspot.com",
            messagingSenderId: "946216088875",
            appId: "1:946216088875:web:f15b2247f54902b45e816e"
          };
          //------------------------------------------------
          // Initialize Firebase and Firestore reference
          // Do not delete!
          //------------------------------------------------
          firebase.initializeApp(firebaseConfig);
          const db = firebase.firestore();