
// ハンバーガーメニューの処理、ここから

function toggleNav() {
const body = document.body;
const hamburger = document.getElementById('js-hamburger');

hamburger.addEventListener('click', function () {
body.classList.toggle('nav-open');
});
}

toggleNav();

// スムーススクロールの処理、ここから

const smoothscroll = () => {
    // 'a[href^="#"]' セレクタに一致するすべてのリンク要素を取得
    const smooth = document.querySelectorAll('a[href^="#"]').forEach(link => {
       // 各リンク要素にクリックイベントリスナーを追加
      link.addEventListener('click', e => {
        // デフォルトのクリックイベントを無効化（ページ遷移を防ぐ）
        e.preventDefault();

        // クリックしたリンクの href 属性に対応する要素を取得
        const target = document.querySelector(link.hash);
        // スクロールの調整量を設定
        const adjust = -160;
        // スクロール先の位置を計算
        const offsetTop = window.pageYOffset + target.getBoundingClientRect().top + adjust;
        
        // スムーズなスクロールを実行
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
  
        // ナビゲーションメニューが開かれている場合の処理
        if (document.body.classList.contains('nav-open')) {
          // スクロールアニメーションを実行
          const scrollAnimation = () => {
            if (Math.abs(window.pageYOffset - offsetTop) > 1) {
              // フレームごとにアニメーションを更新
              window.requestAnimationFrame(scrollAnimation);
            } else {
              // スクロールが完了したら、ナビゲーションメニューを閉じる
              document.body.classList.remove('nav-open');
            }
          };
          // アニメーションを開始
          window.requestAnimationFrame(scrollAnimation);
        }
      });
    });
  };
  
  // smoothscroll 関数を実行して初期化
  smoothscroll();

// スムーススクロールの処理、ここまで
