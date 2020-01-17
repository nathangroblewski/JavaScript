const GroupBy = require('./lib/GroupBy')

/*
This module runs an example case of standard customer objects
with additional problematic elements
*/

const customers = [
    { 'name': 'Norman', 'productId': 1 },
    { 'name': 'Susan', 'productId': 2 }, undefined,
    { 'name': 'Trisha', 'productId': 4 }, null, [],
    { 'name': 'Jack', 'productId': 4 },
    { 'name': 'Lauren', 'productId': 2 }
]

const groupByProductId = new GroupBy('productId')
var groupedById = groupByProductId(customers)
console.log(groupedById)
