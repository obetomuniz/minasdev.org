import styled from "styled-components";

export const Wrapper = styled.header`
  padding-top: 3px;
  position: relative;
  z-index: 2;

  &:before {
    content: "";
    height: 3px;
    width: 100%;
    background-color: #e64c3b;
    display: block;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
  }
`;

export const Content = styled.div`
  padding: 0 20px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;

  @media screen and (max-width: 767px) {
    align-items: flex-start;
    padding: 20px 20px 0;
  }
`;

export const Navigation = styled.ul`
  display: flex;
  margin-top: 30px;

  @media screen and (max-width: 1023px) {
    margin-top: 0;
    display: block;
    width: 170px;
    margin-top: 10px;
  }

  @media screen and (max-width: 767px) {
    margin-top: 0;
  }
`;

export const NavigationItem = styled.li`
  display: flex;
  justify-content: center;
  margin: 0 20px;

  @media screen and (max-width: 1023px) {
    justify-content: flex-end;
    margin: 0 0 18px 0;
    width: 100%;
  }
`;

export const NavigationLink = styled.a`
  text-decoration: none;
  color: #fff;
  font-family: "Montserrat-Bold", sans-serif;
  text-shadow: 1px 1px 2px #000;
  font-size: 1rem;
  line-height: 1.2rem;
  padding: 0 2px;
  letter-spacing: 0.5px;

  &:hover {
    color: #e85849;
  }

  @media screen and (max-width: 1023px) {
    font-size: 0.85rem;
  }
`;

export const Socials = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Social = styled.li``;

export const SocialLink = styled.a`
  display: block;
  width: 20px;
  margin: 0 10px;
  height: 0;
  padding-top: 20px;
  stroke-width: 0;
  overflow: hidden;
  position: relative;
  fill: #fff;

  &:hover {
    fill: #e85849;
  }

  svg {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
`;
