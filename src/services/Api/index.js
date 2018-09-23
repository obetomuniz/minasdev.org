import axios from "axios";

const getMinasDevEvents = () => axios.get("https://api.minasdev.org/events");

export { getMinasDevEvents };
