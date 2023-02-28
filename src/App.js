import { Route, Routes } from "react-router-dom";
import { MainLayout } from "./app/layouts";
import { Publicaciones, Equipo, Home } from "./app/pages";

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/equipo" element={<Equipo />} />
        <Route path="/publicaciones" element={<Publicaciones />} />
      </Routes>
    </MainLayout>
  );
}

export default App;
