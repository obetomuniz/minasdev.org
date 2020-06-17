import { createContext } from "react"

export const INITIAL_STATE = {
  actions: {},
  state: {},
}

export const JobsContext = createContext(INITIAL_STATE)

export const JobsConsumer = JobsContext.Consumer

export function JobsProvider({ jobs, children }) {
  const state = {
    actions: {},
    state: { jobs },
  }

  return <JobsContext.Provider value={state}>{children}</JobsContext.Provider>
}
