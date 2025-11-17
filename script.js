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