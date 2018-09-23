import styled from "styled-components";

export const Wrapper = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 0 13px;
  background-color: #242424;
  position: relative;

  &:after {
    content: "";
    height: 3px;
    width: 100%;
    background-color: #e64c3b;
    display: block;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
  }
`;

export const FooterText = styled.small`
  font-family: "montserrat-bold", sans-serif;
  font-size: 0.95rem;
  line-height: 1rem;
  color: #fff;
  text-shadow: 1px 1px 2px #000;
`;
