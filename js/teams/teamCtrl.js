var app = angular.module('nbaRoutes');

app.controller('teamCtrl', function($scope, $routeParams, teamService, teamData){
	if($routeParams.team === 'utahjazz'){
		$scope.teamData = teamService.team
	}
});