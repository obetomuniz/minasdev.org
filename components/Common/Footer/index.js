import React from "react"
import { Wrapper, FooterText } from "./ui"

const Footer = () => {
  return (
    <Wrapper>
      <FooterText>{`2013-${new Date().getFullYear()} © Minas Dev`}</FooterText>
    </Wrapper>
  )
}

export default Footer
