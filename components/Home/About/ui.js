import styled from "styled-components"

export const Wrapper = styled.main`
  width: 100%;
  max-width: 960px;
  height: 500px;
  margin: 0 auto;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  flex-direction: column;
  position: relative;
  z-index: 2;
  top: -55px;

  @media screen and (max-width: 1023px) {
    max-width: 600px;
    height: 400px;
  }

  @media screen and (max-width: 767px) {
    max-width: 100%;
    height: auto;
    padding: 0 20px;
    align-items: flex-start;
    top: 0;
    margin-bottom: 50px;
  }
`

export const Background = styled.picture`
  width: 100%;
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
    object-fit: contain;
  }
`

export const Title = styled.h2`
  font-family: "Montserrat", sans-serif;
  font-weight: 800;
  font-size: 3rem;
  text-transform: uppercase;
  line-height: 3.2rem;
  letter-spacing: -1px;
  margin: 45px 0 25px;
  color: #fff;
  text-shadow: 1px 1px 2px #000;
  max-width: 500px;
  z-index: 2;

  @media screen and (max-width: 1023px) {
    font-size: 2.2rem;
    line-height: 2.6rem;
    margin-bottom: 15px;
    max-width: 365px;
  }

  @media screen and (max-width: 767px) {
    font-size: 1.7rem;
    line-height: 2rem;
    margin-top: 25px;
    margin-bottom: 15px;
    max-width: 100%;
  }
`

export const Description = styled.p`
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 1rem;
  line-height: 1.4rem;
  color: #fff;
  text-shadow: 1px 1px 2px #000;
  max-width: 500px;
  letter-spacing: 0.3px;
  z-index: 2;

  @media screen and (max-width: 1023px) {
    font-size: 0.75rem;
    line-height: 1rem;
    max-width: 365px;
  }

  @media screen and (max-width: 767px) {
    font-size: 0.7rem;
    line-height: 1rem;
    max-width: 100%;
  }
`
