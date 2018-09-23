import styled from "styled-components";

export const Wrapper = styled.section`
  align-items: center;
  background-color: #e64c3b;
  display: flex;
  justify-content: center;
  padding: 30px 0 40px;
`;

export const NewsletterForm = styled.form`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 1024px;
  padding: 0 20px;

  @media screen and (max-width: 1023px) {
    flex-direction: column;
  }
`;

export const Title = styled.label`
  color: #fff;
  font-family: "montserrat-black", sans-serif;
  font-size: 2.2rem;
  line-height: 2.5rem;
  text-transform: uppercase;

  @media screen and (max-width: 1023px) {
    margin-bottom: 20px;
  }
`;

export const Input = styled.input`
  margin: 0 60px;
  font-family: "montserrat-bold", sans-serif;
  font-size: 0.88rem;
  text-align: center;
  animation-duration: 0.5s;
  animation-fill-mode: both;
  letter-spacing: 0.3px;
  border: 1px solid #fff;
  caret-color: #fff;
  color: #fff;
  background-color: transparent;
  border-radius: 5px;
  display: inline-block;
  padding: 15px;
  min-width: 420px;
  width: 100%;

  &::-webkit-input-placeholder {
    color: #fff;
  }

  &:-moz-placeholder {
    color: #fff;
  }

  &::-moz-placeholder {
    color: #fff;
  }

  &:-ms-input-placeholder {
    color: #fff;
  }

  @media screen and (max-width: 1023px) {
    margin: 0 0 20px;
    min-width: 727px;
  }

  @media screen and (max-width: 767px) {
    min-width: 280px;
  }
`;

export const Button = styled.button`
  font-family: "Montserrat-Bold", sans-serif;
  font-size: 0.88rem;
  background-color: #fff;
  color: #e64c3b;
  border-radius: 5px;
  border: 0;
  cursor: pointer;
  display: inline-block;
  padding: 15px 45px;
  text-transform: uppercase;

  @media screen and (max-width: 767px) {
    width: 280px;
  }
`;
