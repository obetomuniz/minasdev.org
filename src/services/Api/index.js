import axios from "axios";

const getMinasDevEvents = () => axios.get("https://api.minasdev.org/events");

const getMinasDevJobs = () => axios.get("https://api.minasdev.org/jobs");

export { getMinasDevEvents, getMinasDevJobs };
