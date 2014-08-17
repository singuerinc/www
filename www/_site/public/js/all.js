(function (app) {

    var loadImg = function (url, callback) {

        var image = new Image();
        image.onload = (function () {
            callback(image);
        }).bind(this);
        image.src = url;
    };

    var postIdx = 0;

    var preload = function(posts, completeCallback){
        var post = posts[postIdx++];
        if(typeof(post) !== 'undefined'){
            loadImg(post.image, (function(imgEl){
                post.img = imgEl;
                preload(posts, completeCallback);
            }).bind(this));
        } else {
            completeCallback(posts);
        }
    };

    preload(app.posts, (function (posts) {

        var ul = document.querySelector('.content ul');
        var list = document.querySelectorAll('.content ul li');

        for (var k = 0; k < list.length; k++) {

            var lEl, post, image;

            lEl = list[k];
            post = posts[k];

            image = posts[k].img;
            image.alt = post.title;
            image.class = 'animated';

            lEl.children[0].appendChild(image);

            if (k < 4) {
                lEl.classList.add('animated');

                setTimeout((function (li) {
                    li.classList.add('fadeInUp');
                }).bind(this, list[k]), (200 * k) + 500);
            }
        }

        var h3 = document.querySelector('.content h3');
        h3.classList.add('animated');
        h3.classList.add('fadeInDown');

        document.querySelector('.loading').classList.add('hide');
        ul.classList.remove('hide');

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

    }).bind(this));

})(app);
