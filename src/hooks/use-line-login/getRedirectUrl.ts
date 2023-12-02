const getRedirectUrl = (
  base: string,
  queryParams: Record<string, string>,
): string => {
  const query = Object.entries(queryParams)
    .map(
      ([key, value]) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(value)}`,
    )
    .join("&");
  return `${base}?${query}`;
};

export default getRedirectUrl;
