import styled from "styled-components";

export const Wrapper = styled.h1`
  width: 210px;
  height: 0;
  padding-top: 210px;
  overflow: hidden;
  position: relative;
  z-index: 2;

  svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  @media screen and (max-width: 767px) {
    width: 90px;
    padding-top: 90px;
  }
`;
