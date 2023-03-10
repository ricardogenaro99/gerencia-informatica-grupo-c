import { Route, Routes } from "react-router-dom";
import { MainLayout } from "./app/layouts";
import {
  Equipo,
  Home,
  IniciarSesion,
  NotFound,
  Publicacion,
  PublicacionEdit,
  Publicaciones,
} from "./app/pages";
import { RestrictAuth } from "./app/routes/guards";

function App() {
  return (
    <MainLayout>
      <Routes path="/">
        <Route index element={<Home />} />
        <Route path="auth">
          <Route
            path="iniciar-sesion"
            element={
              <RestrictAuth>
                <IniciarSesion />
              </RestrictAuth>
            }
          />
          {/* <Route
            path="crear-cuenta"
            element={
              <RestrictAuth>
                <CrearCuenta />
              </RestrictAuth>
            }
          /> */}
        </Route>
        <Route path="equipo" element={<Equipo />} />
        <Route path="publicaciones">
          <Route index element={<Publicaciones />} />
          <Route path=":id" element={<Publicacion />} />
          <Route path="edit">
            <Route path=":id" element={<PublicacionEdit />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </MainLayout>
  );
}

export default App;
