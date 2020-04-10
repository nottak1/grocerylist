/** PART A : STORE LIST FUNCTIONS */

// Adding a store
let count = 2;
function addStore() {
    const storeName = document.querySelector("#storeName").value;
    console.log(storeName);
    let thisUser = firebase.auth().currentUser.uid;
    db.collection("stores").doc(thisUser).set({
        store: " " + storeName
    })
    .then(function() {
        console.log("document successfully written");
    })
    .catch(function(error) {
        console.log("error writing document");
    })
    
    let nextStore = document.getElementById("jumboStore" + count);
    nextStore.style.display="block";
    let storeTitle = document.getElementById("store" + count);
    storeTitle.innerHTML = "" + storeName;
    count++;
    document.getElementById("storeName").value="";
}


// Deletes a store
let store2 = document.getElementById("jumboStore2");
function deleteStore2() {
    store2.style.display="none";
}
let store3 = document.getElementById("jumboStore3");
function deleteStore3() {
    store3.style.display="none";
}
let store4 = document.getElementById("jumboStore4");
function deleteStore4() {
    store4.style.display="none";
}