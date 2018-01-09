fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, func) {
      const keys_arr = Object.keys(collection);
      for (let i = 0; i < keys_arr.length; i++) {
        func(collection[keys_arr[i]]);
      }
      return collection;
    },

    map: function(collection, func) {
      const keys_arr = Object.keys(collection);
      let result_arr = [];
      for (let i = 0; i < keys_arr.length; i++) {
        result_collection.push(func(collection[keys_arr[i]]));
      }
      return result_collection;
    },

    reduce: function(collection, func, acc) {
      const keys_arr = Object.keys(collection);
      let i = 0;
      let aggregate = acc;
      while (keys_arr[i]) {
          aggregate = func(aggregate, collection[keys_arr[i]], i, collection);
          i++;
      }
      return aggregate;
    },

    find: function(collection, predicate) {
      const keys_arr = Object.keys(collection);
      let i = 0;
      while (keys_arr[i]) {
        if (predicate(collection[keys_arr[i]])) {
          return collection[keys_arr[i]];
        }
        i++;
      }
    },

    filter: function(collection, predicate) {
      const keys_arr = Object.keys(collection);
      let i = 0;
      let result = [];
      while (keys_arr[i]) {
        if (predicate(collection[keys_arr[i]])) {
          result.push(collection[keys_arr[i]]);
        }
        i++;
      }
      return result;
    },

    size: function(collection) {
      const keys_arr = Object.keys(collection);
      return keys_arr.length;
    },


    // array functions
    first: function(array, n) {
      // if n = 1, return first value
      // else, return first n values in array

      if (typeof(n) === 'number') {
        return array.slice(0,n);
      } else {
        // debugger
        return array[0];
      }
    },

    first: function(array, n) {
      // if n = 1, return first value
      // else, return first n values in array

      if (typeof(n) === 'number') {
        return array.slice(-n);
      } else {
        // debugger
        return array[0];
      }
    },

    compact: function (array) {
      new_array = []
      for (element of array) {
        if (element) {
          new_array.push(element);
        }
      }
      return new_array;
    },

    sortBy: function (array, iteratee) {
      const sortedArray = array.slice().sort(function (a, b) {
        return iteratee(a) - iteratee(b);
      })
      return sortedArray;
    },

    uniq: function (array, [isSorted], [iteratee]) {
      
    }


  }
})()

fi.libraryMethod()
var example1 = fi.sortBy([1, 2, 3, 4, 5, 6], function(num){ return Math.sin(num); });
console.log(example1);
// const logger = function (a) {
//   return console.log(a);
// }
//
// const doubler = function (a) {
//   return a * 2;
// }
//
// const sum = function (agg, el, i, collection) {
//   return agg + el;
// }
//
// const concat = function (agg, el, i, collection) {
//   return agg.join(el);
// }
//
// let testArr = {one: 1, two: 2, three: 3}
// console.log(testArr)
// fi.each(testArr,logger)
// console.log(testArr)
//
// console.log(fi.reduce(testArr, sum, 0));
//
// console.log(fi.map(testArr, doubler));
