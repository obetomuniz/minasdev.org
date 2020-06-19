import Head from "next/head"
import { Header, Footer, ScreenReaderContent } from "../components/Common"
import {
  Wrapper,
  HeaderContent,
  CommunityInviterContainer,
  CommunityInviter,
  PoweredBy,
} from "../components/Slack/ui"

const URL = "https://minasdev.org/slack"
const TITLE = "Minas Dev - Slack"
const DESCRIPTION =
  "O Minas Dev visa unir comunidades e membros dos setores de Tecnologia da Informação de Minas Gerais."

const Slack = () => {
  return (
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

        {/* Community Inviter */}
        <script src="/scripts/communityinviter.js" />
      </Head>

      <HeaderContent>
        <Header mainNav={{ url: "/", label: "O Minas Dev" }} />
      </HeaderContent>

      <CommunityInviterContainer>
        <ScreenReaderContent htmlFor="CommunityInviterEmail" as={"label"}>
          Entre no Slack do Minas Dev
        </ScreenReaderContent>
        <CommunityInviter id="CommunityInviter"></CommunityInviter>
        <PoweredBy>Powered by CommunityInviter.com</PoweredBy>
      </CommunityInviterContainer>

      <Footer />
    </Wrapper>
  )
}

export const config = { unstable_runtimeJS: false }

export default Slack
