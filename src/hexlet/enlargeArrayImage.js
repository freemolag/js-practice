import _ from 'lodash';

// BEGIN (write your solution here)
const duplicate = n => [n, n];
const mapped = val => _.flatMap(val, duplicate);
export default arr => arr.reduce((acc, val) => [...acc, mapped(val), mapped(val)], []);
// END
