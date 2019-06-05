var promise1 = new Promise(
    function() {
        console.log("Container loaded!")
        for(i=123; i<=142; i++) {
            let api = `epFiles/ep${i}.json`;
            var xmlhttp = new XMLHttpRequest();
            // let container = document.getElementById("container");


            xmlhttp.onreadystatechange = function() {
                if(this.readyState == 4 && this.status == 200) {
                    var myObj = JSON.parse(this.responseText);

                    let body = `<div class="content" id="ep${myObj.id}">   
                            <div class="youtube" data-embed="${myObj.videoId}"><div class="play-button"></div></div>
                            <div class="summary">
                                <b><u>Episode:</u> ${myObj.title}</b>
                                <br><b><u>Date:</u></b> ${myObj.date}
                                <br><u>Era:</u> Kim Lip Solo
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
    }
);

promise1.then( function() {
    console.log("JS loaded!");
    var youtube = document.querySelectorAll( ".youtube" );
    
    for (var i = 0; i < youtube.length; i++) {
        
        var source = "https://img.youtube.com/vi/"+ youtube[i].dataset.embed +"/sddefault.jpg";
        
        var image = new Image();
                image.src = source;
                image.addEventListener( "load", function() {
                    youtube[ i ].appendChild( image );
                }( i ) );
        
                youtube[i].addEventListener( "click", function() {

                    var iframe = document.createElement( "iframe" );

                            iframe.setAttribute( "frameborder", "0" );
                            iframe.setAttribute( "allowfullscreen", "" );
                            iframe.setAttribute( "src", "https://www.youtube.com/embed/"+ this.dataset.embed +"?rel=0&showinfo=0&autoplay=1" );

                            this.innerHTML = "";
                            this.appendChild( iframe );
                } );    
    };
    
} )();