
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './config.firebase';


if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}

const userDetails = {
    isSignIn: false,
    name: '',
    email: '',
    photo: '',
    uid: '',
}

export const googleSignIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {
            const { displayName, email, photoURL, uid } = result.user;
            const userData = {
                isSignIn: true,
                name: displayName,
                email: email,
                photo: photoURL,
                uid: uid,
                errMessage: ''
            }
            return userData;
        }).catch((error) => {
            const errData = {
                errMessage: error.message,
            }
            return errData;
        });
}

export const fbSignIn = () => {
    const provider = new firebase.auth.FacebookAuthProvider();
    return firebase
        .auth()
        .signInWithPopup(provider)
        .then((result) => {
            const { displayName, email, photoURL, uid } = result.user;
            const userData = {
                isSignIn: true,
                name: displayName,
                email: email,
                photo: photoURL,
                uid: uid,
                errMessage: ''
            }
            return userData;
        }).catch((error) => {
            const errData = {
                errMessage: error.message,
            }
            return errData;
        });
}
export const ghSignIn = () => {
    const provider = new firebase.auth.GithubAuthProvider();
    return firebase
        .auth()
        .signInWithPopup(provider)
        .then((result) => {
            const { displayName, email, photoURL, uid } = result.user;
            const userData = {
                isSignIn: true,
                name: displayName,
                email: email,
                photo: photoURL,
                uid: uid,
                errMessage: ''
            }
            return userData;
        }).catch((error) => {
            const errData = {
                errMessage: error.message,
            }
            return errData;
        });
}

export const emailSignUp = (name, email, password) => {
    return firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((result) => {
            const { email, photoURL, uid } = result.user;
            const userData = {
                isSignIn: true,
                name: name,
                email: email,
                photo: photoURL,
                uid: uid,
                errMessage: ''
            }

            // For updating Name
            var user = firebase.auth().currentUser;
            user.updateProfile({
                displayName: name
            }).then(() => {
                // Name Update successful.
            }).catch((error) => {
                const errData = {
                    errMessage: error.message,
                }
                return errData;
            });
            return userData;
        })
        .catch((error) => {
            const errData = {
                errMessage: error.message,
            }
            return errData;
        });
}

export const emailSignIn = (email, password) => {
    return firebase.auth().signInWithEmailAndPassword(email, password)
        .then((result) => {
            const { displayName, email, photoURL, uid } = result.user;
            const userData = {
                isSignIn: true,
                name: displayName,
                email: email,
                photo: photoURL,
                uid: uid,
                errMessage: ''
            }
            return userData;
        }).catch((error) => {
            const errData = {
                errMessage: error.message,
            }
            return errData;
        });
}