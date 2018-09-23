import React from "react";
import Helmet from "react-helmet";
import { NextEvents } from "@containers/Home";
import { Header, MinasDevLogo, Newsletter, Footer } from "@components/Common";
import { About } from "@components/Home";
import { Wrapper, ParallaxTop, ParallaxBottom } from "./UI";

const URL = "https://minasdev.org/vagas";
const TITLE = "Minas Dev";
const DESCRIPTION =
  "O Minas Dev visa unir comunidades e membros dos setores de Tecnologia da Informação de Minas Gerais.";

const Home = () => (
  <Wrapper>
    <Helmet>
      {/* Prefetch external assets */}
      <link rel="dns-prefetch" href={URL} />

      {/* About */}
      <title>{TITLE}</title>
      <meta name="description" content={DESCRIPTION} />

      {/* Facebook Tags */}
      <meta property="og:title" content={TITLE} />
      <meta property="og:description" content={DESCRIPTION} />
      <meta property="og:url" content={URL} />
      <meta property="og:site_name" content={TITLE} />

      {/* Twitter Tags */}
      <meta name="twitter:description" content={DESCRIPTION} />
      <meta name="twitter:url" content={URL} />
      <meta name="twitter:title" content={TITLE} />

      {/* Schema.org */}
      <meta itemProp="name" content={TITLE} />
      <meta itemProp="description" content={DESCRIPTION} />
    </Helmet>

    <ParallaxTop>
      <Header />
      <About />
    </ParallaxTop>

    <ParallaxBottom>
      <Newsletter />
      <NextEvents />
      <Footer />
    </ParallaxBottom>
  </Wrapper>
);

export default Home;
