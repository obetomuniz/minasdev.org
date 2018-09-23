import styled from "styled-components";
import mainBackground from "@assets/images/mapa-de-minas.png";

export const Wrapper = styled.main`
  background-image: url(${mainBackground});
  background-repeat: no-repeat;
  background-position: center 0;
  background-size: contain;
  max-width: 960px;
  height: 652px;
  margin: 0 auto;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  flex-direction: column;
  position: relative;
  z-index: 1;
  top: -95px;

  @media screen and (max-width: 1023px) {
    max-width: 600px;
    height: 489px;
  }

  @media screen and (max-width: 767px) {
    max-width: 100%;
    height: auto;
    padding: 0 20px;
    align-items: flex-start;
    top: 0;
    margin-bottom: 50px;
  }
`;

export const Title = styled.h2`
  font-family: "montserrat-extrabold", sans-serif;
  font-size: 3rem;
  text-transform: uppercase;
  line-height: 3.2rem;
  letter-spacing: -1px;
  margin: 45px 0 25px;
  color: #fff;
  text-shadow: 1px 1px 2px #000;
  max-width: 500px;

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
`;

export const Description = styled.p`
  font-family: "montserrat-bold", sans-serif;
  font-size: 1rem;
  line-height: 1.4rem;
  color: #fff;
  text-shadow: 1px 1px 2px #000;
  max-width: 500px;
  letter-spacing: 0.3px;

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
`;
