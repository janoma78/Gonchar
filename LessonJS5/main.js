;(function ($) {
    // $(document.ready(function () {
    $(function () {

        console.log(window);
        console.log(document);
        console.log(document.getElementById('logo')); //Ванильный JS
        console.log(document.getElementsByClassName('section-1')); //Ванильный JS
        console.log(document.getElementsByTagName('nav')); //Ванильный JS
        console.log(document.querySelector('header nav ul li')); //Ванильный JS
        console.log(document.querySelectorAll('header nav ul li')); //Ванильный JS

        console.log($('header nav ul li'));
        console.log($('#logo')[0]);
        $('#logo').text('New Logo');
        $('.list-item-4').html('<span>Text in span</span>');
        console.log($('#logo').text());
        $('.list-item-10')
            .append($('.list-item-6').html())
            .prepend('123')
            .css({
                fontSize: 'Italic',
                textTransform: 'uppercase'
            })
            .addClass('my-class')
            .removeClass('item');
        console.log($('#logo').hasClass('logo'));
        console.log($('.list-item-10').attr('class'));
        $('#logo').attr('href', '#')

        $('.section-1 h1')
            .removeAttr('data-my-attr')
            .data('my-attr2', '3');

        console.log($('.section-1 h1').data('my-attr2'));


        $('.list-item-5')
            .css('font-size', '20px')
            .find('a') //Мы находимся на .list-item-5 a
            .css('color', 'red')
            .end() //возврат к первоначальному селектору .list-item-5
            .addClass('after-end')
            .prev('li') //нахождение предудущего соседа .list-item-4
            .css('text-transform', 'uppercase')
            .closest('ul') //перешли к родителю
            .css({
                paddingLeft: '300px',
                marginLeft: '50px'
            });

        console.log($('nav ul li:eq(3)')); //второй эллемент
        console.log($('nav ul li').eq(3)); //второй эллемент
        console.log($('nav ul li:gt(2)')); //больше 2 (после второго)
        console.log($('nav ul li:lt(2)')); //меньше 2 (перед вторым)

        console.log($('form input[type=checkbox]').is('checked'));
        console.log($('form input[type=checkbox]').is(':required'));
        console.log($('#logo').length); //проверка существование эллемента на странице


        var $p = $('<p />');
        console.log($p);
        $p.text('Created paragraph').css('color', 'red');
        $('form').after($p);
        $('form').before($p.clone());


        var playList = [{
            author: "led zeppelin",
            song: "stairway to heaven",
            duration: "2:03"
        },
            {
                author: "queen",
                song: "bohemian rhapsody",
                duration: "2:30"
            },
            {
                author: "lynyrd skynyrd",
                song: "free bird",
                duration: "1:56"
            },
            {
                author: "deep purple",
                song: "smoke on the water",
                duration: "3:03"
            },
            {
                author: "jimi hendrix",
                song: "all along the watchtower",
                duration: "2:53"
            },
            {
                author: "AC/DC",
                song: "back in black",
                duration: "2:43"
            },
            {
                author: "queen",
                song: "we will rock you",
                duration: "2:13"
            },
            {
                author: "metallica",
                song: "enter sandman",
                duration: "3:03"
            }
        ];

        for (var i = 0; i < playList.length; i++) {
            var song = $('<div class="song" />');
            song
                .html('<span class="duration">' + playList[i].duration + '</span> ')
                .append('<span class="author">' + playList[i].author + '</span>')
                .append('<h3 class="song">' + playList[i].song + '</h3><hr>')
                // $('#playlist').append(song); // тот же метод, что и appendTo
                .appendTo($('#playlist'));
        }


        $('#calc input[type=button]').on('click', function (event) {

            event.preventDefault();
            var num1 = +$('#num1').val(),
                num2 = +$('#num2').val(),
                result;

            if ($(this).is('#plus')) {
                result = num1 + num2;
            } else if ($(this).is('#minus')) {
                result = num1 - num2;
            } else if ($(this).is('#multiply')) {
                result = num1 * num2;
            } else if ($(this).is('#division')) {
                result = num1 / num2;
            } else if ($(this).is('#reset')) {
                $('#calc')[0]
                $('#calc').reset().find('div').remove();

            }

            $('#calc').append('<div>' + num1 + ' ' + $(this).val() + ' ' + num2 + ' = ' + result + '</div>');


        });

        $('h1').on('click', function () {
            // $(this).next('p').hide()
            if ($(this).next('p').is('visible')) {
                $(this).next('p').hide();
            } else {
                $(this).next('p').show();
            }
        });

        $('h2').on('click', function () {
            $(this).next('p').toggle(300);
            $('img').appendTo( $(this).next('p'));
            $(this).next('p').append($('img').clone())
        });

    });
})(jQuery);