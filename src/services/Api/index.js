import axios from "axios";

const getMinasDevEvents = () => {
  try {
    return require("../../../../api.minasdev.org/data/events.json");
  } catch (error) {
    return require("@data/events.json");
  }
};

const getMinasDevJobs = () => {
  try {
    return require("../../../../api.minasdev.org/data/jobs.json");
  } catch (error) {
    return require("@data/jobs.json");
  }
};

export { getMinasDevEvents, getMinasDevJobs };
