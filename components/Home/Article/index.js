import PropTypes from "prop-types"
import {
  Wrapper,
  Link,
  ShareInfos,
  AuthorPhoto,
  MainInfo,
  SourceLink,
  ArticleOnMinasDevMedium,
  TitleContainer,
  Title,
} from "./ui"

const Event = ({ user, title, url, thumbnail, source }) => {
  return (
    <Wrapper>
      <ShareInfos>
        <AuthorPhoto src={user.photo} alt={`Foto de ${user.name}`} />
        <MainInfo>{`${user.name} compartilhou no`}</MainInfo>
        <SourceLink href={"/slack"}>{"Slack"}</SourceLink>
        {source === "Minas Dev Medium" ? (
          <ArticleOnMinasDevMedium>
            <source
              srcSet={require("../../../public/images/minasdev-logo-57x57.png?webp")}
              type="image/webp"
            />
            <source srcSet="/images/minasdev-logo-57x57.png" type="image/png" />
            <img
              src="/images/minasdev-logo-57x57.png"
              alt="Logomarca do Minas Dev"
            />
          </ArticleOnMinasDevMedium>
        ) : null}
      </ShareInfos>
      <Link href={url} target="_blank" rel="noopener">
        <TitleContainer thumbnail={thumbnail}>
          <Title>
            {title.length > 65 ? `${title.substring(0, 65)}...` : title}
          </Title>
        </TitleContainer>
      </Link>
    </Wrapper>
  )
}

Event.propTypes = {
  data: PropTypes.object,
}

export default Event
