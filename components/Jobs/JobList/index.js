import PropTypes from "prop-types"
import { useJobs } from "../../../contexts/Jobs"
import { Job, JobFilters } from "../"
import { Wrapper, Content, Title, ResultsNotFound } from "./ui"

const notFoundImages = [
  "https://media.giphy.com/media/BEYRc8P1IaiaY/giphy.gif",
  "https://media.giphy.com/media/yZgHsSVnzIjew/giphy.gif",
  "https://media1.tenor.com/images/0289ce650765491b752d3f9f23015688/tenor.gif",
  "https://media1.tenor.com/images/d00aea19494a9c502f732de87b2e9069/tenor.gif",
  "https://media1.tenor.com/images/6a22b36d7658ceb0d6984bf28c759100/tenor.gif",
  "https://media.tenor.com/images/71656fc182ad63d50fbcd7c5496aa09d/tenor.gif",
]

const JobList = () => {
  const {
    state: { jobs },
  } = useJobs()
  const jobsLength = jobs.length

  return (
    <Wrapper>
      <Title>{`${jobsLength} VAGAS`}</Title>
      <JobFilters />
      <Content>
        {jobs.map((job) => (
          <Job key={job.id} {...job} />
        ))}
        {jobsLength === 0 && (
          <ResultsNotFound
            src={
              notFoundImages[Math.floor(Math.random() * notFoundImages.length)]
            }
            alt="Nenhum resultado encontrado."
          />
        )}
      </Content>
    </Wrapper>
  )
}

JobList.defaultProps = {
  jobs: [],
}

JobList.propTypes = {
  jobs: PropTypes.array,
}

export default JobList
