import PropTypes, { memo } from "prop-types"
import {
  Wrapper,
  Link,
  ShareInfos,
  AuthorPhoto,
  MainInfo,
  StrongInfo,
  SourceLink,
  ArticleOnMinasDevMedium,
  TitleContainer,
  Title,
} from "./ui"

const Event = ({ user, title, url, thumbnail, source }) => {
  const isMedium = source.name === "medium"
  const renderLabel = isMedium ? (
    <>
      {`★`}
      <StrongInfo>{source.author}</StrongInfo>
      <MainInfo>{`publicou no`}</MainInfo>
      <SourceLink
        href={"https://medium.com/minasdev"}
        target="_blank"
        rel="noopener"
      >
        {"Medium"}
      </SourceLink>
    </>
  ) : (
    <>
      <AuthorPhoto src={user.photo} alt={`Foto de ${user.name}`} />
      <MainInfo>{`${user.name} compartilhou no`}</MainInfo>
      <SourceLink href={"/slack"}>{"Slack"}</SourceLink>
    </>
  )

  return (
    <Wrapper>
      <ShareInfos>
        {renderLabel}
        {isMedium ? (
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
      <Link href={url} target="_blank" rel="noopener" isMedium={isMedium}>
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
