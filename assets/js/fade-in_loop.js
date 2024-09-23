// ES5バージョンのFadeinsクラス
var Fadeins = function(fadeinElement) {
    // コンストラクター
    // 初期化を行う
    this.fadein = fadeinElement;
    this.fadeins = Array.prototype.slice.call(this.fadein.querySelectorAll('.fadein'));
    this.windowHeight = window.innerHeight;
    this.position = Math.floor(window.innerHeight * 0.75);
    this.currentfadeIndex = 0;
};

Fadeins.prototype.handleScroll = function() {
    for (var i = this.currentfadeIndex; i < this.fadeins.length; i++) {
        var offsetTop = this.fadeins[i].getBoundingClientRect().top;
        if (offsetTop < this.position) {
            this.fadeins[i].classList.add('scroll-in');
            this.currentfadeIndex = i + 1; // 現在のフェードイン要素のインデックスを更新
        }
    }
};

Fadeins.prototype.start = function() {
    var _this = this;
    window.addEventListener('scroll', function() {
        _this.handleScroll();
    });
};

// フェードインの処理

var fadeins = new Fadeins(document);
fadeins.start();

// 無限ループスライドショーの処理、ここから

window.addEventListener("DOMContentLoaded", function() {
    var infiniteSlider = new Swiper(".infinite-slider", {
        loop: true,
        loopedSlides: 3,
        slidesPerView: "auto",
        speed: 8000,
        autoplay: {
            delay: 0,
            disableOnInteraction: false,
        },
    });
});

// 無限ループスライドショーの処理、ここまで

