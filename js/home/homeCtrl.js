var app = angular.module('nbaRoutes');

app.controller('homeCtrl', function($scope, homeService, allData){
	$scope.jazzData = allData['utahjazz'];
	$scope.lakersData = allData['losangeleslakers'];
	$scope.heatData = allData['miamiheat'];

	$scope.jazzData.homeTeam = 'Utah Jazz';
	$scope.lakersData.homeTeam = 'Los Angeles Lakers';
	$scope.heatData.homeTeam = 'Miami Heat';

	console.log($scope.jazzData);
	// console.log($scope.lakersData)

});