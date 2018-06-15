;(function() {
    $(function () {
        $('.block').on('click.first', function () {

            $('#accordion').next('div').append('<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, itaque.</p>');
            console.log(1);
        });

        $('.block').on('click.second', function () {

            $('#accordion').next('div').hide('p');
            console.log(2);
        });

        $('.block1').on('click.first', function () {
            $('.block').next('div').append('<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, itaque.</p>');
            console.log(3);

        });
        $('.block1').on('click.second', function  () {
            $('.block').next('div').hide('p');
            console.log(4);

        });

        $('.block2').click( function () {
            $('.block1').next('div').append('<p>it is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using</p>');
            console.log(2);

        });

        $('.block3').click( function () {
            $('.block2').next('div').append('<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, itaque.</p>');
            console.log(2);

        });

        $('.block4').click( function () {
            $('.block3').next('div').append('<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, itaque.</p>');
            console.log(2);

        });


    });

}) (jQuery);