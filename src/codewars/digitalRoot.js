const digitalRoot = n =>
  (n < 10 ? n : digitalRoot(Array.from(n.toString(), Number)
    .reduce((acc, val) => acc + val, 0)));

export default digitalRoot;
