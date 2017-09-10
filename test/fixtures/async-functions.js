/**
 * One
 * @returns {Promise.<number>}
 */
async function one() {
  return Promise.resolve(1);
}

/**
 * All items
 * @param items
 * @returns {Promise.<*[]>}
 */
async function all(...items) {
  return Promise.all(items.map( item => Promise.resolve(item) ));
}

/**
 * Five
 * @return {Promise.<number>}
 */
const five = async function() {
    return await Promise.resolve(5);
};
