import PropTypes from "prop-types"
import { useEvents } from "../../../contexts/Events"
import { Section, ContributionCTA, Event } from "../"
import { EventList } from "./ui"

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
      <ContributionCTA
        text="Não encontrou seu evento acima?"
        link={{
          href: "https://github.com/minasdev/eventos/issues/new/choose",
          target: "_blank",
          rel: "noopener",
        }}
        textLink="Adicione-o neste link"
      />
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
