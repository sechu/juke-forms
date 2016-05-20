'use strict';

juke.factory('PlaylistFactory', function ($http, SongFactory) {


  var cachedPlaylists = [];

  var PlaylistFactory = {}

  PlaylistFactory.create = function(playlist) {
  	var playlist = {
  		name: playlist
  	};
    return $http.post('/api/playlists', playlist)
    .then(function(response) {
      var playlist = response.data;
      cachedPlaylists.push(playlist);
      return playlist;
    });
  };

  PlaylistFactory.fetchAll = function() {

    return $http.get('api/playlists')
    .then(function(response) {
      angular.copy(response.data, cachedPlaylists);
      return cachedPlaylists;
    })

  }

  PlaylistFactory.fetchById = function(id) {

    return $http.get('api/playlists/'+ id)
    .then(function(response) {
      return response.data;
    })

  }

  PlaylistFactory.postSong = function(song, playlistId) {
    return $http.post('/api/playlists/' + playlistId + '/songs', {
      song : song
    })
    .then(function(song) {
      return song ; 
    })
  }

  return PlaylistFactory;

});

