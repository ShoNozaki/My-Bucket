angular.module('bucketList')
.directive('listEntry', function() {
    return {
        scope: {
            listItem: '<'
        },
        restrict: 'E',
        controller:() => {
            console.log('inside list Entry');
        },
        controllerAs: 'listEntryCtrl',
        bindToController: true,
        templateUrl: 'src/templates/listEntryTemplate.html'
    }
})