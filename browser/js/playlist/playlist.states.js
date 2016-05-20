'use strict';

juke.config(function ($stateProvider) {

  $stateProvider.state('newPlaylist', {
    url: '/playlists/new',
    templateUrl: '/js/playlist/templates/playlist.html',
    controller: 'PlaylistCtrl',
    resolve: {
      allPlaylists : function (PlaylistFactory) {
        return PlaylistFactory.fetchAll();
      }
    }
  });

  $stateProvider.state('singlePlaylist', {
    url : '/playlist/:playlistId',
    templateUrl : '/js/playlist/templates/singlePlaylist.html',
    controller : 'PlaylistCtrl',
      resolve: {
      singlePlaylist : function (PlaylistFactory, $stateParams) {

        return PlaylistFactory.fetchById($stateParams.playlistId);
          }
        }
    })

})
