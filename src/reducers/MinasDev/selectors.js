const selectMinasDev = state => state.get("minasdev");
const selectMinasDevEvents = state => state.get("minasdev").get("events");
const selectMinasDevJobs = state => state.get("minasdev").get("jobs");

export { selectMinasDev, selectMinasDevEvents, selectMinasDevJobs };
