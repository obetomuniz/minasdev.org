import Head from "next/head"
import getJSON from "../helpers/getJSON"
import { Header, Newsletter, Footer } from "../components/Common"
import { About, NextEvents } from "../components/Home"
import { Wrapper, HeaderContent } from "../components/Home/ui"

const URL = "https://minasdev.org/"
const TITLE = "Minas Dev"
const DESCRIPTION =
  "O Minas Dev visa unir comunidades e membros dos setores de Tecnologia da Informação de Minas Gerais."

const Home = ({ events }) => (
  <Wrapper>
    <Head>
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
    </Head>

    <HeaderContent>
      <Header mainNav={{ url: "/vagas", label: "VAGAS" }} />
      <About />
    </HeaderContent>

    <Newsletter />
    <NextEvents events={events} />
    <Footer />
  </Wrapper>
)

export const getServerSideProps = async () => {
  let events = await getJSON("events.json")
  events = events.filter((event) => event.sources.length > 0)
  events = events.map((event) => event.sources).flat()

  return {
    props: {
      events,
    },
  }
}

export default Home
