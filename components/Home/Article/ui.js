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
  color: #e64c3b;
  display: block;
  text-decoration: none;
  margin: 0 0 0;
`

export const ArticleOnMinasDevMedium = styled.picture`
  flex: 1;
  display: flex;
  justify-content: flex-end;

  img,
  source {
    width: 16px;
    height: 16px;
  }
`

export const TitleContainer = styled.div`
  width: 100%;
  background-image: linear-gradient(
      0deg,
      rgba(36, 36, 36, 1) 0%,
      rgba(36, 36, 36, 0.9) 60%,
      rgba(36, 36, 36, 0) 120%
    ),
    url(${({ thumbnail }) => thumbnail});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 160px;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  border-radius: 5px;
  @media screen and (max-width: 767px) {
    height: 100px;
  }

  &:hover {
    h2 {
      color: #e85849;
    }
  }
`

export const Title = styled.h2`
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 1.8rem;
  line-height: 2.1rem;
  color: #fff;
  width: 100%;
  padding: 20px;
  text-shadow: 1px 1px 2px #000;
  @media screen and (max-width: 1023px) {
    font-size: 1.3rem;
    line-height: 1.6rem;
  }

  @media screen and (max-width: 767px) {
    font-size: 0.9rem;
    line-height: 1.2rem;
  }
`
