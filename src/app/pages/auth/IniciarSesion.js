import React from "react";
import { useGlobal } from "../../contexts/GlobalContext";
import { AuthLayout } from "../../layouts";

function IniciarSesion() {
  const { login } = useGlobal();
  return (
    <AuthLayout
      title="Iniciar Sesión"
      redirectOtherAuth="/auth/crear-cuenta"
      redirectOtherAuthLabel="¿No tienes cuenta?, Registrate"
      submitCallback={login}
    />
  );
}

export default IniciarSesion;
