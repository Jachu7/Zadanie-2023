
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
// hold up, you need to add your own firebase config here
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;