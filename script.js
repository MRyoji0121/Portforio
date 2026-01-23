document.addEventListener('DOMContentLoaded', () => {
    /* ----------------------------------
       ハンバーガーメニューの処理
    ---------------------------------- */
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-menu a');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        mobileMenu.classList.toggle('active');
    });

    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            mobileMenu.classList.remove('active');
        });
    });

    /* ----------------------------------
       モーダルウィンドウの処理
    ---------------------------------- */
    const detailBtns = document.querySelectorAll('.detail-btn');
    const closeBtns = document.querySelectorAll('.close-modal');
    const modals = document.querySelectorAll('.modal');

    // 「詳細を見る」ボタンをクリックした時
    detailBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault(); // リンク動作を防ぐ
            const targetId = btn.getAttribute('data-target');
            const targetModal = document.getElementById(targetId);
            if (targetModal) {
                targetModal.classList.add('active');
                document.body.style.overflow = 'hidden'; // 背景のスクロールを止める
            }
        });
    });

    // 「×」ボタンをクリックした時
    closeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            closeAllModals();
        });
    });

    // モーダルの黒背景をクリックした時にも閉じる
    modals.forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeAllModals();
            }
        });
    });

    // モーダルを閉じる共通関数
    function closeAllModals() {
        modals.forEach(modal => {
            modal.classList.remove('active');
        });
        document.body.style.overflow = 'auto'; // 背景のスクロールを再開
    }
});