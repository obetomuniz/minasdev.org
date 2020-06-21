import React from "react"
import { ScreenReaderContent } from "../"
import { Wrapper, NewsletterForm, Title, Input, Button } from "./ui"

const Newsletter = () => (
  <Wrapper>
    <NewsletterForm
      action="https://minasdev.us3.list-manage.com/subscribe/post?u=50258ba79635076ed976b3238&amp;id=c864b0ba02"
      method="post"
    >
      <ScreenReaderContent htmlFor="minasdev-newsletter-email" as={"label"}>
        Newsletter
      </ScreenReaderContent>
      <Input
        id="minasdev-newsletter-email"
        type="text"
        name="EMAIL"
        placeholder="Digite seu email e receba novidades do Minas Dev"
      />
      <Button type="submit" name="subscribe">
        Cadastrar
      </Button>
    </NewsletterForm>
  </Wrapper>
)

export default Newsletter
