import styled from "styled-components"

export const NewsList = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 1024px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 40px;
  padding: 0 20px;

  @media screen and (max-width: 767px) {
    grid-template-columns: 1fr;
    padding: 0 20px 20px;
  }
`
