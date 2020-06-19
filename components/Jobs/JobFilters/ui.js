import styled from "styled-components"

export const Search = styled.input`
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  max-width: 1024px;
  width: 100%;
  margin: 0px auto;
  padding: 20px;
  display: block;
  border: 2px #cc4233 solid;
  border-radius: 5px;
  color: #cc4233;
  margin: 0 auto 10px;
  font-size: 1.2rem;

  &::-webkit-input-placeholder {
    color: #cc4233;
  }

  &:-moz-placeholder {
    color: #cc4233;
  }

  &::-moz-placeholder {
    color: #cc4233;
  }

  &:-ms-input-placeholder {
    color: #cc4233;
  }

  @media screen and (max-width: 767px) {
    margin-bottom: 30px;
    padding: 10px;
  }
`

export const Filters = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  margin: 0px auto 40px;
  gap: 10px;

  @media screen and (max-width: 1023px) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  }

  @media screen and (max-width: 767px) {
    margin: 0px auto 30px;
    display: none;
  }
`

export const ButtonFilter = styled.button`
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-size: 0.88rem;
  background-color: ${({ active }) => (active ? "#cc4233" : "#ffffff")};
  border: 2px solid #cc4233;
  border-radius: 5px;
  cursor: pointer;
  display: inline-block;
  padding: 5px;
  color: ${({ active }) => (active ? "#ffffff" : "#cc4233")};
`
