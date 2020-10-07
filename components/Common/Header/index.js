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

const Header = () => {
  return (
    <Wrapper>
      <Content>
        <MinasDevLogo />
        <nav>
          <Navigation>
            <NavigationItem>
              <NavigationLink
                target="_blank"
                rel="noopener"
                href={"https://youtube.com/channel/UCNcCzxW2OSQO38AaqFGkB2g"}
              >
                {"YouTube"}
              </NavigationLink>
            </NavigationItem>
            <NavigationItem>
              <NavigationLink
                target="_blank"
                rel="noopener"
                href={"https://www.meetup.com/pt-BR/Minas_Dev/"}
              >
                {"Meetup"}
              </NavigationLink>
            </NavigationItem>
            <NavigationItem>
              <NavigationLink
                target="_blank"
                rel="noopener"
                href={"https://medium.com/minasdev"}
              >
                {"Medium"}
              </NavigationLink>
            </NavigationItem>
            <NavigationItem>
              <NavigationLink
                target="_blank"
                rel="noopener"
                href={"https://twitter.com/minasdev"}
              >
                {"Twitter"}
              </NavigationLink>
            </NavigationItem>
            <NavigationItem>
              <NavigationLink
                target="_blank"
                rel="noopener"
                href={"https://github.com/minasdev/vagas/issues"}
              >
                {"Vagas"}
              </NavigationLink>
            </NavigationItem>
          </Navigation>
        </nav>
      </Content>
    </Wrapper>
  )
}

export default memo(Header)
