import PropTypes from "prop-types"
import { useEvents } from "../../../contexts/Events"
import { Svg } from "../../Common"
import { Section, Event } from "../"
import { ContributionCTA, ContributionCTALink, EventList } from "./ui"

const Events = () => {
  const {
    state: { events },
  } = useEvents()
  return (
    <Section
      title="Eventos"
      icon={{ vector: "icon-calendar", viewBox: "0 0 45 47" }}
    >
      <EventList>
        {events.map((event, key) => (
          <Event key={`event-${key}`} {...event} />
        ))}
      </EventList>
      <ContributionCTA>
        Não encontrou seu evento acima?
        <ContributionCTALink
          href="https://github.com/minasdev/eventos/issues/new/choose"
          target="_blank"
          rel="noopener"
        >
          Adicione-o neste link
        </ContributionCTALink>
      </ContributionCTA>
    </Section>
  )
}

Events.defaultProps = {
  events: [],
}

Events.propTypes = {
  events: PropTypes.array,
}

export default Events
