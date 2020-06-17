import { useJobs } from "../../../contexts/Jobs"
import { Search, Filters, ButtonFilter } from "./ui"

const JobFilters = () => {
  const {
    actions: { onFilterByTerm, onSelectTag },
    state: { tagsSelected },
  } = useJobs()
  const filters = [
    {
      value: "",
      label: "No Brasil",
    },
    {
      value: "",
      label: "Remoto",
    },
    {
      value: "",
      label: "Programação",
    },
    {
      value: "",
      label: "Front-End",
    },
    {
      value: "",
      label: "Back-End",
    },
    {
      value: "",
      label: "Mobile",
    },
    {
      value: "",
      label: "DevOps",
    },
    {
      value: "",
      label: "Blockchain",
    },
    {
      value: "",
      label: "QA",
    },
    {
      value: "",
      label: "Design",
    },
    {
      value: "",
      label: "Conteúdo",
    },
    {
      value: "",
      label: "Social",
    },
    {
      value: "",
      label: "Suporte",
    },
    {
      value: "",
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
            active={tagsSelected.has(filter.value)}
            onClick={() => onSelectTag(filter.value)}
          >
            {filter.label}
          </ButtonFilter>
        ))}
      </Filters>
    </div>
  )
}

export default JobFilters
