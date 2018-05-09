window.onload = function () {

    (function () {
        let header = document.querySelector('header');

        var start = Date.now();

        var timer = setInterval(function () {
            var timePassed = Date.now() - start;
            if (timePassed > 10000) {
                clearInterval(timer);
                window.addEventListener('resize', handleResize);
                return;
            }

            draw(timePassed / 100);
        }, 40);

        function draw(timePassed) {
            var h = parseInt(getComputedStyle(header).height);
            var w = parseInt(getComputedStyle(header).width);
            header.style.backgroundSize = (timePassed + w) + 'px' + ' ' + (timePassed + h) + 'px';
        };

        //Resize background image
        function handleResize() {
            var h = parseInt(getComputedStyle(header).height);
            var w = parseInt(getComputedStyle(header).width);

            var bkGrWidth = parseInt(getComputedStyle(header).backgroundSize.split(' ')[0]);
            var bkGrHeight = parseInt(getComputedStyle(header).backgroundSize.split(' ')[1]);

            if (bkGrWidth != w || bkGrHeight != h)
                header.style.backgroundSize = w + 'px' + ' ' + h + 'px';
        };

    })();

    //Scroll top on cleackmain menu

    $('.menu li').click(function (e) {
        window.scrollTo(0,0);
    });


};