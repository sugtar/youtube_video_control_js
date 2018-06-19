$(function() {
    var player;
    onYouTubeIframeAPIReady = function() {
        player = new YT.Player('player', {
            height: '360',
            width: '640',
            videoId: 'jpLgD_DHEy0'
        });
    };
});
