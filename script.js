document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger-menu');
    const navMenu = document.querySelector('.nav-menu');

    // ハンバーガーメニューの開閉処理
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        // アイコンの切り替え (オプション)
        const icon = hamburger.querySelector('i');
        if (navMenu.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times'); // Xアイコンに
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars'); // ハンバーガーアイコンに
        }
    });

    // メニュー項目をクリックしたときにメニューを閉じる
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                // アイコンを元に戻す
                const icon = hamburger.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    });

    // スムーズスクロール (CSSで scroll-behavior: smooth; を設定している場合は不要ですが、互換性向上のために残します)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});