$(document).ready(
    function() {
        // console.log('works');

    // $('#id').click(() => {
    //     console.log("Works")
    //     $('.menu').css('display', 'grid');
    //     $('.preContainer').css('display', 'none');
    //     $('.eventContainer').css('display', 'none');
    //     // $('.preContainer').css('display', 'none');
    // });

    $('#preDebut').click(() => {
        $('.menu').css('display', 'none');
        $('.preContainer').css('display', 'block');
    });

    $('#events').click(() => {
        $('.menu').css('display', 'none');
        $('.eventContainer').css('display', 'block');
    });
    
})();