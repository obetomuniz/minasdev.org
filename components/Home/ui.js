import styled from "styled-components"

export const Wrapper = styled.div``

export const HeaderContent = styled.div`
  background-image: url("/images/background.jpg");
  background-repeat: no-repeat;
  background-position: center 0;
  background-size: cover;
  height: 822px;
  width: 100%;

  @media screen and (max-width: 1023px) {
    height: 659px;
  }

  @media screen and (max-width: 767px) {
    height: 440px;
  }
`
