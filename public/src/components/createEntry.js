angular.module('bucketList')
.controller('createEntryController', function(listService) {
  this.listItem = {},
  this.createItem = function (data)  {
      listService.addListItem(data)
      .then(() => {
          console.log('SUCCESS')
          listService.getListItems()
          .then((results) => {
              console.log(results);
          })
      }).catch((err) => {
          console.log(err);
      })
  }
})
.directive('createEntry', function() {
    return {
        scope:{},
        restrict: 'E',
        controller: 'createEntryController',
        controllerAs: 'createEntryCtrl',
        bindToController: true,
        templateUrl: 'src/templates/createEntryTemplate.html'
    }
})