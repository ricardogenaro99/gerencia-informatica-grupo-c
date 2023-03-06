// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  updateDoc,
} from "firebase/firestore";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { generateUniqueId } from "../utils/generalFunctions";

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

const collectionName = "publications";
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);

export const getPublications = async () => {
  const publicationsCol = collection(db, collectionName);
  const publicationSnapshot = await getDocs(publicationsCol);
  const publicationList = publicationSnapshot.docs.map((doc) => {
    return { ...doc.data(), id: doc.id };
  });
  return publicationList;
};

export const getPublicationById = async (id) => {
  const publicationRef = doc(db, collectionName, id);
  const publicationSnapshot = await getDoc(publicationRef);
  return { ...publicationSnapshot.data() };
};

export const savePublication = async (payload) => {
  const publicationsCol = collection(db, collectionName);
  await addDoc(publicationsCol, payload);
};

export const updatePublication = async (id, updatedFields) => {
  await updateDoc(doc(db, collectionName, id), updatedFields);
};

export const deletePublication = async (id) => {
  await deleteDoc(doc(db, collectionName, id));
};

export const showHidePublication = async (id, updatedFields) => {
  await updatePublication(id, {
    ...updatedFields,
    deleted: !updatedFields.deleted,
  });
};

export const uploadFile = async (file, dir = "") => {
  const uuid = generateUniqueId();
  const storageRef = ref(storage, `${dir}/${uuid}-${file.name}`);
  await uploadBytes(storageRef, file);
  return getDownloadURL(storageRef);
};
