import styled from "styled-components"

export const Wrapper = styled.section`
  border-top: 3px solid #e64c3b;
  background-color: #fff;
  padding: 40px 20px 0;

  @media screen and (max-width: 767px) {
    padding: 20px 20px 0;
  }
`

export const Content = styled.ul`
  margin: 0 auto;
  max-width: 1024px;
  display: flex;
  flex-direction: column;
`

export const Title = styled.h2`
  font-family: "Montserrat", sans-serif;
  font-weight: 900;
  font-size: 3.5rem;
  text-transform: uppercase;
  line-height: 3.2rem;
  color: rgb(230, 76, 59);
  text-align: center;
  margin-bottom: 40px;

  @media screen and (max-width: 767px) {
    font-size: 2.5rem;
    margin-bottom: 20px;
  }
`

export const LoadingJob = styled.li`
  width: 100%;
  background-color: rgb(230, 76, 59);
  height: 81px;
  margin-bottom: 30px;
  padding-left: 10px;
  border-left: 3px solid transparent;
`

export const ResultsNotFound = styled.img`
  width: auto;
  max-height: 500px;
  margin-bottom: 30px;
  align-self: center;

  @media screen and (max-width: 767px) {
    max-width: 80%;
  }
`
