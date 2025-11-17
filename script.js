// スクロール時にヘッダーを表示/非表示にする機能

const header = document.querySelector('header');
let lastScrollY = 0; // 最後にスクロールした位置を記憶する変数

// スクロールイベントを監視
window.addEventListener('scroll', () => {
    // 現在のスクロール位置を取得
    const currentScrollY = window.scrollY;

    // ヘッダーの高さを取得（非表示時の移動量に使う）
    // const headerHeight = header.offsetHeight;

    if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // 1. 下にスクロールしている（コンテンツを読んでいる）
        //    かつ、ページの最上部（100px以内）ではない場合
        header.classList.add('header-hidden'); // ヘッダーを非表示にする
    } else {
        // 2. 上にスクロールしている（ヘッダーを見たい）
        //    または、ページの最上部に戻った場合
        header.classList.remove('header-hidden'); // ヘッダーを表示する
    }

    // 現在の位置を次のスクロールイベントのために記憶
    lastScrollY = currentScrollY;
});
// ------------------------------------------------
// ハンバーガーメニュー機能の追加
// ------------------------------------------------
const hamburger = document.querySelector('.hamburger-menu');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    // 1. ハンバーガーアイコンの状態を切り替える
    hamburger.classList.toggle('is-active');
    
    // 2. ナビゲーションリストの表示/非表示を切り替える
    navLinks.classList.toggle('is-open');

    // 3. メニューを開いているときは、スクロールを無効にする（オプション）
    if (navLinks.classList.contains('is-open')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }
});

// リンクをクリックしたらメニューを閉じる
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            hamburger.classList.remove('is-active');
            navLinks.classList.remove('is-open');
            document.body.style.overflow = 'auto';
        }
    });
});