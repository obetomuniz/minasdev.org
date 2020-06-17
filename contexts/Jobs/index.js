import { useContext } from "react"

import { JobsContext, JobsConsumer, JobsProvider } from "./Provider"

export { JobsProvider, JobsConsumer }

export function useJobs() {
  const context = useContext(JobsContext)
  if (!context) {
    throw Error(
      "Component cannot call `useJobs` unless wrapped with a `JobsProvider`"
    )
  }
  return context
}
