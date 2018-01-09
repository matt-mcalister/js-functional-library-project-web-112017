fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(arr, func) {
      let new_arr = arr.slice();
      for (let i=0; i<new_arr.length; i++) {
        func(new_arr[i]);
      }
      return arr;
    },

    map: function() {

    },

    reduce: function() {

    },

    functions: function() {

    },


  }
})()

fi.libraryMethod()

const adder = function (a,b,c) {
  return a + b + c;
}

fi.each([1,2,3],adder)
