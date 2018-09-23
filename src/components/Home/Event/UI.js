import styled from "styled-components";

export const Wrapper = styled.li`
  display: flex;
  flex-direction: column;
`;

export const Time = styled.time`
  display: block;
  font-family: "montserrat-black", sans-serif;
  font-size: 2.5rem;
  color: #242424;

  &:after {
    display: block;
    content: "";
    width: 100%;
    height: 3px;
    background-color: #e64c3b;
    margin: 8px 0;
  }
`;

export const Title = styled.h2`
  display: block;
  font-family: "montserrat-black", sans-serif;
  font-size: 0.95rem;
  line-height: 1.3rem;
  color: #242424;
  text-transform: uppercase;
  margin-bottom: 8px;
  overflow: hidden;
`;

export const Community = styled.p`
  font-family: "montserrat-bold", sans-serif;
  font-size: 0.7rem;
  color: #4a4a4a;
  margin-bottom: 10px;
  max-width: 65%;
`;

export const Link = styled.a`
  align-self: baseline;
  font-family: "montserrat-bold", sans-serif;
  font-size: 0.75rem;
  font-style: italic;
  border-bottom: 1px solid #e64c3b;
  color: #e64c3b;
  display: inline-block;
  text-decoration: none;
`;
