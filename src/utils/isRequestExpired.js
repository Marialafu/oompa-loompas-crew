export const isRequestExpired = (lastRequest) => {
  const oneDay = 24 * 60 * 60 * 1000;
  return !lastRequest || Date.now() - lastRequest >= oneDay;
};
