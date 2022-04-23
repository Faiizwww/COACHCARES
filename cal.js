const db = firebase.firestore()

const calendarButton = document.getElementById('nextButton')
nextButton.addEventListener('click', next)
function next() {
    var username = document.getElementById('username').value
    var email = document.getElementById('email').value
    var password = document.getElementById('password').value

                db.collection("User").doc(user.uid).collection("activities").doc("calories").collection("heart").doc("water").collection("sleep").set({
                   activities: activities,
                   calories: calories,
                   heart: heart,
                   water: water,
                   sleep: sleep,
                   Role: "User"
                })
                .then(function() {
                    console.log("Document successfully written!");
                })
                .catch(function(error){
                    console.log("Error writing document: ",error);
                });
        
}