class Fadeins {
    // コンストラクター
    constructor(fadeinElement) {
    // 初期化を行う
    this.fadein = fadeinElement;
    this.fadeins = Array.from(this.fadein.querySelectorAll('.fadein'));
    this.windowHeight = window.innerHeight;
    this.position = Math.floor(window.innerHeight * .75);
    this.currentfadeIndex = 0;
    }

    handleScroll() {
        for (let i = this.currentfadeIndex; i < this.fadeins.length; i++) {

        let offsetTop = this.fadeins[i].getBoundingClientRect().top;
        if (offsetTop < this.position) {
            this.fadeins[i].classList.add('scroll-in');
            this.currentfadeIndex = i + 1; // 現在のフェードイン要素のインデックスを更新
        };
      };
    };

    start() {
        window.addEventListener('scroll', this.handleScroll.bind(this));
    };
};

// フェードインのクラス構文の処理、ここまで

// フェードインの処理

const fadeins = new Fadeins(document);
fadeins.start();


// 無限ループスライドショーの処理、ここから

window.addEventListener("DOMContentLoaded", () => {
    const infiniteSlider = new Swiper(".infinite-slider", {
        loop: true,
        loopedSlides: 2,
        slidesPerView: "auto",
        speed: 8000,
        autoplay: {
            delay: 0,
            disableOnInteraction: false,
        },
    });
});

// 無限ループスライドショーの処理、ここまで
