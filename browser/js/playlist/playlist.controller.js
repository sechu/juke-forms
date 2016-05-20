'use strict';


juke.controller('PlaylistCtrl', function ($scope, PlaylistFactory) {

  $scope.create = function() {
    PlaylistFactory.create($scope.playlistName)
    .then(function() {
      $scope.playlistName = null;
    })
 
  }

});