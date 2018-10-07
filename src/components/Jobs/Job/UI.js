import styled from "styled-components";

export const Wrapper = styled.li`
  margin-bottom: 30px;
  border-left: 3px solid transparent;
  padding-left: 10px;

  &:hover {
    border-left: 3px solid #e64c3b;
  }

  @media screen and (max-width: 1023px) {
    border-left: 0;
    padding-left: 0;

    &:hover {
      border-left: 0;
    }
  }
`;

export const PublicationDate = styled.p`
  font-family: "montserrat-regular", sans-serif;
  font-size: 0.7rem;
  color: #666;
  margin-bottom: 5px;
  display: flex;
  align-items: center;

  time {
    margin-left: 3px;
  }
`;

export const JobLanguage = styled.span`
  font-size: 0.7rem;
  margin-left: 5px;
`;

export const JobIsRemote = styled.span`
  font-family: "montserrat-regular", sans-serif;
  font-size: 0.6rem;
  margin-left: 5px;
  color: #e64c3b;
  border: 1px solid #e64c3b;
  padding: 2px;
  border-radius: 3px;
  margin-bottom: 3px;
`;

export const JobTitle = styled.h2`
  font-family: "montserrat-bold", sans-serif;
  font-size: 1.8rem;
  color: #e64c3b;
  margin-bottom: 5px;
  word-break: break-word;

  @media screen and (max-width: 1023px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const JobLink = styled.a`
  margin: 0 8px 0 0;
`;

export const JobCompany = styled.span`
  font-family: "montserrat-light", sans-serif;
  font-size: 0.8rem;
  color: #777;
  display: block;
  margin: 5px 0;
`;

export const Source = styled.p`
  font-size: 0.7rem;
`;

export const SourceLink = styled.a`
  font-family: "montserrat-bold", sans-serif;
  color: #4a4a4a;
`;

export const Tags = styled.span`
  font-family: "montserrat-regular", sans-serif;
  color: #777;
`;
