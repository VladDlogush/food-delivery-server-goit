const getClearUrl = (url) => {
  const lastIndex = url.lastIndexOf("/");
  const firstIndex = url.indexOf("/");

  if (lastIndex === 0) url;
  if (lastIndex !== 0) return url.slice(firstIndex, lastIndex);

  return url;
};

const getRouteHandler = (routerConfig, url) => {
  const clearUrl = getClearUrl(url);
  return routerConfig[clearUrl];
};

module.exports = getRouteHandler;
