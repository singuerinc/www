(function (app) {

        var ul = document.querySelector('.content ul');
        var list = document.querySelectorAll('.content ul li');

        var h3 = document.querySelector('.content h3');
        h3.classList.add('animated');
        h3.classList.add('fadeInDown');

        var aElm = document.querySelectorAll('.content ul li a');

        for (var j = 0; j < aElm.length; j++) {

            aElm[j].addEventListener('mouseover', (function (jIdx) {
                for (var i = 0; i < list.length; i++) {
                    if (i !== jIdx) {
                        var li = list[i];
                        li.classList.remove('fadeInUp');
                        li.classList.remove('fadeIn');
                        li.classList.remove('fadeIn50');
                        li.classList.add('fadeOut50');
                    }
                }
            }).bind(this, j));

            aElm[j].addEventListener('mouseout', (function (jIdx) {

                for (var i = 0; i < list.length; i++) {
                    if (i !== jIdx) {
                        var li = list[i];
                        li.classList.remove('fadeOut50');
                        li.classList.add('fadeIn50');
                    }
                }
            }).bind(this, j));
        }

    //}).bind(this));

})(app);
