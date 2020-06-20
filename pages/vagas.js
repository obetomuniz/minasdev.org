import Head from "next/head"
import getJSON from "../helpers/getJSON"
import sortByDateAsc from "../helpers/sortByDateAsc"
import { JobsProvider } from "../contexts/Jobs"
import { JobList } from "../components/Jobs"
import { Header, Newsletter, Footer } from "../components/Common"
import { Wrapper, HeaderContent, Background } from "../components/Jobs/ui"

const URL = "https://minasdev.org/vagas"
const TITLE = "Minas Dev - Vagas"
const DESCRIPTION =
  "O Minas Dev visa unir comunidades e membros dos setores de Tecnologia da Informação de Minas Gerais."

const Vagas = ({ jobs }) => (
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

      {/* Schema.org */}
      <meta itemProp="name" content={TITLE} />
      <meta itemProp="description" content={DESCRIPTION} />
    </Head>

    <HeaderContent>
      <Header mainNav={{ url: "/", label: "O Minas Dev" }} />
      <Background aria-hidden="true">
        <source
          srcSet={require("../public/images/background.jpg?webp")}
          type="image/webp"
        />
        <source srcSet="/images/background.jpg" type="image/jpg" />
        <img src="/images/background.jpg" />
      </Background>
    </HeaderContent>

    <JobsProvider jobs={jobs}>
      <JobList />
    </JobsProvider>
    <Newsletter />
    <Footer />
  </Wrapper>
)

export const getStaticProps = async () => {
  let jobs = await getJSON("jobs.json")
  jobs = jobs
    .filter((job) => job.sources.length > 0)
    .map(({ sources, metadata }) => {
      return sources.map((source) => ({ ...source, metadata }))
    })
    .flat()
    .sort(sortByDateAsc)

  return {
    props: {
      jobs,
    },
  }
}

export default Vagas
