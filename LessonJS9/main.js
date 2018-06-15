;(function($){
    $(function(){
        $(window).on('scroll', function () {
            var images = $('#parallax img'),
                parallaxHeight = $('#parallax').height(),
                multyScrollVal = $(window).scrollTop() / $(window).height() * parallaxHeight;
            // console.log($(window).scrollTop());
            // console.log(multyScrollVal);
            for (var i=0; i<images.length; i++) {
                // console.log($(images[i]));
                if (i != 3 && i != 4) {
                    if (!i) {
                        $(images[i]).css('top', -(multyScrollVal + i * 10) * 0.6);
                    } else {
                        $(images[i]).css('top', (multyScrollVal) * i * 5);
                    }
                }
            }
        });
        $('#parallax').on('mousemove', function (e) {
            var images = $('#parallax img');
            for (var i=0; i<images.length; i++) {
                if (i === 2 || i === 3) {
                    if (i % 2)
                        $(images[i]).css('left', e.offsetX / i / 10);
                    else
                        $(images[i]).css({
                            left: -(e.offsetX / i / 10),
                            transform: 'scale(' + (1 + e.offsetX / i / 1000) + ')'
                        });
                }
            }
        })
    });
})(jQuery);