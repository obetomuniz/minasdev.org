import styled from "styled-components"

export const Wrapper = styled.div``

export const HeaderContent = styled.div`
  height: 725px;
  width: 100%;
  position: relative;

  @media screen and (max-width: 1023px) {
    height: 600px;
  }

  @media screen and (max-width: 767px) {
    height: 345px;
  }
`

export const Background = styled.picture`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;

  img,
  source {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`
