$(document).ready(function() {
    console.log('Ready to go!');
    var $fpht = $('#fpht');
    var $fph = $('#fph');
    var $masteryGoal = $('#mastery-goal');
    var $masteryStart = $('#mastery-start');
    var $famePerHour = $('#fame-per-hour');
    var $useLearningPoints = $('#useLearningPoints');
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
            $('.pop-up').removeClass('hidden');
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

    $('#calculateCombatFame').click(function() {
        if($masteryStart.val() !== '' && $masteryGoal.val() !== '' && $famePerHour.val() !== '') {
            var result = 0;
            for(i = parseInt($masteryStart.val()) + 1; i <= $masteryGoal.val();) {
                result += combatFameNumbers['l' + i];
                i++;
            }
            if ($useLearningPoints.is(':checked')) {
                result = result * 0.3;
            }
            $('.cf-result').text(((result / $famePerHour.val()).toFixed(0)) + 'h');
            $('.pop-up').removeClass('hidden');
            $('.dimmer').removeClass('hidden');
            $masteryGoal.val('');
            $masteryStart.val('');
            $famePerHour.val('');
            $useLearningPoints.prop('checked', false);
        } else {
            $masteryStart.val('');
            $masteryGoal.val('');
            $famePerHour.val('');
            $useLearningPoints.prop('checked', false);
            $('#calculateCombatFame').popover('show');
            setTimeout(function() {
                $('#calculateCombatFame').popover('hide');
            }, 1000);
            return false;
        }
    });
    $('#close-pop-up').click(function() {
        $('.pop-up').addClass('hidden');
        $('.dimmer').addClass('hidden');
    });
    $('#close-cf-pop-up').click(function() {
        $('.pop-up').addClass('hidden');
        $('.dimmer').addClass('hidden');
    })
});