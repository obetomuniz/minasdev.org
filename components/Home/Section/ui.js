import styled from "styled-components"

export const Wrapper = styled.section`
  background-color: #fff;
  padding: 40px 0 20px;

  @media screen and (max-width: 767px) {
    padding: 20px 0 0;
  }
`

export const Header = styled.h2`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 1024px;
  margin: 0 auto 40px;
  padding: 0;

  @media screen and (max-width: 767px) {
    margin: 0 auto 20px;
  }
`

export const Icon = styled.span`
  display: block;
  width: 20px;
  height: 20px;
  margin: 0 20px;

  svg {
    width: 100%;
    height: 100%;
  }

  @media screen and (max-width: 767px) {
    margin: 0 20px;
  }
`

export const Title = styled.span`
  font-family: "Montserrat", sans-serif;
  font-weight: 900;
  font-size: 3.5rem;
  text-transform: uppercase;
  color: #e64c3b;

  @media screen and (max-width: 767px) {
    font-size: 2.1rem;
  }
`
