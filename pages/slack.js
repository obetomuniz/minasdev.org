import Head from "next/head"
import { Wrapper, CommunityInviter } from "../components/Slack/ui"

const URL = "https://minasdev.org/slack"
const TITLE = "Minas Dev - Slack"
const DESCRIPTION =
  "O Minas Dev visa unir comunidades e membros dos setores de Tecnologia da Informação de Minas Gerais."

const Vagas = ({ jobs }) => (
  <Wrapper>
    <Head>
      {/* SEO */}
      <link rel="canonical" href={URL} />

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

      {/* Community Inviter */}
      <script src="/scripts/communityinviter.js" />
    </Head>

    <Wrapper>
      <CommunityInviter id="CommunityInviter"></CommunityInviter>
    </Wrapper>
  </Wrapper>
)

// export const config = { unstable_runtimeJS: false }

export default Vagas
