import styled from "styled-components"

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
  height: 100vh;
`

export const HeaderContent = styled.div`
  width: 100%;
  height: 215px;
  position: relative;

  @media screen and (max-width: 767px) {
    height: 122px;
  }
`

export const Background = styled.picture`
  width: 100%;
  height: 215px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;

  img,
  source {
    width: 100%;
    height: 215px;
    object-fit: cover;

    @media screen and (max-width: 767px) {
      height: 122px;
    }
  }

  @media screen and (max-width: 767px) {
    height: 122px;
  }
`

export const CommunityInviterContainer = styled.div`
  padding: 0;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  flex-direction: column;
  border-top: 3px solid #e64c3b;
`

export const CommunityInviter = styled.div`
  padding: 0 30px;
  max-width: 550px !important;
  display: flex !important;
  align-items: center;
  justify-content: center !important;
  flex-direction: column !important;

  img {
    display: none !important;
  }

  div {
    position: absolute;
    visibility: hidden;
    margin-top: -90px;
    &::before {
      font-size: 2.25rem;
      font-family: "Montserrat", sans-serif !important;
      font-weight: 900 !important;
      visibility: visible;
      color: black;
      content: "Entre no Slack do Minas Dev";
      display: block;

      @media screen and (max-width: 767px) {
        font-size: 1.2rem;
      }
    }

    @media screen and (max-width: 767px) {
      margin-top: -70px;
    }
  }

  input {
    font-family: "Montserrat", sans-serif !important;
    font-weight: 600 !important;
    text-align: center !important;
    border: 1px solid #cc4233 !important;
    margin: 15px 0 20px !important;
    border-radius: 3px !important;
    color: #cc4233 !important;

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
      margin: 15px 0 10px !important;
    }
  }

  button {
    font-family: "Montserrat", sans-serif !important;
    font-weight: 700 !important;
    border: 1px solid #d64031 !important;
    background-color: #d64031 !important;
    border-radius: 3px !important;
    cursor: pointer !important;
    padding: 15px !important;
  }
`

export const PoweredBy = styled.p`
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  font-size: 0.8rem;
  margin-top: 10px;
`
