;(function ($) {
    $(function () {
        $('.click-me').click(function () {
            console.log(1);
            $(this).next('div').append('<div class="new-text">new text</div>');
        });
        $('.click-me').on('click', function () {
            console.log(2);
            console.log($(this)[0]);
            $(this).next('div').append('<div>new text 2</div>');
        });
        $('.click-me').on('click', function () {
            console.log(3);
            $('.google').trigger('click');
            // $('.google').click(); // сокращённая запись

        });
        $('.google').on('click', function () {
            console.log(4);
            // window.location.href = 'http://google.com';
            $(this).css('color', 'green');
        });
        $('body').on('click', '.new-text', function () { // добавляем слушатель события клик на элемент, который мы добавили с помощью js (после загрузки DOM дерева)
            $(this).css('font-size', '24px');
        });


        $('.click-me').on('mousedown', function () {
            $(this).next('div').css('color', 'red');
        });
        $('.click-me').on('mouseup', function () {
            $(this).next('div').css('color', 'black');
        });
        $('.click-me-2').on('dblclick', function () {
            $(this).next('div').css('color', 'blue');
        });
        $('.click-me-2').on('contextmenu', function (e) {
            e.preventDefault();
            $(this).next('div').css('color', 'black');
        });

        $('.link').on('click', function (esdsdfsdf) {
            esdsdfsdf.preventDefault();
            esdsdfsdf.stopPropagation();
        });


        // $('section').on('mouseover', function () {
        //     console.log('mouseover навели курсор на элемент:', $(this).attr('class'));
        // });
        // $('section').on('mouseout', function () {
        //     console.log('mouseout убрали курсор с элемента:', $(this).attr('class'));
        // });
        // $('section').on('mouseenter', function () {
        //     console.log('mouseenter навели курсор на элемент:', $(this).attr('class'));
        // });
        // $('section').on('mouseleave', function () {
        //     console.log('mouseleave убрали курсор с элемента:', $(this).attr('class'));
        // });
        // $('section').hover(
        //     function () {
        //         console.log('hover навели курсор на элемент:', $(this).attr('class'));
        //     },
        //     function () {
        //         console.log('hover убрали курсор с элемента:', $(this).attr('class'));
        //     }
        // );
        // $('p').on('mousemove', function (e) {
        //     console.log('координата по X', e.pageX, e.clientX);
        //     console.log('координата по Y', e.pageY, e.clientY);
        // });

        var zoom = 1;

        $('#wheel-test').on('wheel', function (e) {
            console.log(e.originalEvent.deltaY);
            e.preventDefault()
            zoom = zoom + e.originalEvent.deltaY / 1000;
            $(this).css('transform', 'scale(' + zoom + ')')

        });

        // события окна браузера
        // var arrowUp = $ ('<div id="arrow-up" />'); 1 sposob
        var arrowUp = $('<div />');
        arrowUp.attr({
            id: 'arrow-up',
            style: 'position: fixed; right:10px'
        })

            .css({
                bottom: '10px',
                display: 'none',
                background: 'red',
                cursor: 'pointer'

            })
            .text('Arrow Up');
        $('body').append(arrowUp);
        var offset = $('section div').position().top;

        function arrowShow() {


            if ($(window).scrollTop() >= offset) {
                $('#arrow-up').show(200);
            } else {
                $('#arrow-up').hide(200);
            }

        }

        arrowShow()
        $(window).on('scroll', function () {
            console.log($(window).scrollTop());
            if ($(window).scrollTop() >= offset) {
                $('#arrow-up').show(200);
            } else {
                $('#arrow-up').hide(200);
            }
        });
        $
        $(window).on('resize', function () {
            console.log($(window).width());
            console.log($(window).outerWidth());
            console.log($(window).height());

        });

        //события элементов форм
        $('form input[type=text]').on('focus', function () {
            console.log($(this).attr('id'));

        });

        $('form input[type=text]').on('blur', function () {
            console.log('убрали фокус с элемента id', $(this).attr('id'));

        });

        $('form input, form select').on('change', function (e) {

            var $this = $(this),
                label = $this.next('label');
            if ($this.is('#isDeveloper')) {
                if ($this.is(':checked')) {
                    label.show()
                } else {
                    label.hide()
                }
            } else if ($this.is['type=text']) {
                console.log($this.val());
            }
            console.log('change event', $this.attr('id'));
        });
        $('form').on('submit', function (e) {
            e.preventDefault();
            console.log('Yes!!');

        });

        $('input[type=text]').on('input', function () {
            console.log($(this).val());

        });

        //клавиратурные события

        $('#comment').on('keydown', function () {
            console.log(1);

        });

        $('#comment').on('keydup', function () {
            console.log(2);
        });

        $('#comment').on('keypress', function () {
            console.log(3);
        });
    });
})(jQuery);