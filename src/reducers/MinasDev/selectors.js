const selectMinasDev = state => state.get("minasdev");
const selectMinasDevEvents = state => state.get("minasdev").get("events");

export { selectMinasDev, selectMinasDevEvents };
