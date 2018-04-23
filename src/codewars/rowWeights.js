const weight = team => team.reduce((acc, value) => acc + value, 0);

const rowWeights = (array) => {
  const team1 = array.filter((p, i) => (i % 2 === 0 ? p : 0));
  const team2 = array.filter((p, i) => (i % 2 !== 0 ? p : 0));
  return [weight(team1), weight(team2)];
};

export default rowWeights;
