$(document).ready(
    function() {

        for(i=265; i<=284; i++) {
            let api = `epFiles/ep${i}.json`;
            var xmlhttp = new XMLHttpRequest();
            let container = document.getElementById("container");


            xmlhttp.onreadystatechange = function() {
                if(this.readyState == 4 && this.status == 200) {
                    var myObj = JSON.parse(this.responseText);

                    let body = `<div class="content" id="ep${myObj.id}">   
                            <div class="youtube" data-embed="${myObj.videoId}"><div class="play-button"></div></div>
                            <div class="summary">
                                <b><u>Episode:</u> ${myObj.title}</b>
                                <br><b><u>Date:</u></b> ${myObj.date}
                                <br><u>Era:</u> Go Won Solo
                                <br><u>Members:</u> ${myObj.members}
                                <br><u>Blurred Girls:</u> ${myObj.blurred}
                                <br><u>Songs:</u> ${myObj.songs}
                                <br><u>Location:</u> ${myObj.location}
                                <br><u>Synopsis/Memes:</u> 
                                <br> ${myObj.summary}
                            </div>
                        </div>`
                    $('#container').append(body);

                        // container.innerHTML = body;
                }
            };

            xmlhttp.open("GET", api, true);
            xmlhttp.send();
        }

        setTimeout(function() {
            var script = document.createElement('script');
            script.src = "../../lazyload.js";
            document.getElementsByTagName('body')[0].appendChild(script);
        }, 100)
    }
);