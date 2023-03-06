import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { ModalLoader } from "../components";
import { auth } from "../services/firebase";

export const GlobalContext = createContext();

export const useGlobal = () => {
  const context = useContext(GlobalContext);
  if (!context) throw new Error("No hay proveedor de autenticación.");
  return context;
};

export function GlobalProvider({ children }) {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(false);

  const signup = useCallback(async (email, password) => {
    try {
      setLoading(true);
      const res = await createUserWithEmailAndPassword(auth, email, password);
      setUser(res.user);
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
    }
  }, []);

  const login = useCallback(async (email, password) => {
    try {
      setLoading(true);
      const res = await signInWithEmailAndPassword(auth, email, password);
      setUser(res.user);
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
    }
  }, []);

  const logout = useCallback(() => {
    setLoading(true);
    setTimeout(signOut, 500, auth);
    resetStates();
  }, []);

  const resetStates = () => {
    setUser();
    setLoading(false);
  };

  const resetPassword = (email) => sendPasswordResetEmail(auth, email);

  useEffect(() => {
    const unsubuscribe = onAuthStateChanged(auth, async (currentUser) => {
      setLoading(true);
      if (!currentUser) {
        resetStates();
        return;
      }
      try {
        setUser(currentUser);
      } catch (err) {
        // // const pathAuthRoute = location.pathname.split("/");
        // // pathAuthRoute.includes("register")
        // //   ? navigate(`${pathAuth}/register`)
        // //   : navigate(`${pathAuth}/login`);
      } finally {
        setLoading(false);
      }
    });

    return () => unsubuscribe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const valueMemo = useMemo(() => {
    return { login, signup, logout, resetPassword, user, loading, setLoading };
  }, [loading, login, logout, signup, user]);

  return (
    <GlobalContext.Provider value={valueMemo}>
      {loading && <ModalLoader />}
      {children}
    </GlobalContext.Provider>
  );
}
