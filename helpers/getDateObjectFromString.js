export default (dateString) => {
  const [year, month, day] = dateString.split("-")
  return new Date(parseInt(year), parseInt(month) - 1, parseInt(day))
}
