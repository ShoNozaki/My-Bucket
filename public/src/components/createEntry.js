angular.module('bucketList')
.directive('createEntry', function() {
    return {
        scope:{},
        restrict: 'E',
        controller:() => {console.log('inside create entry')},
        controllerAs: 'createEntryCtrl',
        bindToController: true,
        templateUrl: 'src/templates/createEntryTemplate.html'
    }
})