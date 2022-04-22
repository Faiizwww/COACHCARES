const auth = firebase.auth()
var user = auth.currentUser
const db = firebase.firestore()

const signUpButton = document.getElementById('submitButton')
signUpButton.addEventListener('click', register)
function register() {
        var username = document.getElementById('username').value
        var email = document.getElementById('email').value
        var password = document.getElementById('password').value
        auth.createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                user = userCredential.user

                auth.signInWithEmailAndPassword(email, password)

                db.collection("User").doc(user.uid).set({
                    Username: username,
                    Email: email,
                    Password: password,
                    UID: user.uid,
                    Role: "User"
                })
            })
            .catch((error) =>{
                var errorCode = error.code
                var errorMessage = error.message
                console.log("Error " + errorCode + " : " + errorMessage)
            })
}

