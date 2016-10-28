$(function () {
    var buttOn = $('div.play');
    buttOn.on('click', function () {
        $('.whell1').addClass('animate');
        $('.whell2').addClass('animate');
        $('.show p').addClass('move');
        buttOn.addClass('moveit');
        console.log('on')
    });
    var stopBtn = $('div.stop');
    stopBtn.on('click', function () {
        $('.whell1').removeClass('animate');
        $('.whell1').removeClass('animefast');
        $('.whell1').removeClass('animefastback');
        $('.whell2').removeClass('animate');
        $('.whell2').removeClass('animefast');
        $('.whell2').removeClass('animefastback');
        $('p').removeClass('move');
        console.log('stop')
    });
    var forrBtn = $('div.forward');
    forrBtn.on('click', function () {
        $('.whell1').addClass('animefast');
        $('.whell2').addClass('animefast');
        console.log('fastforw')
    });
    var rewBtn = $('div.rewind');
    rewBtn.on('click', function () {
        $('.whell1').addClass('animefastback');
        $('.whell2').addClass('animefastback');
        console.log('backforw')
    });
    var radiofm = $('div.radio');
    radiofm.on('click', function () {
        $('.antenna').addClass('rotate');
        $('.show1 p').addClass('move');
        console.log('piotr')
    });
    var music = new Audio('music/Pick.mp3');
    var playmusic = $('div.play');
    playmusic.on('click', function () {
        music.play();
    });
    var forward = new Audio('music/rewind.mp3');
    var playforward = $('div.forward');
    playforward.on('click', function () {
        forward.play();
    });
    var rewind = new Audio('music/rewind.mp3');
    var playrewind = $('div.rewind');
    playrewind.on('click', function () {
        rewind.play();
    });
    var stop = $('div.stop');
    stopBtn.on('click', function () {
        console.log('stop');
        music.pause();
    });
    var radio = new Audio('music/radio.mp3');
    var playradio = $('div.radio');
    playradio.on('click', function () {
        radio.play();
    });
    var stop = $('div.stop');
    stopBtn.on('click', function () {
        console.log('stop');
        radio.pause();
    });
    var b1 = $('div.b1');
    var player = $('div.player');
    b1.on('click', function () {
        player.hide(1200);
        history.show();
    });
    var b2 = $('div.b2');
    b2.on('click', function () {
        player.show();
    });
    var history = $('div.history');
    var fail = $('div.fail');
    var b5 = $('div.b5');
    var player = $('div.player');
    b5.on('click', function () {
        player.hide(1200);
        history.hide(1200);
        slider.hide(1200);
        fail.show();
    });
    var slider = $('div.slider');
    var b3 = $('div.b3');
    b3.on('click', function () {
        player.hide(1200);
        history.hide(1200);
        fail.hide(1200);
        slider.show();
    });
    function animateGallery() {
        var buttons = $('button');
        var allLi = $('li');
        var ul = $('ul');
        var index = 0;
        allLi.eq(0).clone().appendTo(ul);
        allLi.last().clone().prependTo(ul);
        ul.css('left', '-1000px');
        buttons.on('click', function () {
            if (($(this).attr('id')) == 'nextPicture') {
                if (index <= allLi.length) {
                    ul.animate({
                        left: '-=1000'
                    }, 500, function () {
                        if (index >= allLi.length - 1) {
                            index = 0;
                            ul.css('left', '-1000px');
                        } else {
                            index++;
                        }
                    });
                }
            } else {
                if (index >= 0) {
                    ul.animate({
                        left: '+=1000'
                    }, 500, function () {
                        if (index <= 0) {
                            index = allLi.length - 1;
                            ul.css('left', '-6000px');
                        } else {
                            index--;
                        }
                    });
                }
            }
        })
    }
    animateGallery();
});
