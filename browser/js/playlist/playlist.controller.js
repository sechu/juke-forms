'use strict';


juke.controller('PlaylistCtrl', function ($scope, PlaylistFactory, $state, SongFactory, singlePlaylist) {

	$scope.playlist = singlePlaylist;

  $scope.create = function() {
    PlaylistFactory.create($scope.playlistName)
    .then(function(playlist) {
      $scope.playlistName = null;
      $state.go('singlePlaylist', {playlistId : playlist.id});
    })
 
  }

	SongFactory.fetchAll()
 	.then(function(songlist) {
  	$scope.getSongs = songlist;
 	})

  $scope.addToPlaylist = function(song, playlist) {

  	PlaylistFactory.postSong(song, playlist.id)
  	.then(function() {
  		playlist.songs.push(SongFactory.convert(song));
  		$scope.songName = null;
  	})
  
  }

});