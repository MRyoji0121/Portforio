// ------------------------------------------------
// 1. スクロール時にヘッダーを表示/非表示にする機能
// ------------------------------------------------

const header = document.querySelector('header');
let lastScrollY = 0; // 最後にスクロールした位置を記憶

window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;

    // 100px以上スクロールしている場合のみ動作
    if (currentScrollY > 100) { 
        if (currentScrollY > lastScrollY) {
            // 下にスクロールしている（隠す）
            header.classList.add('header-hidden'); 
        } else {
            // 上にスクロールしている（表示する）
            header.classList.remove('header-hidden'); 
        }
    } else {
        // 最上部に戻った場合は常に表示
        header.classList.remove('header-hidden');
    }

    lastScrollY = currentScrollY;
});


// ------------------------------------------------
// 2. ハンバーガーメニューの開閉機能
// ------------------------------------------------

const hamburger = document.querySelector('.hamburger-menu');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    // アイコンの状態とメニューの表示を切り替える
    hamburger.classList.toggle('is-active');
    navLinks.classList.toggle('is-open');

    // メニュー表示中はメインコンテンツのスクロールを無効にする
    if (navLinks.classList.contains('is-open')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }
});

// リンクをクリックしたらメニューを閉じる
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        // メニューが閉じるときにクラスを削除
        hamburger.classList.remove('is-active');
        navLinks.classList.remove('is-open');
        document.body.style.overflow = 'auto';
    });
});