import { percentage } from "@/assets/scripts/mathPercentage";
import dayjs from "dayjs";

const isClientSide: boolean = typeof window !== "undefined";
const store = isClientSide ? window?.__NUXT__?.pinia.time : null;

const now = isClientSide ? store.now : null;
const epoch = isClientSide ? store.epochFrom || "2000-01-01T00:00:00" : null;

export const durationMsec = () => {
  const start = Math.floor(now.year() * 0.1) * 100;
  const end = Math.ceil(now.year() * 0.1) * 100;

  const centuryBeginning = dayjs(`${start}-01-01`);
  const centuryEnd = dayjs(`${end}-01-01`);
  return centuryEnd.diff(centuryBeginning);
};

export const getMsecDifference = (now: any) => {
  durationMsec();

  return now.diff(epoch) % durationMsec();
};

export const getProgress = (now: any) => {
  return percentage(getMsecDifference(now), durationMsec());
};