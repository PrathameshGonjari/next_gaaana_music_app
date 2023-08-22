let timeId: any = 0;
export const debounceCell = (
  debFunction: any,
  time: number,
  value?: any
) => {
  if (timeId) {
    clearTimeout(timeId);
  }
  return new Promise((response) => {
    timeId = setTimeout(async () => {
      const res = await debFunction(value);
      response(res);
    }, time);
  });
};