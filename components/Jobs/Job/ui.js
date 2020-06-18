import styled from "styled-components"

export const Wrapper = styled.li`
  margin-bottom: 30px;
  border-left: 3px solid transparent;
  padding-left: 10px;

  &:hover {
    border-left: 3px solid #cc4233;
  }

  @media screen and (max-width: 1023px) {
    border-left: 0;
    padding-left: 0;

    &:hover {
      border-left: 0;
    }
  }
`

export const PublicationDate = styled.p`
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  font-size: 0.7rem;
  color: #666;
  margin-bottom: 5px;
  display: flex;
  align-items: center;

  time {
    margin-left: 3px;
    height: 15px;
    display: flex;
    align-items: center;
  }
`

export const JobLanguage = styled.span`
  font-size: 0.7rem;
  margin-left: 5px;
`

export const JobIsRemote = styled.span`
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  font-size: 0.6rem;
  margin-left: 5px;
  color: #cc4233;
  border: 1px solid #cc4233;
  padding: 2px;
  height: 15;
  border-radius: 3px;
  display: flex;
`

export const JobTitle = styled.h2`
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 1.8rem;
  color: #e64c3b;
  margin-bottom: 5px;
  word-break: break-word;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`

export const JobLink = styled.a`
  margin: 0 8px 0 0;
`

export const JobOnMinasDevSlack = styled.picture`
  width: 25px;
  height: 25px;
  margin: 0 5px;
`

export const JobCompany = styled.span`
  font-family: "Montserrat", sans-serif;
  font-weight: 300;
  font-size: 0.8rem;
  color: #555;
  display: block;
  margin: 5px 0 10px;
`

export const Source = styled.p`
  font-size: 0.7rem;
`

export const SourceLink = styled.a`
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  color: #333;
`

export const Tags = styled.span`
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  color: #555;
`
