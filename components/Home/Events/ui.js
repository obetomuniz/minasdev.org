import styled from "styled-components"

export const EventList = styled.ul`
  margin: 0 auto 60px;
  width: 100%;
  max-width: 1024px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 40px;
  padding: 0 20px;

  @media screen and (max-width: 767px) {
    grid-template-columns: 1fr;
    margin: 0 auto 40px;
  }
`
