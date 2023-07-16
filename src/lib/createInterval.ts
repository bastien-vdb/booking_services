import { add } from "date-fns";

const createInterval = (begining: Date, end: Date, interval: number) => {
  const times = [];
  for (let i = begining; i <= end; i = add(i, { minutes: interval })) {
    times.push(i);
  }
  return times;
};
export default createInterval;
