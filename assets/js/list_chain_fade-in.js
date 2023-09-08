// 3つの特徴のコンテンツをスクロールしたら実行

window.addEventListener('scroll', () => {
     // li要素のリストを取得
     const cards = document.querySelectorAll('.feature-list .card');
     const windowHeight = window.innerHeight;
     for(let i = 0; i < cards.length; i++) {
        let cardPosition = cards[i].getBoundingClientRect().top;
        // カードが画面の下端から80px上に到達したらフェードインさせる
        if(cardPosition - windowHeight + 80 <= 0) {
            cards[i].classList.add('list_chain_fade-in')
        };
    };
});
  

// 選べる３つのプランのコンテンツをスクロールしたら実行

// 写真のフェードイン
window.addEventListener('scroll', () => {
    const plancards = document.querySelectorAll('.plan-card_fadein.plan-card_fade-in-up');
    const windowHeight = window.innerHeight;
    for(let i = 0; i < plancards.length; i++) {
        let cardPosition = plancards[i].getBoundingClientRect().top;
        // カードが画面の下端から80px上に到達したらフェードインさせる
        if(cardPosition - windowHeight + 80 <= 0) {
            plancards[i].classList.add('plan-card_scroll-in')
        };
    };
});

// original_plan_photoとluxury_plan_photoのfade-in fade-in-rightで右から左にフェードインする処理
window.addEventListener('scroll', () => {
    const plan_photo0103 = document.querySelectorAll('.plan_photofade-in01');
    const windowHeight = window.innerHeight;
    for(let i = 0; i < plan_photo0103.length; i++) {
        let photoPosition = plan_photo0103[i].getBoundingClientRect().top;
        // 写真が画面の下端から80px上に到達したらフェードインさせる
        if(photoPosition - windowHeight + 80 <= 0) {
            plan_photo0103[i].classList.add('plan_photo-scroll-in')
        };
    };
});

// finger_plan_photoの左から右にフェードインする処理
window.addEventListener('scroll', () => {
    const plan_photo02 =document.querySelector('.plan_photo_fade-in02');
    const windowHeight = window.innerHeight;
    let photoPosition = plan_photo02.getBoundingClientRect().top;
    if(photoPosition - windowHeight + 80 <= 0) {
        plan_photo02.classList.add('plan_photo-scroll-in02');
    };
});
