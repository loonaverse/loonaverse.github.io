$(document).ready(
    function(){
        const url = "https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=1&playlistId=PLn2nfuATkZsQzaTPcar9B0vPVO2a59hf5&fields=items(snippet(publishedAt%2CresourceId%2FvideoId%2Ctitle))&key=AIzaSyADw-SqvIFmdXzhrSGv67fzBDRx-dNT0us"

        var xmlhttp = new XMLHttpRequest();

        xmlhttp.onreadystatechange = function() {
            if(this.status == 403) {
                $('#latestLTV').append(`<p>We are having some trouble reaching YouTube. Please try again later.</p>`)
            } else
            if(this.readyState == 4 && this.status == 200) {
                var myObj = JSON.parse(this.responseText)
                let videoId = myObj.items[0].snippet.resourceId.videoId;
                let srcFrame = `<iframe width="968" height="544" src="https://www.youtube.com/embed/${videoId}" style="margin-top: 1cm" frameborder="0"></iframe>`
                
                //console.log(body)
                $('#latestLTV').append(srcFrame)
            }
        };
        xmlhttp.open("GET", url, true);
        xmlhttp.send();
    }
)
