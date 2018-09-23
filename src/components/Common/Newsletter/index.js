import React from "react";
import PropTypes from "prop-types";
import { Wrapper, NewsletterForm, Title, Input, Button } from "./UI";

const Newsletter = () => (
  <Wrapper>
    <NewsletterForm
      action="https://minasdev.us3.list-manage.com/subscribe/post?u=50258ba79635076ed976b3238&amp;id=c864b0ba02"
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
