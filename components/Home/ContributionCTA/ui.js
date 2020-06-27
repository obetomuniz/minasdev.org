import styled from "styled-components"

export const Wrapper = styled.p`
  margin: 0 auto 40px;
  width: 100%;
  max-width: 1024px;
  font-family: "Montserrat", sans-serif;
  font-weight: 300;
  text-align: center;
  font-size: 0.95rem;
  line-height: 1rem;
  display: block;
  color: #242424;

  @media screen and (max-width: 767px) {
    font-size: 0.95rem;
    line-height: 1.5rem;
  }
`

export const Link = styled.a`
  font-size: 0.95rem;
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  border-bottom: 1px solid #242424;
  color: #242424;
  display: inline-block;
  text-decoration: none;
  margin-left: 5px;
`
