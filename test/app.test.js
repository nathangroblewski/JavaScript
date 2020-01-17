const GroupBy = require('../lib/GroupBy')

var mockCustomers = [
    { 'name': 'Norman', 'productId': 3 }, undefined,
    { 'name': 'Susan', 'productId': 1 }, null,
    { 'name': 'Trisha', 'productId': 3 }, [],
    { 'name': 'Lauren', 'productId': 4 },
    { 'name': 'Steve' },
    { 'name': 'Kristen', 'productId': 4 },
    { 'name': 'Nola', 'productId': 6 }
]

describe('tests for arrangeBy module', () => {
    let groupByProductId;
    let groupedById;

    beforeEach(() => {
        groupByProductId = new GroupBy('productId');
        groupedById = groupByProductId(mockCustomers);
    })

    test('that a function is returned', () => {
        expect(typeof groupByProductId).toBe('function');
    })

    test('that an object is returned when groupedById is invoked', () => {
        expect(typeof groupedById).toBe('object');
    })

    /*
      Testing the num of total keys and num of customers in each grouping validates
      that null, undefined or non object elements were excluded, 
      as well as the object that didn't contain a productId
    */

    test('that there are only four grouping keys', () => {
        expect(Object.keys(groupedById).length).toEqual(4);
    })

    test('that there are two customers in the "ProductId 3" grouping', () => {
        expect(groupedById['3'].length).toEqual(2);
    });

    test('that there are two customers in the "ProductId 4" grouping', () => {
        expect(groupedById['4'].length).toEqual(2);
    });

    test('that there is one customer in the "ProductId 6" grouping', () => {
        expect(groupedById['6'].length).toEqual(1);
    });

    test('that there is one customer in the "ProductId 1" grouping', () => {
        expect(groupedById['1'].length).toEqual(1);
    });

});
