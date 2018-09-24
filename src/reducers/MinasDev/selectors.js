const selectMinasDev = state => state.get("minasdev");
const selectMinasDevEvents = state => state.get("minasdev").get("events");
const selectMinasDevJobs = state => state.get("minasdev").get("jobs");
const selectMinasDevJobsFiltered = state => state.get("minasdev").get("jobsFiltered");

export { selectMinasDev, selectMinasDevEvents, selectMinasDevJobs, selectMinasDevJobsFiltered };
