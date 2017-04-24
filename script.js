$(document).ready(function() {
    console.log('Ready to go!');
    var $fpht = $('#fpht');
    var $fph = $('#fph');
    $fph.keyup(function() {
        this.value = this.value.replace(/[^0-9\.]/g,'');
    });
    $fpht.keyup(function() {
        this.value = this.value.replace(/[^0-9\.]/g,'');
    });
    $('#calculateFpH').click(function() {
        if ($fph.val() !== '' && $fpht.val() !== '') {
            $('.fph-result').text(($fph.val() / $fpht.val()) * 60);
            $('.fph-fox-calculator').text('That equals to killing ' + (Math.ceil((($fph.val() / $fpht.val()) * 60) / 18)) + ' foxes per hour!');
            $('.fph-pop-up').removeClass('hidden');
            $('.dimmer').removeClass('hidden');
            $fph.val('');
            $fpht.val('');
        } else {
            $fph.val('');
            $fpht.val('');
            $('#calculateFpH').popover('show');
            setTimeout(function() {
                $('#calculateFpH').popover('hide');
            }, 1000);
            return false;
        }
    });
    $('#close-fph-pop-up').click(function() {
        $('.fph-pop-up').addClass('hidden');
        $('.dimmer').addClass('hidden');
    })
});