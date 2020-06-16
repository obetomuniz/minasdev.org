import styled from "styled-components"

export const Search = styled.input`
  max-width: 1024px;
  width: 100%;
  margin: 0px auto;
  padding: 20px;
  display: block;
  border: 2px #e64c3b solid;
  border-radius: 5px;
  color: #e64c3b;
  margin: 0 auto 10px;

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
  background-color: ${({ active }) => (active ? "#e64c3b" : "#ffffff")};
  border: 2px solid #e64c3b;
  border-radius: 5px;
  cursor: pointer;
  display: inline-block;
  padding: 5px;
  color: ${({ active }) => (active ? "#ffffff" : "#e64c3b")};
`
