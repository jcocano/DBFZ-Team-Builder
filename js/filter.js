$('select').change(function () {
    var current = this.value;

    if (current == 'all') {
        $('#selector').find('li.all').show();
    } else {

        $('#selector').find('li').hide();
        $('#selector').find('li.all.' + current).show();
    }

    return false;
});