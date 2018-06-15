;(function($) {
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

    $('.time').each(function(i,elem) {
        elem.append(playList[i] ['duration'])
    });

    $('.style').each(function(i,elem) {
        elem.append(playList[i] ['author']);
    });

    $('.name').each(function(i,elem) {
        elem.append(playList[i] ['song']);
        });

    $('.time')
        .css ({
            color: '#7A7593',
            fontSize: '14px'

        });

    $('.style')
        .css ({
            color: '#7A7593',
            fontSize: '14px',
            textTransform: 'capitalize'
        });
    $('.name')
        .css ({
            fontSize: '18px',
            fontWieght:'700'
        });


}) (jQuery);