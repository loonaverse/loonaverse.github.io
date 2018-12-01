var request = new XMLHttpRequest();
request.open('GET', 'https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&pageToken=CJADEAA&playlistId=PLn2nfuATkZsQzaTPcar9B0vPVO2a59hf5&fields=items(contentDetails%2FvideoId%2Csnippet(position%2CresourceId(channelId%2CplaylistId%2CvideoId)%2Ctitle))%2CnextPageToken%2CprevPageToken&key=AIzaSyADw-SqvIFmdXzhrSGv67fzBDRx-dNT0us', true)
request.onload = function() {
    var data = JSON.parse(this.response);
    
    })();