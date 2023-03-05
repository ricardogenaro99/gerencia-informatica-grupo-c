import { v4 as uuid } from "uuid";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
} from "firebase/firestore";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";

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
export const auth = getAuth(app);

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

export const uploadFile = async (file, dir = "") => {
  const storageRef = ref(storage, `${dir}/${uuid()}`);
  await uploadBytes(storageRef, file);
  return getDownloadURL(storageRef);
};
