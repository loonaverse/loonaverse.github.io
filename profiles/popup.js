$(document).ready( 
    function() {
    
    $(document).on('click', '.profileCard' ,(event) => {
        // popupBox.style.display = 'block';
        $('.popup').css('display', 'block');
        //console.log('Show')
        $('.container').css('position', 'fixed').css('overflow', 'hidden');
        const xmlhttp = new XMLHttpRequest();
        let api = `./data/${$(event.target).parent().attr('id')}.json`
        console.log($(event.target).parent().attr('id'));

        xmlhttp.onreadystatechange = function() {
            if(this.readyState == 4 && this.status == 200) {
                var myObj = JSON.parse(this.responseText);

                $('#pop-block').css('background-color', myObj.color.hex);
                $('#pop-content').css('color', myObj.displayText)

                //Music Video Table
                if(myObj.mv) {
                    var table_mv = `
                    <h3><u>Music Videos:</u></h3>
                        <table class="tg">
                            <thead>
                                <tr>
                                    <th class="tg-wreh">Year</th>
                                    <th class="tg-wreh">Title</th>
                                    <th class="tg-wreh">Album</th>
                                    <th class="tg-wreh">Role</th>
                                    <th class="tg-wreh">Link</th>
                                </tr>
                            </thead>
                            <tbody>`

                    for(i=0; i<myObj.mv.length; i++) {

                        table_mv+='<tr>';
                        
                        for(j=0; j<myObj.mv[i].record.length-1; j++) {
                            table_mv +=`<td class="tg-cpu2">${myObj.mv[i].record[j]}</td>`;
                        }

                        table_mv+=`<td class="tg-cpu2"><a href="https://youtu.be/${myObj.mv[i].record[myObj.mv[i].record.length-1]}" target="_blank">Link</a></td>`;
                        table_mv+='</tr>';

                    }
                    table_mv+='</tbody></table>';
                    //$('#pop-content').append(table_mv);
                }
                //MV END

                //Side-Project Label
                if(!myObj.wd && !myObj.tv) {
                    side_projects = "";
                } else {
                    side_projects = "<h2><u>Side Projects:</u></h2>"
                }

                //Web Drama Table
                if(myObj.wd) {
                    var table_wd = `
                    <h3><u>Web Drama</u></h3>
                        <table class="tg">
                            <thead>
                                <tr>
                                    <th class="tg-wreh">Year</th>
                                    <th class="tg-wreh">Title</th>
                                    <th class="tg-wreh">Role</th>
                                    <th class="tg-wreh">Link</th>
                                </tr>
                            </thead>
                            <tbody>`

                    for(i=0; i<myObj.wd.length; i++) {

                        table_wd+='<tr>';
                        
                        for(j=0; j<myObj.wd[i].record.length-1; j++) {
                            table_wd +=`<td class="tg-cpu2">${myObj.wd[i].record[j]}</td>`;
                        }

                        table_wd+=`<td class="tg-cpu2"><a href="${myObj.wd[i].record[myObj.wd[i].record.length-1]}" target="_blank">Link</a></td>`;
                        table_wd+='</tr>';

                    }
                    table_wd+='</tbody></table>';
                } else { table_wd = "" }
                //WD END

                //TV Appearances Table
                if(myObj.tv) {
                    var table_tv = `
                    <h3><u>TV Appearances</u></h3>
                        <table class="tg">
                            <thead>
                                <tr>
                                    <th class="tg-wreh">Year</th>
                                    <th class="tg-wreh">Title</th>
                                    <th class="tg-wreh">Channel</th>
                                    <th class="tg-wreh">Role</th>
                                    <th class="tg-wreh">Link</th>
                                </tr>
                            </thead>
                            <tbody>`

                    for(i=0; i<myObj.tv.length; i++) {

                        table_tv+='<tr>';
                        
                        for(j=0; j<myObj.tv[i].record.length-1; j++) {
                            table_tv +=`<td class="tg-cpu2">${myObj.tv[i].record[j]}</td>`;
                        }

                        table_tv+=`<td class="tg-cpu2"><a href="${myObj.tv[i].record[myObj.tv[i].record.length-1]}" target="_blank">Link</a></td>`;
                        table_tv+='</tr>';

                    }
                    table_tv+='</tbody></table>';
                    //$('#pop-content').append(table_tv);
                } else { table_tv = "" }
                //TVA END

                let prof_doc = `
                
                <h1><u>${myObj.name}</u></h1>
                - <u>Hashtags:</u> ${myObj.hashtags} 
                <br>- <u>Birthday:</u> ${myObj.bday}
                <br>- <u>Birthplace:</u> ${myObj.bplace}
                <br>- <u>Blood Group:</u> ${myObj.bloodGrp}
                
                <h2><u>LOOΠΔ</u></h2>
                
                - ${myObj.memNo} Member of LOOΠΔ.
                <br>- <u>Reveal Date:</u> ${myObj.reveal}
                <br>- <u>Debut Date:</u> ${myObj.debut}
                <br>- <u>Duration as Trainee:</u> ${myObj.traineeDuration}
                <br>- <u>Given Names:</u> ${myObj.given}
                <br>- <u>Animal:</u> ${myObj.animal}
                <br>- <u>Color:</u> ${myObj.color.name} - <u>Hex:</u> ${myObj.color.hex} - <u>RGB:</u> ${myObj.color.rgb}
                <br>- <u>Team Postion:</u> ${myObj.teamPostion}
                <br>- <u>Charming Point:</u> ${myObj.charmPoint}

                <h3><u>Message to Orbit:</u></h3>
                ${myObj.msgToOrbit}


                ${table_mv}

                ${side_projects}

                ${table_wd}

                ${table_tv}
                `

                $('#pop-content').html(prof_doc);

                //console.log("OWO! What's this! You found me!")
            }
        }
        xmlhttp.open("GET", api, true);
        xmlhttp.send();
    })

    $('.popup').click(() => {
        $('.popup').css('display', 'none');
        $('#pop-content').html("Loading...");
        $('#pop-block').css('background-color', 'white');
        $('#pop-content').css('color', 'black')
        $('.container').css('position', '').css('overflow', '');
        //console.log('Hide')
    })

});