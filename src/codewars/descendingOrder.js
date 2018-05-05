
const descendingOrder = n => Number((`${n}`).split('').sort((a, b) => b - a).join(''));

export default descendingOrder;
