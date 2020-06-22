import Head from "next/head"
import { Wrapper, NotFoundTitle } from "../components/404/ui"

export default () => {
  return (
    <Wrapper>
      <Head>
        <title>Minas Dev - Página Não Encontrada</title>
      </Head>
      <NotFoundTitle>Oops... Página Não Encontrada!</NotFoundTitle>
    </Wrapper>
  )
}
