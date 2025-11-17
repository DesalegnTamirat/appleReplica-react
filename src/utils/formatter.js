// >==> Function to truncate text <==<
export const truncateText = (text, maxLength) =>
  text.length > maxLength ? text.slice(0, maxLength) + "..." : text;

// >==> Function to format ISO <==<
export const formatDate = (isoString) => {
  const date = new Date(isoString);
  const options = { year: "numeric", month: "long", day: "numeric" };
  return date.toLocaleDateString(undefined, options);
};
