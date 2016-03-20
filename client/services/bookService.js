'use strict';

var serviceName = 'bookFactory';

angular
  .module('services')
  .factory(serviceName, BookFactory);

BookFactory.$inject = ['$http'];

function BookFactory($http) {
  var url = 'api/v1/books';
  var books_mock = [
    {
      name: 'The Book of Trees',
      price: 19,
      pubdate: new Date('2014', '03', '08'),
    },
    {
      name: 'Program or be Programmed',
      price: 8,
      pubdate: new Date('2013', '08', '01'),
    },
      {
      name: 'Program or be Programmed',
      price: 8,
      pubdate: new Date('2013', '08', '01'),
    },
      {
      name: 'Program or be Programmed',
      price: 8,
      pubdate: new Date('2013', '08', '01'),
    }
  ];

  // var getBooks = function(callback) {
  //   $http.get(url)
  //     .then(function success(data) {
  //       callback(null, data);
  //     }, function error (err) {
  //       callback(err);
  //     });
  // };
  var getBooks = function(callback) {
    callback(null, books_mock);
  };

  return {
    getBooks: getBooks
  };

}
