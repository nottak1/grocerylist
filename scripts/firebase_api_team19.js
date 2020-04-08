        //---------------------------------------------------------------------
        // Your web app's Firebase configuration (9 lines of code)
        // Replace the configuration with YOUR project's API information
        // copied from the firebase console (settings) of your project.
        //---------------------------------------------------------------------
            // Your web app's Firebase configuration
        // Your web app's Firebase configuration
        var firebaseConfig = {
          apiKey: "AIzaSyD_uKa_8UQJtp1W25uEwx_t-Wjeek5miAw",
          authDomain: "grocerylist-fdb72.firebaseapp.com",
          databaseURL: "https://grocerylist-fdb72.firebaseio.com",
          projectId: "grocerylist-fdb72",
          storageBucket: "grocerylist-fdb72.appspot.com",
          messagingSenderId: "370562828425",
          appId: "1:370562828425:web:03c1eb87512a7e8e9d9e58"
        };

          //------------------------------------------------
          // Initialize Firebase and Firestore reference
          // Do not delete!
          //------------------------------------------------
          firebase.initializeApp(firebaseConfig);
          const db = firebase.firestore();