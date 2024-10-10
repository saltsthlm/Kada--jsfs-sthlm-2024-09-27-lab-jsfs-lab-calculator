import { isValidString } from "./helper-functions";

const regex = /[+\-*/]/;
const opperands = ["+", "-", "/", "*"];

export const validateInputString = (numberString: string) => {
  if (!regex.test(numberString))
    throw new Error("Needs to contain an opperand.");

  let splitedArray: string[] = [];

  opperands.forEach((opperand) => {
    if (numberString.includes(opperand)) {
      splitedArray = numberString.split(opperand);
    }
  });

  const firstElement = splitedArray[0];
  const secondElement = splitedArray[1];

  if (
    !isValidString(firstElement) ||
    isNaN(Number(firstElement)) ||
    !isValidString(secondElement) ||
    isNaN(Number(secondElement))
  )
    throw new Error("Input must be valid numbers.");
};
