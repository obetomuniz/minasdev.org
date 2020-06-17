import * as JsSearch from "js-search"
import { createContext, useState, useRef } from "react"

export const INITIAL_STATE = {
  actions: {},
  state: {},
}

export const JobsContext = createContext(INITIAL_STATE)

export const JobsConsumer = JobsContext.Consumer

const searchEngineByTerm = (term, docs) => {
  const search = new JsSearch.Search(["id"])
  search.addIndex(["position"])
  search.addIndex(["company"])
  search.addIndex(["metadata", "name"])

  search.addDocuments(docs)

  return search.search(term)
}

export function JobsProvider({ jobs, children }) {
  const [jobsListFiltered, setJobsFiltered] = useState(jobs)
  const timer = useRef(null)

  const onFilterByTerm = (term) => {
    clearTimeout(timer.current)
    if (term) {
      timer.current = setTimeout(() => {
        const newJobListFiltered = searchEngineByTerm(term, jobs)

        setJobsFiltered(newJobListFiltered)
      }, 500)
    } else {
      setJobsFiltered(jobs)
    }
  }

  const state = {
    actions: { onFilterByTerm },
    state: { jobs: jobsListFiltered },
  }

  return <JobsContext.Provider value={state}>{children}</JobsContext.Provider>
}
