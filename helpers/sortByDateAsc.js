import compareAsc from "date-fns/compareAsc"
import getDateObjectFromString from "./getDateObjectFromString"

export default (a, b) => {
  return compareAsc(
    getDateObjectFromString(b.date),
    getDateObjectFromString(a.date)
  )
}
