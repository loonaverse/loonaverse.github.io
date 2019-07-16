$(document).ready(
    function() {
        console.log('works');
    $('#preDebut').click(() => {
        $('.menu').css('display', 'none');
        $('.preContainer').css('display', 'block');
    });
})();