import styled from "styled-components"

export const Wrapper = styled.div``

export const HeaderContent = styled.div`
  width: 100%;
  height: 215px;
  position: relative;

  @media screen and (max-width: 767px) {
    height: 122px;
  }
`

export const Background = styled.picture`
  width: 100%;
  height: 215px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;

  img,
  source {
    width: 100%;
    height: 215px;
    object-fit: cover;

    @media screen and (max-width: 767px) {
      height: 122px;
    }
  }

  @media screen and (max-width: 767px) {
    height: 122px;
  }
`
