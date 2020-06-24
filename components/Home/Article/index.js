import PropTypes from "prop-types"
import {
  Wrapper,
  Link,
  ShareInfos,
  AuthorPhoto,
  MainInfo,
  SourceLink,
  TitleContainer,
  Title,
} from "./ui"

const Event = ({ user, title, url, thumbnail }) => {
  return (
    <Wrapper>
      <ShareInfos>
        <AuthorPhoto src={user.photo} alt={`Foto de ${user.name}`} />
        <MainInfo>{`${user.name} compartilhou no`}</MainInfo>
        <SourceLink href={"/slack"}>{"Slack"}</SourceLink>
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
