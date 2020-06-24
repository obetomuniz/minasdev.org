import styled from "styled-components"

export const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  position: relative;
`

export const Link = styled.a`
  display: flex;
  flex-direction: column;
  position: relative;
`

export const Infos = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`

export const ShareInfos = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`

export const AuthorPhoto = styled.img`
  width: 18px;
  overflow: hidden;
  border-radius: 100%;
`

export const MainInfo = styled.p`
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  font-size: 0.7rem;
  color: #666;
  margin: 0 5px 0 6px;
`

export const SourceLink = styled.a`
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 0.7rem;
  color: #333;
  display: inline-block;
  text-decoration: none;
  margin: 0 0 0;
`

export const TitleContainer = styled.div`
  width: 100%;
  background-image: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.9) 0%,
      rgba(0, 0, 0, 0.3) 80%,
      rgba(0, 0, 0, 0) 100%
    ),
    url(${({ thumbnail }) => thumbnail});

  background-repeat: no-repeat;
  background-size: cover;
  height: 200px;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  border-radius: 5px;
`

export const Title = styled.h2`
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 1.8rem;
  line-height: 2.1rem;
  color: #fff;
  width: 100%;
  overflow: hidden;
  padding: 20px;

  @media screen and (max-width: 1023px) {
    font-size: 1.3rem;
    line-height: 1.6rem;
  }

  @media screen and (max-width: 767px) {
    font-size: 0.8rem;
    line-height: 1.2rem;
  }
`
