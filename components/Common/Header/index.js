import React from "react"
import { MinasDevLogo } from "../"
import {
  Wrapper,
  Content,
  Navigation,
  NavigationItem,
  NavigationLink,
  Socials,
  Social,
  SocialLink,
} from "./ui"

const Header = ({ mainNav }) => {
  return (
    <Wrapper>
      <Content>
        <MinasDevLogo />
        <nav>
          <Navigation>
            <NavigationItem>
              <NavigationLink href={mainNav.url}>
                {mainNav.label}
              </NavigationLink>
            </NavigationItem>
            <NavigationItem>
              <NavigationLink href="https://minasdev.org/slack">
                Slack
              </NavigationLink>
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
              <Socials>
                <Social>
                  <SocialLink
                    href="https://github.com/minasdev"
                    target="_blank"
                    rel="noopener"
                  >
                    <svg aria-hidden="true">
                      <use xlinkHref="/images/vectors/icons.svg#github" />
                    </svg>
                    GitHub do Minas Dev
                  </SocialLink>
                </Social>
                <Social>
                  <SocialLink
                    href="https://twitter.com/minasdev"
                    target="_blank"
                    rel="noopener"
                  >
                    <svg aria-hidden="true">
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
  )
}

export default Header
