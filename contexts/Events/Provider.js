import { createContext } from "react"

export const INITIAL_STATE = {
  actions: {},
  state: {},
}

export const EventsContext = createContext(INITIAL_STATE)

export const EventsConsumer = EventsContext.Consumer

export function EventsProvider({ events, children }) {
  const state = {
    actions: {},
    state: { events },
  }

  return (
    <EventsContext.Provider value={state}>{children}</EventsContext.Provider>
  )
}
