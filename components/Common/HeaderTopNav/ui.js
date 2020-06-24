import styled from "styled-components"

export const Wrapper = styled.div`
  width: 100%;
  height: 50px;
  background-color: #000;
  z-index: 3;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const HeaderTopNavList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
`

export const HeaderTopNavListItem = styled.li`
  text-align: center;
`

export const HeaderTopNavLink = styled.a`
  color: #fff;
  text-align: center;
  font-size: 1rem;

  @media screen and (max-width: 767px) {
    font-size: 0.9rem;
  }
`
