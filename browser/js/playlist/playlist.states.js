'use strict';

juke.config(function ($stateProvider) {

  $stateProvider.state('newPlaylist', {
    url: '/playlists/new',
    templateUrl: '/js/playlist/templates/playlist.html',
    controller: 'PlaylistCtrl',
    // resolve: {
    //   allArtists: function (ArtistFactory) {
    //     return ArtistFactory.fetchAll();
    //   }
    // }
  });

});
