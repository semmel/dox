/**
 * One
 * @return {Number}
 */
let one = () => 1;

/**
 * Negate
 * @param $x
 */
var $neg = $x => -$x;

/**
 * Add
 * @param x_
 * @param y
 */
const _add = (x_, y) => x_ + y;

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

/**
 * alwaysUndefined
 * @param _
 */
let alwaysUndefined = _ => {};