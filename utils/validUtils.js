const validator = require("validator");

function isUndefined(value) {
  return value === undefined;
}
function isValidString(value) {
  return typeof value === "string" && !validator.isEmpty(value.trim());
}
function isValidInteger(value) {
  return (
    typeof value === "number" && validator.isInt(String(value), { min: 0 })
  );
}
function isValidStringArray(arr) {
  if (!Array.isArray(arr)) {
    return false;
  }
  return arr.every((item) => !isUndefined(item) && isValidString(item));
}

module.exports = {
  isUndefined,
  isValidString,
  isValidInteger,
  isValidStringArray,
};
