import React from "react"
import PropTypes from "prop-types"
import format from "date-fns/format"
import getDateObjectFromString from "../../../helpers/getDateObjectFromString"
import {
  Wrapper,
  PublicationDate,
  JobTitle,
  JobLanguage,
  JobIsRemote,
  JobLink,
  JobOnMinasDevSlack,
  JobCompany,
  Source,
  SourceLink,
  Tags,
} from "./ui"

const Job = ({ company, date, position, remote, url, metadata }) => {
  const { language, name: source, website } = metadata

  return (
    <Wrapper itemScope itemType="http://schema.org/JobPosting">
      <PublicationDate>
        Publicado em
        <time itemProp="datePosted" dateTime={date}>
          {format(getDateObjectFromString(date), "dd/MM/yyyy")}
        </time>
        <JobLanguage>{language === "en-us" ? "🌐" : "🇧🇷"}</JobLanguage>
        {remote ? <JobIsRemote>REMOTO</JobIsRemote> : null}
      </PublicationDate>
      <JobTitle itemProp="title">
        <JobLink itemProp="url" href={url} target="_blank" rel="noopener">
          {position}
        </JobLink>
        {source === "Minas Dev Vagas" ? (
          <JobOnMinasDevSlack src="/images/favicons/apple-touch-icon-57x57.png" />
        ) : null}
      </JobTitle>
      <JobCompany>{`@${company}`}</JobCompany>
      <Source itemProp="source">
        <SourceLink href={website} target="_blank" rel="noopener">
          {source}
        </SourceLink>
        {/* <Tags>{`, ${tagList}`}</Tags> TODO: Add support for tags */}
      </Source>
    </Wrapper>
  )
}

Job.propTypes = {
  data: PropTypes.object,
}

export default Job
