import React from "react";
import PropTypes from "prop-types";
import { Wrapper, NewsletterForm, Title, Input, Button } from "./UI";

const Newsletter = () => (
  <Wrapper>
    <NewsletterForm
      action="https://minasdev.us10.list-manage.com/subscribe/post?u=9714606f0b65d6aed36b29a47&amp;id=0c0b7ea960"
      method="post"
    >
      <Title htmlFor="minasdev-newsletter-email">Newsletter</Title>
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
);

Newsletter.propTypes = {};

export default Newsletter;
