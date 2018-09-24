import styled from "styled-components";

export const Wrapper = styled.section`
  background-color: #fff;
  padding: 30px 20px 0;
`;

export const Content = styled.ul`
  margin: 0 auto;
  max-width: 1024px;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h2`
  font-family: montserrat-black, sans-serif;
  font-size: 3.5rem;
  text-transform: uppercase;
  line-height: 3.2rem;
  color: rgb(230, 76, 59);
  text-align: center;
  margin-bottom: 30px;
`;

export const Search = styled.input`
  max-width: 1024px;
  width: 100%;
  margin: 0px auto;
  padding: 20px;
  display: block;
  border: 2px #e64c3b solid;
  border-radius: 5px;
  color: #e64c3b;
  margin: 0 auto 30px;

  &::-webkit-input-placeholder {
    color: #e64c3b;
  }

  &:-moz-placeholder {
    color: #e64c3b;
  }

  &::-moz-placeholder {
    color: #e64c3b;
  }

  &:-ms-input-placeholder {
    color: #e64c3b;
  }
`;
