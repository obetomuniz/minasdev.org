import { createContext } from "react"

export const INITIAL_STATE = {
  actions: {},
  state: {},
}

export const NewsContext = createContext(INITIAL_STATE)

export const NewsConsumer = NewsContext.Consumer

export function NewsProvider({ news, children }) {
  const state = {
    actions: {},
    state: { news },
  }

  return <NewsContext.Provider value={state}>{children}</NewsContext.Provider>
}
