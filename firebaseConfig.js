// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// NOTE: Do NOT import or call analytics synchronously in environments
// that may not have a DOM (Expo / React Native). Use dynamic import
// + isSupported() to safely initialize analytics only when available.

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDtmpSlq0hGctgDO1EKVd9AWutWqaH1Gmc",
  authDomain: "login-teste-a8802.firebaseapp.com",
  projectId: "login-teste-a8802",
  storageBucket: "login-teste-a8802.firebasestorage.app",
  messagingSenderId: "590516211433",
  appId: "1:590516211433:web:146366219312901217aa78",
  measurementId: "G-FC6TV7RGMR"
};

// Initialize Firebase app (safe)
export const app = initializeApp(firebaseConfig);
// Export an auth instance for use across the app. This is safe to call
// in React Native / Expo and will not try to touch the DOM.
export const auth = getAuth(app);

// Try to initialize analytics only if supported.
// This avoids errors like "getElementsByTagName of undefined" in RN/Expo.
export async function initAnalyticsIfSupported() {
  try {
    const analyticsModule = await import("firebase/analytics");
    const { isSupported, getAnalytics } = analyticsModule;
    if (await isSupported()) {
      // eslint-disable-next-line no-unused-vars
      const analytics = getAnalytics(app);
      console.log("Firebase Analytics initialized");
      return analytics;
    } else {
      console.log("Firebase Analytics not supported in this environment");
      return null;
    }
  } catch (e) {
    // Swallow errors during analytics setup in non-browser envs.
    console.warn("Analytics initialization skipped:", e);
    return null;
  }
}

// Optionally trigger initialization (uncomment when you want it to run):
// initAnalyticsIfSupported();