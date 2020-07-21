import styled from "styled-components"

export const Wrapper = styled.section`
  align-items: center;
  background-color: #242424;
  display: flex;
  justify-content: center;
  padding: 40px 0;

  @media screen and (max-width: 1023px) {
    padding: 60px 0;
  }
`

export const NewsletterForm = styled.form`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 1024px;
  padding: 0 20px;

  @media screen and (max-width: 1023px) {
    flex-direction: column;
    width: 100%;
  }
`

export const Input = styled.input`
  margin: 0 60px 0 0;
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 1.2rem;
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
  min-width: 555px;
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
    min-width: 100%;
  }

  @media screen and (max-width: 767px) {
    font-size: 0.68rem;
  }
`

export const Button = styled.button`
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 0.88rem;
  background-color: #fff;
  color: #242424;
  border-radius: 5px;
  border: 0;
  cursor: pointer;
  display: inline-block;
  padding: 15px 45px;
  text-transform: uppercase;

  @media screen and (max-width: 1023px) {
    min-width: 100%;
  }

  &:hover {
    color: #fff;
    background-color: #e85849;
  }
`
