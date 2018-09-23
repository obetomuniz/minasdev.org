import React from "react";
import PropTypes from "prop-types";
import { format, addDays } from "date-fns";
import { Wrapper, Time, Title, Community, Link } from "./UI";

const Event = ({ data }) => (
  <Wrapper itemScope itemType="http://schema.org/Event">
    <Time itemprop="startDate" dateTime={data.get("date")}>
      {format(addDays(data.get("date"), 1), "DD.MM")}
    </Time>
    <Title itemProp="name">{data.get("name")}</Title>
    <Community itemProp="organizer">{data.get("community")}</Community>
    <Link href={data.get("url")} target="_blank" rel="noopener" itemProp="url">
      Visite o site do evento
    </Link>
  </Wrapper>
);

Event.propTypes = {
  data: PropTypes.object
};

export default Event;
