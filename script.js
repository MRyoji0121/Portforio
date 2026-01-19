// スクロールでヘッダーを隠す
let lastScrollY = window.scrollY;
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
    if (window.scrollY > lastScrollY && window.scrollY > 100) {
        header.classList.add('header-hidden');
    } else {
        header.classList.remove('header-hidden');
    }
    lastScrollY = window.scrollY;
});

// ハンバーガーメニュー開閉
const hamburger = document.querySelector('.hamburger-menu');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('is-open');
    // メニューが開いているときは三本線をXに変えるなどの演出が必要ならここに追加
});

// モーダル機能
document.querySelectorAll('.open-modal').forEach(button => {
    button.onclick = () => {
        const id = `modal-${button.dataset.workId}`;
        document.getElementById(id).style.display = 'block';
        document.body.style.overflow = 'hidden'; // スクロール禁止
    };
});

document.querySelectorAll('.close-button').forEach(button => {
    button.onclick = () => {
        button.closest('.modal').style.display = 'none';
        document.body.style.overflow = 'auto'; // スクロール許可
    };
});

// モーダルの外側をクリックしたら閉じる
window.onclick = (event) => {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
};

// ナビリンクをクリックしたらメニューを閉じる
document.querySelectorAll('.nav-links a').forEach(link => {
    link.onclick = () => {
        navLinks.classList.remove('is-open');
        document.body.style.overflow = 'auto';
    };
});