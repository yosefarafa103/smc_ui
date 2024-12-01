import { dataMills, millsType } from "./types";

export const converAndTransformToDate = (
  startDate: number,
  stopDate: number
) => {
  const differenceInMilliseconds = stopDate - startDate;
  let dateOnStr: string | number = differenceInMilliseconds;
  if (dateOnStr <= 60000) {
    dateOnStr /= 1000;
    dateOnStr = `${dateOnStr}s`;
  } else if (dateOnStr < 3600000) {
    // check if less hour
    dateOnStr /= 60000;
    dateOnStr = `${dateOnStr.toString().slice(0, 2)}m`;
  } else if (dateOnStr >= 864e5) {
    // check if great day
    dateOnStr /= 864e5;
    dateOnStr = `${dateOnStr}d`;
  } else if (dateOnStr >= 36e5) {
    // check if great hour
    // let [hours, mins] = `${Number(dateOnStr).toFixed(2)}`.split(".");
    dateOnStr /= 3600000;
    let hours = Math.floor(dateOnStr);
    let minsDecimal = dateOnStr - hours;
    let mins = Math.round(minsDecimal * 60);
    dateOnStr = `${hours}h ${mins > 0 ? `and ${mins}m` : ""}`;
  }
  return dateOnStr;
};
export const convertFromStrTomMs = (date: string) => {
  const arr: string[] | number[] | any = date.match(/\w/g);
  const checkUnits = (unit: string | number, count: number): number => {
    if (unit === "h") {
      return count * 36e5;
    } else if (unit === "m") {
      return count * 60e3;
    } else if (unit === "d") {
      return count * 864e5;
    }
    return 1;
  };
  // console.log(arr.filter((item) => /\d/.test(item)).join(''));

  if (arr.length === 2) {
    const [count, unit] = arr;

    return checkUnits(unit, count);
  } else {
    let count = arr.filter((item: string) => /\d/g.test(item)).join("");

    let [unit] = arr.filter((item: string) => /\D/g.test(item));
    return checkUnits(unit, count);
  }
};
export const extractDate = (
  date: Date,
  isFullDate: boolean = false
): string => {
  return `${new Date(date).getFullYear()}/${
    new Date(date).getMonth() + 1
  }/${new Date(date).getDate()}${
    isFullDate
      ? `-${
          new Date(date).getHours() === 0 ? 12 : new Date(date).getHours()
        }:${new Date(date).getMinutes()}`
      : ""
  }`;
};
export const transformMsToDate = (dateOnStr: number): string => {
  let result: string = "";
  if (dateOnStr <= 60000) {
    dateOnStr /= 1000;
    result = `${dateOnStr}s`;
  } else if (dateOnStr < 3600000) {
    // check if less hour
    dateOnStr /= 60000;
    result = `${dateOnStr.toString().slice(0, 2)}m`;
  } else if (dateOnStr >= 36e5) {
    // check if great hour
    // let [hours, mins] = `${Number(dateOnStr).toFixed(2)}`.split(".");
    dateOnStr /= 3600000;
    let hours = Math.floor(dateOnStr);
    let minsDecimal = dateOnStr - hours;
    let mins = Math.round(minsDecimal * 60);
    result = `${hours}h ${mins > 0 ? `and ${mins}m` : ""}`;
  } else if (dateOnStr >= 864e5) {
    // check if great day
    dateOnStr /= 864e5;
    result = `${dateOnStr}d`;
  }
  return result;
};
export const getPercent = (totalDataPerMs: number, certainDate: number) => {
  return (certainDate / totalDataPerMs) * 100;
};
export const getTotal = (arr: dataMills[], key: string | millsType) => {
  return arr?.map((mil): string => mil[key]);
};
export const getPercentFromList = (
  array: string[],
  currentEl: string | dataMills
) => {
  const filterItem: string[] = array.filter((el) => el === currentEl);
  return getPercent(array.length, filterItem.length);
};
