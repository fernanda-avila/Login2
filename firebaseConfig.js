
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDtmpSlq0hGctgDO1EKVd9AWutWqaH1Gmc",
  authDomain: "login-teste-a8802.firebaseapp.com",
  projectId: "login-teste-a8802",
  storageBucket: "login-teste-a8802.firebasestorage.app",
  messagingSenderId: "590516211433",
  appId: "1:590516211433:web:146366219312901217aa78",
  measurementId: "G-FC6TV7RGMR"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);


export async function initAnalyticsIfSupported() {
  try {
    const analyticsModule = await import("firebase/analytics");
    const { isSupported, getAnalytics } = analyticsModule;
    if (await isSupported()) {
      
      const analytics = getAnalytics(app);
      console.log("Firebase Analytics initialized");
      return analytics;
    } else {
      console.log("Firebase Analytics not supported in this environment");
      return null;
    }
  } catch (e) {
  
    console.warn("Analytics initialization skipped:", e);
    return null;
  }
}

