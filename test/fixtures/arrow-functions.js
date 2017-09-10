/**
 * One
 * @return {Number}
 */
let one = () => 1;

/**
 * Negate
 * @param x
 */
var neg = x => -x;
/**
 * Add
 * @param x
 * @param y
 */
const add = (x, y) => x + y;

/**
 * Four
 * @returns {Promise<Number>}
 */
var four = async() => Promise.resolve(4);

/**
 * Max
 * @param values
 */
const max = (...values) => values.reduce( (acc, x) => acc > x ? acc : x );