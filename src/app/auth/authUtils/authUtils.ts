import {
  createUserWithEmailAndPassword,
  getAuth,
  updateProfile,
} from "firebase/auth";
import app from "../../../firebase";
import { useDispatch } from "react-redux";
import { showNotification } from "@mantine/notifications";

// Important Variables
const auth = getAuth(app);
const user = auth.currentUser;

class AuthUtils {
  static getUsrtProfileData = () => {
    if (user !== null) {
      return user;
    } else {
      return "NO Signed In User";
    }
  };

  static updateUserName = (name: string, photo: string) => {
    if (user !== null) {
      updateProfile(user, {
        displayName: name,
        photoURL: photo,
      })
        .then(() => {
          // Profile updated!
          showNotification({ message: "Doene Changes", color: "green" });
        })
        .catch((error) => {
          // An error occurred
          showNotification({ message: "Sorry Can't Update Now", color: "red" });
        });
    }
  };
}

export default AuthUtils;
