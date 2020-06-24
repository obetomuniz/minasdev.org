import styled from "styled-components"

export const Wrapper = styled.section`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 0 0;

  @media screen and (max-width: 767px) {
    padding: 20px 0;
  }
`

export const Header = styled.h2`
  display: flex;
  align-items: center;
  margin-bottom: 40px;
  align-self: flex-start;
  margin: 0 auto 40px;
  max-width: 1024px;
  width: 100%;

  @media screen and (max-width: 767px) {
    flex-direction: column;
    margin: 20px auto;
  }
`

export const Title = styled.span`
  font-family: "Montserrat", sans-serif;
  font-weight: 900;
  font-size: 3.5rem;
  text-transform: uppercase;
  line-height: 3.6rem;
  color: #e64c3b;

  @media screen and (max-width: 767px) {
    font-size: 1.8rem;
    line-height: 2rem;
    text-align: center;
  }
`

export const TitleIcon = styled.span`
  display: inline-block;
  width: 20px;
  height: 20px;
  margin: 0 20px;

  svg {
    width: 100%;
    height: 100%;
  }

  @media screen and (max-width: 767px) {
    width: 30px;
    height: 30px;
    margin: 0 0 20px;
  }
`

export const NewsList = styled.div`
  margin: 0 auto;
  width: 1024px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 40px;
  padding: 0 20px 60px;

  @media screen and (max-width: 1023px) {
    width: 100%;
    padding: 0 20px 40px;
  }

  @media screen and (max-width: 767px) {
    grid-template-columns: 1fr;
    grid-gap: 30px;
    padding: 20px 20px 10px;
  }
`
