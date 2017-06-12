angular.module('bucketList')
.controller('appController', function() {
  this.listItems = [
      {
          description: 'climb Fuji',
          place: 'Japan',
          cost: 3000,
          url: 'http://www.japan-guide.com/e/e6901.html'
      },
      {
          description: 'Mardi Gras',
          place: 'Rio',
          cost: 800,
          url: 'https://www.dobrazilright.com/rio-carnival-packages/'
      },
      {
          description: 'Red Bull BC One',
          place: 'Amsterdam',
          cost: 2000,
          url: 'http://www.redbullbcone.com/en_INT'
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