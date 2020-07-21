import Head from "next/head"
import { HeaderTopNav, Header, Newsletter, Footer } from "../components/Common"
import { About } from "../components/Home"
import { Wrapper, Background, HeaderContent } from "../components/Home/ui"

const URL = "https://minasdev.org/"
const TITLE = "Minas Dev"
const DESCRIPTION =
  "O Minas Dev visa unir comunidades e membros dos setores de Tecnologia da Informação de Minas Gerais."

const Home = () => (
  <Wrapper>
    <Head>
      {/* SEO */}
      <link rel="canonical" href={URL} />

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
      {/* PWA Configs */}
      <link rel="manifest" href="/manifest.json" />
      <meta name="mobile-web-app-capable" content="no" />
      <meta name="apple-mobile-web-app-capable" content="no" />
      <meta name="application-name" content={TITLE} />
      <meta name="apple-mobile-web-app-title" content={TITLE} />
      <meta name="theme-color" content="#e64c3b" />
      <meta name="msapplication-navbutton-color" content="#e64c3b" />
      <meta
        name="apple-mobile-web-app-status-bar-style"
        content="black-translucent"
      />
      <meta name="msapplication-starturl" content="/" />
    </Head>

    <HeaderTopNav />

    <HeaderContent>
      <Header />
      <About />
      <Background aria-hidden="true">
        <source
          srcSet={require("../public/images/background.png?webp")}
          type="image/webp"
        />
        <source srcSet="/images/background.png" type="image/png" />
        <img
          src="/images/background.png"
          alt="Plano de fundo: Um dedo tocando uma tela de celular"
        />
      </Background>
    </HeaderContent>

    <Newsletter />

    <Footer />
  </Wrapper>
)

export const config = { unstable_runtimeJS: false }

export default Home
