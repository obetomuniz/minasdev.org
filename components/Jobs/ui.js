import styled from "styled-components"

export const Wrapper = styled.div``

export const HeaderContent = styled.div`
  width: 100%;
  height: 190px;
  position: relative;

  @media screen and (max-width: 767px) {
    height: 120px;
  }
`

export const Background = styled.picture`
  width: 100%;
  height: 190px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;

  img,
  source {
    width: 100%;
    height: 190px;
    object-fit: cover;

    @media screen and (max-width: 767px) {
      height: 120px;
    }
  }

  @media screen and (max-width: 767px) {
    height: 120px;
  }
`
