import { useContext } from "react"

import { NewsContext, NewsConsumer, NewsProvider } from "./Provider"

export { NewsProvider, NewsConsumer }

export function useNews() {
  const context = useContext(NewsContext)
  if (!context) {
    throw Error(
      "Component cannot call `useNews` unless wrapped with a `NewsProvider`"
    )
  }
  return context
}
