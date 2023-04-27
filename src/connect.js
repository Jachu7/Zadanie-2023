
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyDQ8tu-CsB9bu6lrjFb4dd2NUVtftacsf0",
    authDomain: "zadanie-2023.firebaseapp.com",
    projectId: "zadanie-2023",
    storageBucket: "zadanie-2023.appspot.com",
    messagingSenderId: "697600276546",
    appId: "1:697600276546:web:b6304bae812ee497a815db",
    measurementId: "G-VXC6LFCWXS"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;