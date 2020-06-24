import PropTypes from "prop-types"
import { useEvents } from "../../../contexts/Events"
import { Svg } from "../../Common"
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

const Events = () => {
  const {
    state: { events },
  } = useEvents()
  return (
    <Wrapper>
      <Header>
        <TitleIcon>
          <Svg vector="icon-calendar" aria-hidden="true" viewBox="0 0 45 47" />
        </TitleIcon>
        <Title>Eventos</Title>
      </Header>
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

Events.defaultProps = {
  events: [],
}

Events.propTypes = {
  events: PropTypes.array,
}

export default Events
