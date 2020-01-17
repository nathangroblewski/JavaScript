var _ = require('lodash')

/*
This module utilizes a closure to provide grouping of objects based on a specified key.
if an element in the array is null, undefined, or not an object, it will be excluded from the result

example:
const groupByProductId = GroupBy('productId')
groupedById = groupByProductId(<objects>)
*/

function GroupBy(key) {
    const groupKey = key

    return objects => {
        return _.chain(objects)
            .filter(obj => isObject(obj) && groupKey in obj)
            .groupBy(obj => obj[groupKey])
            .value()
    }
}

function isObject(obj) {
    return obj && typeof obj === 'object' && obj.constructor === Object
}

module.exports = GroupBy
