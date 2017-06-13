angular.module('bucketList')
.controller('listEntryController', function($scope, listService) {
    this.delete = (item) => {
      listService.deleteItem(item)
      .then(() => {
          console.log('successfully deleted');
          listService.getListItems()
          .then((results) => {
            this.items = results;
          })
      }).catch((err) => {
          console.log(err);
      })
    }
})
.directive('listEntry', function() {
    return {
        scope: {
            listItem: '<',
            items: '='
        },
        restrict: 'E',
        controller: 'listEntryController',
        controllerAs: 'listEntryCtrl',
        bindToController: true,
        templateUrl: 'src/templates/listEntryTemplate.html'
    }
})