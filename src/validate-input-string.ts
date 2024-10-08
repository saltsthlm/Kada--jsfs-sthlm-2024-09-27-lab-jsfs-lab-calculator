

export const validateInputString = (numberString: string) => {
    let splitedArray: string[] = [];
    const opperands = ["+", "-", "/", "*"];
    opperands.forEach(opperand => {
        if (numberString.includes(opperand)){
      splitedArray = numberString.split(opperand); 
}});
    console.log(splitedArray);

    if (isNaN(Number(splitedArray[0])) || isNaN(Number(splitedArray[1]))) return false;

    return true;
};