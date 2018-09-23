import styled from "styled-components";
import homeBackground from "@assets/images/background.jpg";

export const Wrapper = styled.div``;

export const ParallaxTop = styled.div`
  background-image: url(${homeBackground});
  background-repeat: no-repeat;
  background-position: center 0;
  background-size: cover;
  position: fixed;
  height: 822px;
  width: 100%;

  @media screen and (max-width: 1023px) {
    height: 659px;
  }

  @media screen and (max-width: 767px) {
    height: 440px;
  }
`;

export const ParallaxBottom = styled.div`
  position: relative;
  top: 822px;

  @media screen and (max-width: 1023px) {
    top: 659px;
  }

  @media screen and (max-width: 767px) {
    top: 440px;
  }
`;
