$(document).ready(
    function() {

        let api = './source.json';
        var xmlhttp = new XMLHttpRequest();

        xmlhttp.onreadystatechange = function() {
            if(this.readyState == 4 && this.status == 200) {
                var myObj = JSON.parse(this.responseText);
                let count = Object.keys(myObj).length;
                
                for(i=1; i<=count; i++) {
                    let body = `<div class="gfySrc">
                                    <video>
                                        <source src="https://giant.gfycat.com/${myObj[i].link}.webm" type="video/webm">
                                    </video>
                                </div>`
                    $('#container').append(body);
                    
                }

            }
        }

        xmlhttp.open("GET", api, true);
        xmlhttp.send();
    }
)