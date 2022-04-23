const db = firebase.firestore()

const calendarButton = document.getElementById('ButID_Submit')
calendarButton.addEventListener('click', calend)
function next() {
    var username = document.getElementById('username').value
    var email = document.getElementById('email').value
    var password = document.getElementById('password').value

                db.collection("User").doc(user.uid).collection("year").doc("month").collection("day").doc("1").set({
                   activities: 0,
                   calories: 0,
                   heart: 0,
                   water: 0,
                   sleep: 0
                })
                .then(function() {
                    console.log("Document successfully written!");
                })
                .catch(function(error){
                    console.log("Error writing document: ",error);
                });
        
}