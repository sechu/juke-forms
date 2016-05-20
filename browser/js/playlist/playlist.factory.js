'use strict';

juke.factory('PlaylistFactory', function ($http, SongFactory) {

  var PlaylistFactory = {}

  PlaylistFactory.create = function(playlist) {
  	var playlist = {
  		name: playlist
  	};
    return $http.post('/api/playlists', playlist)
    .then(function(response) {
      return response.data;
    });
  };

  return PlaylistFactory;

});


// {
//   name: name,
//   addAndReturnSong (instance methods, takes songID)
// }