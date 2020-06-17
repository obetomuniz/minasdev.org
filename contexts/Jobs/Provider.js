import { createContext, useState, useRef } from "react"

export const INITIAL_STATE = {
  actions: {},
  state: {},
}

export const JobsContext = createContext(INITIAL_STATE)

export const JobsConsumer = JobsContext.Consumer

export function JobsProvider({ jobs, children }) {
  const [jobsFiltered, setJobsFiltered] = useState(jobs)
  const timer = useRef(null)

  const onFilterByTerm = (term) => {
    clearTimeout(timer.current)
    if (term) {
      timer.current = setTimeout(() => {
        const newJobList = jobsFiltered.map((data) => {
          return {
            ...data,
            sources: data.sources.filter(({ position }) =>
              position.startsWith(term)
            ),
          }
        })

        setJobsFiltered(newJobList)
      }, 500)
    } else {
      setJobsFiltered(jobs)
    }
  }

  const state = {
    actions: { onFilterByTerm },
    state: { jobs: jobsFiltered },
  }

  return <JobsContext.Provider value={state}>{children}</JobsContext.Provider>
}
