(function (w, d, c) {
    var ad = {"type":"inimage-framefullscreen","src":{"type":"mt","href":["index.html","index2.html"]},"closeButton":{"right":true,"margin":"0","top":0,"size":1,"color":"#000","background":"rgba(255, 255, 255, .5)","full":{"margin":"0","top":0,"size":1,"color":"#000","background":"rgba(255, 255, 255, .5)"}},"click":true,"counter":{"color":"#fff","background":"#E803A3"},"addHeight":0.4};

    w.ad_573eec40e4ef4f2089531dd5cbf629f8 = function (o) {
        w['_mt_stack'] = w['_mt_stack'] || [];
		w['_mt_stack'].push({mt: o, ad: ad, lib: {css: 'https://mediatoday.ru/storage/banners/lib.css'}});

		w[c] = function () {
            return w['_mt_stack'].pop();
        };

        var s = d.createElement('script');
        var f = function () {
            d.body.appendChild(s);
        };
        s.type = 'text/javascript';
        s.async = true;
        s.src = 'https://mediatoday.ru/storage/banners/lib.js';
        if (w.opera === '[object Opera]') {
            d.addEventListener('DOMContentLoaded', f, false);
        } else {
            f();
        }
    }
})(window, document, '_mt_callback');