import { Wrapper, Background, Title, Description } from "./ui"

const About = () => (
  <Wrapper>
    <Background>
      <source
        srcSet={require("../../../public/images/mapa-de-minas.png?webp")}
        type="image/webp"
      />
      <source srcSet="/images/mapa-de-minas.png" type="image/png" />
      <img src="/images/mapa-de-minas.png" alt="Mapa de Minas Gerais" />
    </Background>
    <Title>Comunidade de desenvolvedores de Minas Gerais</Title>
    <Description>
      O Minas Dev idealiza a união das comunidades e dos membros dos setores de
      Tecnologia da Informação para que juntos possamos fortalecer o mercado de
      Minas Gerais.
    </Description>
  </Wrapper>
)

export default About
