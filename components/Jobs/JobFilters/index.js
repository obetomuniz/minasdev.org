import { useJobs } from "../../../contexts/Jobs"
import { Search, Filters, ButtonFilter } from "./ui"

const JobFilters = () => {
  const {
    actions: { onFilterByTerm },
  } = useJobs()
  const filters = [
    {
      label: "No Brasil",
    },
    {
      label: "Remoto",
    },
    {
      label: "Programação",
    },
    {
      label: "Front-End",
    },
    {
      label: "Back-End",
    },
    {
      label: "Mobile",
    },
    {
      label: "DevOps",
    },
    {
      label: "Blockchain",
    },
    {
      label: "DevOps",
    },
    {
      label: "QA",
    },
    {
      label: "Design",
    },
    {
      label: "Conteúdo",
    },
    {
      label: "Social",
    },
    {
      label: "Suporte",
    },
    {
      label: "Manager",
    },
  ]
  return (
    <div>
      <Search
        type="search"
        placeholder="Digite React, Python, QA, Manager, etc."
        onChange={(e) => onFilterByTerm(e.target.value)}
        autoFocus
      />
      <Filters>
        {filters.map((filter, index) => (
          <ButtonFilter
            key={`filter-${index}`}
            active={filter.label === "Remoto"}
            onClick={() => null}
          >
            {filter.label}
          </ButtonFilter>
        ))}
      </Filters>
    </div>
  )
}

export default JobFilters
