angular.module('bucketList')
.controller('appController', function(listService) {
  this.listItems = [
      {
          description: 'make my girlfriend love me',
          place: 'her heart',
          cost: 99999999999999999,
          url: 'http://www.japan-guide.com/e/e6901.html'
      },
      {
          description: 'mt fuji',
          place: 'Japan',
          cost: 3000,
          url: 'http://www.japan-guide.com/e/e6901.html'
      },
      {
          description: 'Northern Lights',
          place: 'Iceland',
          cost: 2000,
          url: 'http://www.icelandair.us/vacations/category/iceland-northern-lights/'
      }
  ]

})
.directive('app', function() {
    return {
      scope: {},
      restrict: 'E',
      controller: 'appController',
      controllerAs: 'appCtrl',
      bindToController: true,
      templateUrl: 'src/templates/appTemplate.html'
    }
})