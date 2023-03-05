import React from "react";
import { useGlobal } from "../../contexts/GlobalContext";
import { AuthLayout } from "../../layouts";

function IniciarSesion() {
  const { signup } = useGlobal();
  return (
    <AuthLayout
      title="Crear Cuenta"
      redirectOtherAuth="/auth/iniciar-sesion"
      redirectOtherAuthLabel="¿Tienes cuenta?, Ingresa"
      submitCallback={signup}
    />
  );
}

export default IniciarSesion;
