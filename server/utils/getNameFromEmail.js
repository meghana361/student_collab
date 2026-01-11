const getNameFromEmail = (email) => {
  if (!email) return "Anonymous";

  return email
    .split("@")[0]          // take before @
    .replace(/[0-9]/g, "")  // ❌ remove numbers
    .replace(/[._]/g, " ")  // replace . and _ with space
    .replace(/\s+/g, " ")   // remove extra spaces
    .trim()
    .replace(/\b\w/g, char => char.toUpperCase()); // Capitalize
};

export default getNameFromEmail;
