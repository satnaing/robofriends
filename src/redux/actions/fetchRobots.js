import { FETCH_ROBOTS } from "../types";

const fetchRobots = (data) => ({
  type: FETCH_ROBOTS,
  payload: data,
});

export default fetchRobots;
