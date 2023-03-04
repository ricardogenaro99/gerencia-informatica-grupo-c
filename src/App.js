import { Route, Routes } from "react-router-dom";
import { MainLayout } from "./app/layouts";
import { Publicaciones, Equipo, Home } from "./app/pages";
import Publicacion from "./app/pages/Publicacion";

function App() {
  return (
    <MainLayout>
      <Routes path="/">
        <Route index element={<Home />} />
        <Route path="equipo" element={<Equipo />} />
        <Route path="publicaciones">
          <Route index element={<Publicaciones />} />
          <Route path=":id" element={<Publicacion />} />
        </Route>
      </Routes>
    </MainLayout>
  );
}

export default App;
