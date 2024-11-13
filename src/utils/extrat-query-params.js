export function extractQueryParams(query) {
  return query.substr(1).split('&').reduce((queryPrams, param) => {
    const [key, value] = param.split('=');

    queryPrams[key] = value;

    return queryPrams
  }, {})

}