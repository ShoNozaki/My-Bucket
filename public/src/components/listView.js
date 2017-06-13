angular.module('bucketList')
.directive('listView', function() {
    return {
        scope: {
            listItems: '='
        },
        restrict: 'E',
        controller: () => { console.log('inside list View') },
        controllerAs: 'listViewCtrl',
        bindToController: true,
        templateUrl: 'src/templates/listViewTemplate.html'
    }
})