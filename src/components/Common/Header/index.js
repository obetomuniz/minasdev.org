import React from "react";
import PropTypes from "prop-types";
import { MinasDevLogo } from "@components/Common";
import {
  Wrapper,
  Content,
  Navigation,
  NavigationItem,
  NavigationLink,
  Socials,
  Social,
  SocialLink
} from "./UI";

const Header = () => {
  return (
    <Wrapper>
      <Content>
        <MinasDevLogo />
        <nav>
          <Navigation>
            <NavigationItem>
              <NavigationLink href="https://minasdev.org/vagas">VAGAS</NavigationLink>
            </NavigationItem>
            <NavigationItem>
              <NavigationLink
                href="https://github.com/minasdev/manifesto"
                target="_blank"
                rel="noopener"
              >
                Manifesto
              </NavigationLink>
            </NavigationItem>
            <NavigationItem>
              <NavigationLink
                href="https://github.com/minasdev/codigo-de-conduta"
                target="_blank"
                rel="noopener"
              >
                Código de Conduta
              </NavigationLink>
            </NavigationItem>
            <NavigationItem>
              <NavigationLink href="https://slack.minasdev.org/">slack.minasdev.org</NavigationLink>
            </NavigationItem>
            <NavigationItem>
              <Socials>
                <Social>
                  <SocialLink href="https://github.com/minasdev" target="_blank" rel="noopener">
                    <svg aria-hidden="">
                      <use xlinkHref="/images/vectors/icons.svg#github" />
                    </svg>
                    GitHub do Minas Dev
                  </SocialLink>
                </Social>
                <Social>
                  <SocialLink href="https://twitter.com/minasdev" target="_blank" rel="noopener">
                    <svg aria-hidden="">
                      <use xlinkHref="/images/vectors/icons.svg#twitter" />
                    </svg>
                    Twitter do Minas Dev
                  </SocialLink>
                </Social>
              </Socials>
            </NavigationItem>
          </Navigation>
        </nav>
      </Content>
    </Wrapper>
  );
};

Header.propTypes = {};

export default Header;
