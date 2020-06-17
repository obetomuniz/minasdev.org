import styled from "styled-components"

export const Wrapper = styled.div`
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
`

export const CommunityInviter = styled.div`
  max-width: 550px !important;
  display: flex !important;
  align-items: center;
  justify-content: center !important;
  flex-direction: column !important;

  input {
    text-align: center !important;
    border: 1px solid #e64b3b !important;
    margin: 15px 0 10px !important;
    border-radius: 3px !important;
  }

  button {
    border: 1px solid #e64b3b !important;
    background-color: #e64b3b !important;
    border-radius: 3px !important;
  }
`
