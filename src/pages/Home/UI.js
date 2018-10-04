import styled from "styled-components";
import homeBackground from "@assets/images/background.jpg";

export const Wrapper = styled.div``;

export const HeaderContent = styled.div`
  background-image: url(${homeBackground});
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
`;
