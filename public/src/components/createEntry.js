angular.module('bucketList')
.controller('createEntryController', function($scope, listService) {
  this.listItem = {},
  this.createItem = function (data)  {
      listService.addListItem(data)
      .then(() => {
          console.log('SUCCESS POST')
          listService.getListItems()
          .then((results) => {
              console.log('SUCCESS GET')
              $scope.$parent.appCtrl.listItems = results
          })
      }).catch((err) => {
          console.log(err);
      })
  }
})
.directive('createEntry', function() {
    return {
        scope:{
            listItems: '<'
        },
        restrict: 'E',
        controller: 'createEntryController',
        controllerAs: 'createEntryCtrl',
        bindToController: true,
        templateUrl: 'src/templates/createEntryTemplate.html'
    }
})