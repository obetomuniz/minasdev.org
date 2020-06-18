import { useJobs } from "../../../contexts/Jobs"
import { ScreenReaderContent } from "../../Common"
import { Search, Filters, ButtonFilter } from "./ui"

const FILTERS = [
  {
    value: "brasil",
    label: "No Brasil",
  },
  {
    value: "remote",
    label: "Remoto",
  },
  {
    value: "programming",
    label: "Programação",
  },
  {
    value: "frontend",
    label: "Front-End",
  },
  {
    value: "backend",
    label: "Back-End",
  },
  {
    value: "mobile",
    label: "Mobile",
  },
  {
    value: "devops",
    label: "DevOps",
  },
  {
    value: "blockchain",
    label: "Blockchain",
  },
  {
    value: "qa",
    label: "QA",
  },
  {
    value: "design",
    label: "Design",
  },
  {
    value: "content",
    label: "Conteúdo",
  },
  {
    value: "gamedev",
    label: "Game Dev",
  },
  {
    value: "support",
    label: "Suporte",
  },
  {
    value: "manager",
    label: "Manager",
  },
]

const JobFilters = () => {
  const {
    actions: { onFilterByTerm, onSelectTag },
    state: { tagsSelected },
  } = useJobs()

  return (
    <div>
      <ScreenReaderContent htmlFor="search" as={"label"}>
        Buscar Vaga
      </ScreenReaderContent>
      <Search
        id="search"
        type="search"
        placeholder="Digite React, Python, QA, Manager, etc."
        onChange={(e) => onFilterByTerm(e.target.value)}
        autoFocus
      />
      <Filters>
        {FILTERS.map((filter, index) => (
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
