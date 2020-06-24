import { Fragment, memo } from "react"
import { MinasDevLogo, Svg } from "../"
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

const Header = ({ mainNav, onlySocials }) => {
  return (
    <Wrapper>
      <Content>
        <MinasDevLogo />
        <nav>
          <Navigation>
            <NavigationItem>
              <Socials>
                <Social>
                  <SocialLink href="/slack">
                    <Svg
                      vector="icon-slack"
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                    />
                    Slack do Minas Dev
                  </SocialLink>
                </Social>

                <Social>
                  <SocialLink
                    href="https://t.me/minasdev"
                    target="_blank"
                    rel="noopener"
                  >
                    <Svg
                      vector="icon-telegram"
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                    />
                    Telegram do Minas Dev
                  </SocialLink>
                </Social>
                <Social>
                  <SocialLink
                    href="https://github.com/minasdev"
                    target="_blank"
                    rel="noopener"
                  >
                    <Svg
                      vector="icon-github"
                      aria-hidden="true"
                      viewBox="0 0 416 448"
                    />
                    GitHub do Minas Dev
                  </SocialLink>
                </Social>

                <Social>
                  <SocialLink
                    href="https://twitter.com/minasdev"
                    target="_blank"
                    rel="noopener"
                  >
                    <Svg
                      vector="icon-twitter"
                      aria-hidden="true"
                      viewBox="0 0 512 512"
                    />
                    Twitter do Minas Dev
                  </SocialLink>
                </Social>

                {/*
                <Social>
                  <SocialLink
                    href="https://facebook.com/minasdev"
                    target="_blank"
                    rel="noopener"
                  >
                    <Svg
                      vector="icon-facebook"
                      aria-hidden="true"
                      viewBox="0 0 512 512"
                    />
                    Facebook do Minas Dev
                  </SocialLink>
                </Social> */}
              </Socials>
            </NavigationItem>
            {mainNav && (
              <NavigationItem>
                <NavigationLink href={mainNav.url}>
                  {mainNav.label}
                </NavigationLink>
              </NavigationItem>
            )}
          </Navigation>
        </nav>
      </Content>
    </Wrapper>
  )
}

export default memo(Header)
