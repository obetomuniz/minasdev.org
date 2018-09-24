import React from "react";
import PropTypes from "prop-types";
import { format, addDays } from "date-fns";
import {
  Wrapper,
  PublicationDate,
  JobTitle,
  JobLanguage,
  JobLink,
  JobCompany,
  Source,
  Tags
} from "./UI";

const Job = ({ data }) => (
  <Wrapper itemScope itemType="http://schema.org/JobPosting">
    <PublicationDate>
      Publicado em
      <time itemProp="datePosted" dateTime={data.get("date")}>
        {format(addDays(data.get("date"), 1), "DD/MM/YYYY")}
      </time>
      <JobLanguage>{data.get("language") === "en-us" ? "🌐" : "🇧🇷"}</JobLanguage>
    </PublicationDate>
    <JobTitle itemProp="title">
      <JobLink itemProp="url" href={data.get("url")}>
        {data.get("position")}
      </JobLink>
    </JobTitle>
    <JobCompany>@{data.get("company")}</JobCompany>
    <Source itemProp="source">
      {data.get("source")}
      <Tags>, {data.get("tags").join(", ")}</Tags>
    </Source>
  </Wrapper>
);

Job.propTypes = {
  data: PropTypes.object
};

export default Job;
