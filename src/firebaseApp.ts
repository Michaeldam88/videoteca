import { initializeApp } from 'firebase/app';
import { Analytics, getAnalytics, isSupported } from 'firebase/analytics';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
};

const analyticsMock = {
    logEvent: () => {
        //
    },
    setCurrentScreen: () => {
        //
    },
    setUserId: () => {
        //
    },
};


export const firebaseApp = initializeApp(firebaseConfig);
export let checkSupport:boolean;
export let analytics: Analytics;

(async () => {
    checkSupport = await isSupported();
    if (checkSupport) {
        analytics = getAnalytics(firebaseApp);
    } else {
        analytics = analyticsMock as unknown as Analytics;
    }
})();
