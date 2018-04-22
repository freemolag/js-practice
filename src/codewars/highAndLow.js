const highAndLow = (numbers) => {
  const sortedNumbers = numbers.split(' ')
    .map(Number)
    .filter(n => n !== ' ')
    .sort((a, b) => b - a);
  return `${sortedNumbers[0]} ${sortedNumbers[sortedNumbers.length - 1]}`;
};

export default highAndLow;
