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
              <NavigationLink href={"https://t.me/minasdev"}>
                {"Telegram"}
              </NavigationLink>
            </NavigationItem>
            <NavigationItem>
              <NavigationLink href={"https://linkedin.com/company/minasdev"}>
                {"LinkedIn"}
              </NavigationLink>
            </NavigationItem>
            <NavigationItem>
              <NavigationLink href={"https://github.com/minasdev/vagas/issues"}>
                {"Medium"}
              </NavigationLink>
            </NavigationItem>
            <NavigationItem>
              <NavigationLink href={"https://twitter.com/minasdev"}>
                {"Twitter"}
              </NavigationLink>
            </NavigationItem>
            <NavigationItem>
              <NavigationLink href={"https://github.com/minasdev/vagas/issues"}>
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
