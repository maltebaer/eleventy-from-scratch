/**
 * Extends the array prototype to sort a collection in display order
 *
 * @returns {Array} the sorted collection
 */
Array.prototype.sortByDisplayOrder = function () {
    return this.sort((a, b) => (Number(a.data.displayOrder) > Number(b.data.displayOrder) ? 1 : -1));
};
