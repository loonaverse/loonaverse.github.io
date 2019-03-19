const vwVivid = "https://www.googleapis.com/youtube/v3/videos?part=snippet%2C+statistics&id=-FCYE87P5L0%2C&fields=items(snippet%2Ftitle%2Cstatistics(commentCount%2CdislikeCount%2ClikeCount%2CviewCount))&key=AIzaSyADw-SqvIFmdXzhrSGv67fzBDRx-dNT0us"

var xmlhttp = new XMLHttpRequest();
    JSON;

xmlhttp.onreadystatechange = function() {
    if(xmlhttp.readyState === 4 && xmlhttp.status === 200) {
        json = JSON.parse(xmlhttp.responseText);
        document.getElementsByClassName(views).innerHTML = json.statistics.viewCount;
    }
}

xmlhttp.open('GET', vwVivid, true);
xmlhttp.send();

console.log("yeet!");