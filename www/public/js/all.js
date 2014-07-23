!function(t,e){"function"==typeof define&&define.amd?define(function(){return e(t)}):"object"==typeof exports?module.exports=e:t.echo=e(t)}(this,function(t){"use strict";var e,n,o,r,c,i={},l=function(){},a=function(t,e){var n=t.getBoundingClientRect();return n.right>=e.l&&n.bottom>=e.t&&n.left<=e.r&&n.top<=e.b},d=function(){(r||!n)&&(clearTimeout(n),n=setTimeout(function(){i.render(),n=null},o))};return i.init=function(n){n=n||{};var a=n.offset||0,u=n.offsetVertical||a,f=n.offsetHorizontal||a,s=function(t,e){return parseInt(t||e,10)};e={t:s(n.offsetTop,u),b:s(n.offsetBottom,u),l:s(n.offsetLeft,f),r:s(n.offsetRight,f)},o=s(n.throttle,250),r=n.debounce!==!1,c=!!n.unload,l=n.callback||l,i.render(),document.addEventListener?(t.addEventListener("scroll",d,!1),t.addEventListener("load",d,!1)):(t.attachEvent("onscroll",d),t.attachEvent("onload",d))},i.render=function(){for(var n,o,r=document.querySelectorAll("img[data-echo]"),d=r.length,u={l:0-e.l,t:0-e.t,b:(t.innerHeight||document.documentElement.clientHeight)+e.b,r:(t.innerWidth||document.documentElement.clientWidth)+e.r},f=0;d>f;f++)o=r[f],a(o,u)?(c&&o.setAttribute("data-echo-placeholder",o.src),o.src=o.getAttribute("data-echo"),c||o.removeAttribute("data-echo"),l(o,"load")):c&&(n=o.getAttribute("data-echo-placeholder"))&&(o.src=n,o.removeAttribute("data-echo-placeholder"),l(o,"unload"));d||i.detach()},i.detach=function(){document.removeEventListener?t.removeEventListener("scroll",d):t.detachEvent("onscroll",d),clearTimeout(n)},i});

(function () {
    var list, h3;
    list = document.querySelectorAll('.content ul li');

    for (var k = 0; k < Math.min(4, list.length); k++) {
        list[k].classList.add('animated');
        window.setTimeout((function (idx) {
            var li = list[idx];
            li.classList.add('fadeInUp');
        }).bind(this, k), (200 * k) + 500);
    }

    h3 = document.querySelector('.content h3');
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

    echo.init({
        offset: 500,
        throttle: 50,
        callback: function(element, op) {
            if(op === 'load') {
                element.classList.add('loaded');
            } else {
                element.classList.remove('loaded');
            }
        }
    });
})();