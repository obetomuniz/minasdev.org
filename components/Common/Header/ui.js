import styled from "styled-components"

export const Wrapper = styled.header`
  padding-top: 3px;
  position: relative;
  z-index: 3;

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
`

export const Content = styled.div`
  max-width: 1024px;
  padding: 0 20px 0px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`

export const Navigation = styled.ul`
  display: block;
  margin-top: 30px;

  @media screen and (max-width: 1023px) {
    margin-top: 20px;
  }
`

export const NavigationItem = styled.li`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin: 0px 0px 30px;
  position: relative;

  @media screen and (max-width: 1023px) {
    margin: 0px 0px 20px;
  }
`

export const NavigationLink = styled.a`
  text-decoration: none;
  color: #fff;
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  text-shadow: 1px 1px 2px #000;
  font-size: 1.5rem;
  padding: 0 2px;
  letter-spacing: 0.5px;

  &:hover {
    color: #e85849;
  }

  @media screen and (max-width: 767px) {
    font-size: 0.9rem;
  }
`

export const SocialsContainer = styled.div`
  display: none;
  @media screen and (max-width: 767px) {
    display: block;
  }
`

export const Socials = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Social = styled.li`
  display: block;
`

const ICON_SIZE = 30

export const SocialLink = styled.a`
  display: block;
  width: ${ICON_SIZE}px;
  margin: 0 0 0 30px;
  height: 0;
  padding-top: ${ICON_SIZE}px;
  stroke-width: 0;
  overflow: hidden;
  position: relative;

  div,
  svg {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    fill: #fff;

    &:hover {
      fill: #e85849;
    }
  }

  @media screen and (max-width: 767px) {
    width: ${ICON_SIZE - 5}px;
    margin: 0 0 0 22px;
    height: 0;
    padding-top: ${ICON_SIZE - 5}px;
  }
`
