import PropTypes from "prop-types"
import { useEvents } from "../../../contexts/Events"
import { Event } from "../"
import {
  Wrapper,
  Header,
  Title,
  TitleIcon,
  ContributionCTA,
  ContributionCTALink,
  EventList,
} from "./ui"

const NextEvents = () => {
  const {
    state: { events },
  } = useEvents()
  return (
    <Wrapper>
      <Header>
        <TitleIcon>
          <svg aria-hidden="">
            <use xlinkHref="/images/vectors/icons.svg#calendar" />
          </svg>
        </TitleIcon>
        <Title>Próximos Eventos</Title>
        <TitleIcon hide>
          <svg aria-hidden="">
            <use xlinkHref="/images/vectors/icons.svg#calendar" />
          </svg>
        </TitleIcon>
      </Header>
      <ContributionCTA>
        Não encontrou seu evento abaixo?
        <ContributionCTALink
          href="https://github.com/minasdev/eventos/issues/new?template=adicionar-novo-evento.md&title=Nome+do+Evento"
          target="_blank"
          rel="noopener"
        >
          Adicione-o neste link
        </ContributionCTALink>
      </ContributionCTA>
      <EventList>
        {events.map((event, key) => (
          <Event key={`event-${key}`} {...event} />
        ))}
      </EventList>
      <ContributionCTA>
        Não encontrou seu evento acima?
        <ContributionCTALink
          href="https://github.com/minasdev/eventos/issues/new?template=adicionar-novo-evento.md&title=Nome+do+Evento"
          target="_blank"
          rel="noopener"
        >
          Adicione-o neste link
        </ContributionCTALink>
      </ContributionCTA>
    </Wrapper>
  )
}

NextEvents.defaultProps = {
  events: [],
}

NextEvents.propTypes = {
  events: PropTypes.array,
}

export default NextEvents
