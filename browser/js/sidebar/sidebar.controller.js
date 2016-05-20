'use strict';

juke.controller('SidebarCtrl', function ($scope, PlaylistFactory) {

	// $scope.playlists = allPlaylists ; 

	PlaylistFactory.fetchAll()
	.then(function(playlists) {
		$scope.playlists = playlists;
	})
      

});

