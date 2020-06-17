import { useContext } from "react"

import { EventsContext, EventsConsumer, EventsProvider } from "./Provider"

export { EventsProvider, EventsConsumer }

export function useEvents() {
  const context = useContext(EventsContext)
  if (!context) {
    throw Error(
      "Component cannot call `useEvents` unless wrapped with a `EventsProvider`"
    )
  }
  return context
}
