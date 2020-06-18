import React from "react"
import { ScreenReaderContent } from "../"
import { Wrapper, NewsletterForm, Title, Input, Button } from "./ui"

const Newsletter = () => (
  <Wrapper>
    <NewsletterForm
      action="https://minasdev.us10.list-manage.com/subscribe/post?u=9714606f0b65d6aed36b29a47&amp;id=0c0b7ea960"
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
