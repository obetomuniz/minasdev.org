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
