import { initializeApp } from "@firebase/app";
import { getDatabase } from "@firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyD-YaLyjmM44WPFolhBa6cL7eSVQNtGLNk",
    authDomain: "firevuechat-e9a4d.firebaseapp.com",
    projectId: "firevuechat-e9a4d",
    storageBucket: "firevuechat-e9a4d.appspot.com",
    messagingSenderId: "911955350375",
    appId: "1:911955350375:web:056e61e36e5749087a55c2"
}

const app = initializeApp(firebaseConfig);

const db = getDatabase(app);
export { db };