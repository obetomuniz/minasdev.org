import styled from "styled-components";
import jobsBackground from "@assets/images/background.jpg";

export const Wrapper = styled.div``;

export const ParallaxTop = styled.div`
  background-image: url(${jobsBackground});
  background-repeat: no-repeat;
  background-position: center 0;
  background-size: cover;
  position: fixed;
  height: 210px;
  width: 100%;
`;

export const ParallaxBottom = styled.div`
  position: relative;
  top: 210px;
`;
