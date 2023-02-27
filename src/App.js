import { Route, Routes } from "react-router-dom";
import MainLayout from "./app/layouts/MainLayout";
import { Documentos, Equipo, Home } from "./app/pages";

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/equipo" element={<Equipo />} />
        <Route path="/documentos" element={<Documentos />} />
      </Routes>
    </MainLayout>
  );
}

export default App;
