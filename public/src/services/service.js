angular.module('bucketList')
.service('listService', function($http) {
  this.getListItems = function() {
      return $http.get('/api/list')
        .then((results) => {
            return results.data;
        }).catch((err) => {
            console.log(err);
        })
  },
  this.addListItem = function() {
      return $http.post('/api/list')
        .then((results) => {
            console.log(results);
        }).catch((err) => {
            console.log(err);
        })
  }      
}) 