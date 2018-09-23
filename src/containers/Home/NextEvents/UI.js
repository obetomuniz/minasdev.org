import styled from "styled-components";

export const Wrapper = styled.section`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 0;
`;

export const Header = styled.h2`
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
`;

export const Title = styled.span`
  font-family: "montserrat-black", sans-serif;
  font-size: 3.5rem;
  text-transform: uppercase;
  line-height: 3.6rem;
  color: #e64c3b;

  @media screen and (max-width: 767px) {
    font-size: 2rem;
    line-height: 2rem;
    text-align: center;
  }
`;

export const TitleIcon = styled.span`
  display: inline-block;
  width: 20px;
  height: 20px;
  margin: 0 20px;

  svg {
    width: 100%;
    height: 100%;
  }

  @media screen and (max-width: 767px) {
    width: 30px;
    height: 30px;
    margin: 0 0 20px;
    display: ${({ hide }) => (hide ? "none" : null)};
  }
`;

export const ContributionCTA = styled.p`
  font-family: "montserrat-light", sans-serif;
  text-align: center;
  font-size: 0.95rem;
  line-height: 1rem;
  display: inline-block;
  vertical-align: middle;
  color: #242424;

  @media screen and (max-width: 767px) {
    font-size: 0.85rem;
    line-height: 1.5rem;
  }
`;

export const ContributionCTALink = styled.a`
  font-size: 0.95rem;
  font-family: "montserrat-bold", sans-serif;
  border-bottom: 1px solid #242424;
  color: #242424;
  display: inline-block;
  text-decoration: none;
  margin-left: 5px;
`;

export const EventList = styled.ul`
  margin: 0 auto;
  width: 1024px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 30px;
  padding: 40px 20px 30px;

  @media screen and (max-width: 1024px) {
    width: 100%;
    grid-template-columns: 1fr 1fr;
    grid-gap: 30px;
  }
`;
