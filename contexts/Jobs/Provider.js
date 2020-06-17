import * as JsSearch from "js-search"
import { createContext, useState, useRef } from "react"
import sortByDateAsc from "../../helpers/sortByDateAsc"

export const INITIAL_STATE = {
  actions: {},
  state: {},
}

export const JobsContext = createContext(INITIAL_STATE)

export const JobsConsumer = JobsContext.Consumer

const searchEngineByTag = (tags, docs) => {
  if (tags.size > 0) {
    const search = new JsSearch.Search(["id"])
    search.addIndex(["tags"])
    search.addDocuments(docs)
    return search.search([...tags].join(" "))
  }
  return docs
}

const searchEngineByTerm = (term, docs) => {
  const search = new JsSearch.Search(["id"])
  search.addIndex(["position"])
  search.addIndex(["company"])
  search.addDocuments(docs)
  return search.search(term)
}

export function JobsProvider({ jobs, children }) {
  const [jobListFiltered, setJobListFiltered] = useState(jobs)
  const [searchTerm, setSearchTerm] = useState("")
  const tagsSelected = useRef(new Set([]))
  const timer = useRef(null)

  const onFilterByTerm = (term) => {
    setSearchTerm(term)
    clearTimeout(timer.current)

    if (term) {
      timer.current = setTimeout(() => {
        let newJobListFiltered = searchEngineByTerm(term, jobs)
        if (tagsSelected.current.size) {
          newJobListFiltered = searchEngineByTag(
            tagsSelected.current,
            newJobListFiltered
          )
        }
        setJobListFiltered(newJobListFiltered.sort(sortByDateAsc))
      }, 300)
    } else {
      let newJobListFiltered = jobs
      if (tagsSelected.current.size) {
        newJobListFiltered = searchEngineByTag(
          tagsSelected.current,
          newJobListFiltered
        )
      }
      setJobListFiltered(newJobListFiltered.sort(sortByDateAsc))
    }
  }

  const onSelectTag = (tag) => {
    let newJobListFiltered = jobs

    if (tagsSelected.current.has(tag)) {
      tagsSelected.current.delete(tag)
    } else {
      tagsSelected.current.add(tag)
    }

    newJobListFiltered = searchEngineByTag(
      tagsSelected.current,
      newJobListFiltered
    )

    if (searchTerm) {
      newJobListFiltered = searchEngineByTerm(searchTerm, newJobListFiltered)
    }

    setJobListFiltered(newJobListFiltered.sort(sortByDateAsc))
  }

  const state = {
    actions: { onFilterByTerm, onSelectTag },
    state: { jobs: jobListFiltered, tagsSelected: tagsSelected.current },
  }

  return <JobsContext.Provider value={state}>{children}</JobsContext.Provider>
}
