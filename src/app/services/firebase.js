// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
} from "firebase/firestore";

import { getStorage, getStream, ref } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQDCQIGMo7JGptIW43CfX616bFW1nU8fo",
  authDomain: "gerenciainformatica-c.firebaseapp.com",
  projectId: "gerenciainformatica-c",
  storageBucket: "gerenciainformatica-c.appspot.com",
  messagingSenderId: "122722096532",
  appId: "1:122722096532:web:6f274950899bc9cab0ab81",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);

export const getPublications = async () => {
  const publicationsCol = collection(db, "publications");
  const publicationSnapshot = await getDocs(publicationsCol);
  const publicationList = publicationSnapshot.docs.map((doc) => {
    return { ...doc.data(), id: doc.id };
  });
  return publicationList;
};

export const getPublicationById = async (id) => {
  const publicationRef = doc(db, "publications", id);
  const publicationSnapshot = await getDoc(publicationRef);
  return { ...publicationSnapshot.data(), id: publicationSnapshot.id };
};

export const getStorageByName = async (url) => {
  const storageRef = ref(storage);
  console.log(storageRef);
  const storageSnapshot = getStream(storageRef);
  console.log(
    "🚀 ~ file: firebase.js:50 ~ getStorageByName ~ storageSnapshot:",
    storageSnapshot
  );
  return storageSnapshot;
};
