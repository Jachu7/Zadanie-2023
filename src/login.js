import app from "./connect";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


const auth = getAuth(app);

const loginWithEmailAndPassword = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    console.log(user);
    return user;
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode, errorMessage);
    throw new Error("Authentication failed");
  }
};



const logout = () => {
    signOut(auth)
      .then(() => {
        console.log("User signed out");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  

export { loginWithEmailAndPassword, logout };
