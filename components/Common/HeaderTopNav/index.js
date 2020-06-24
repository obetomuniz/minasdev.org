import {
  Wrapper,
  HeaderTopNavList,
  HeaderTopNavListItem,
  HeaderTopNavLink,
} from "./ui"

const HeaderTopNav = () => {
  return (
    <Wrapper>
      <HeaderTopNavList>
        <HeaderTopNavListItem>
          <HeaderTopNavLink
            href="https://github.com/minasdev/manifesto"
            target="_blank"
            rel="noopener"
          >
            {"Manifesto"}
          </HeaderTopNavLink>
        </HeaderTopNavListItem>
        <HeaderTopNavListItem>
          <HeaderTopNavLink
            href="https://github.com/minasdev/codigo-de-conduta"
            target="_blank"
            rel="noopener"
          >
            {"Código de Conduta"}
          </HeaderTopNavLink>
        </HeaderTopNavListItem>
      </HeaderTopNavList>
    </Wrapper>
  )
}

export default HeaderTopNav
