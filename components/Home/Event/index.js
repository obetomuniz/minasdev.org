import React from "react"
import PropTypes from "prop-types"
import format from "date-fns/format"
import getDateObjectFromString from "../../../helpers/getDateObjectFromString"
import { ScreenReaderContent } from "../../Common"
import { Wrapper, Time, Title, Community, Link } from "./ui"

const Event = ({ date, url, name, community }) => {
  return (
    <Wrapper itemScope itemType="http://schema.org/Event">
      <Time itemProp="startDate" dateTime={date}>
        {format(getDateObjectFromString(date), "dd.MM")}
      </Time>
      <Title itemProp="name">{name}</Title>
      <Community itemProp="organizer">{community}</Community>
      <Link href={url} target="_blank" rel="noopener" itemProp="url">
        {"Visite o site do evento"}
        <ScreenReaderContent>{name}</ScreenReaderContent>
      </Link>
    </Wrapper>
  )
}

Event.propTypes = {
  data: PropTypes.object,
}

export default Event
