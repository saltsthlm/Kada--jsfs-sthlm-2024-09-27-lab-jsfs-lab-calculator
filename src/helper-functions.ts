export const isValidString = (testString: string) => {
  for (let i = 0; i < testString.length; i++) {
    if (testString[i] !== " ") return true;
  }
  return false;
};

export const isNumber = (numberString: string) => {
  if (isValidString(numberString) && !isNaN(Number(numberString))) return true;
  return false;
};
