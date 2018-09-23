import React from "react";
import Helmet from "react-helmet";
import { Wrapper, NotFoundTitle } from "./UI";

const NotFound = () => {
  return (
    <Wrapper>
      <Helmet title={"Minas Dev - Página Não Encontrada"} />
      <NotFoundTitle>Oops... Página Não Encontrada!</NotFoundTitle>
    </Wrapper>
  );
};

export default NotFound;
