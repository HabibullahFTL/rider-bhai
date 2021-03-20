
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './config.firebase';


if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}

export const googleSignIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {
            result.dataType = 'userData';
            return result;
        }).catch((error) => {
            error.dataType = 'error';
            return error;
        });
}

export const fbSignIn = () => {
    const provider = new firebase.auth.FacebookAuthProvider();
    return firebase
        .auth()
        .signInWithPopup(provider)
        .then((result) => {
            result.dataType = 'userData';
            return result;
        })
        .catch((error) => {
            error.dataType = 'error';
            return error;
        });
}
export const ghSignIn = () => {
    const provider = new firebase.auth.GithubAuthProvider();
    return firebase
        .auth()
        .signInWithPopup(provider)
        .then((result) => {
            result.dataType = 'userData';
            return result;
        }).catch((error) => {
            error.dataType = 'error';
            return error;
        });
}

export const emailSignUp = (name,email,password) => {
    return firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((result) => {
            result.dataType = 'userData';
            return result;
        })
        .catch((error) => {
            error.dataType = 'error';
            return error;
        });
}