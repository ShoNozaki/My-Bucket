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
  this.addListItem = function(data) {
      return $http.post('/api/list', data)
        .then((results) => {
            console.log(results);
        }).catch((err) => {
            console.log(err);
        })
  },
  this.deleteItem = function(data) {
      console.log('data= ', data)
      return $http.delete('/api/list/' + data.id)
        .then((results) => {
            console.log(results);
        }).catch((err) => {
            console.log(err)
        })
  }      
}) 