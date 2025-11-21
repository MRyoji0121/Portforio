document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger-menu');
    const navMenu = document.querySelector('.nav-menu');

    // --- ハンバーガーメニューの開閉処理 ---
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
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
                const icon = hamburger.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    });

    // スムーズスクロール
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // --- モーダルウィンドウの開閉処理 ---

    // 「詳細を見る」ボタン（モーダルを開く）
    document.querySelectorAll('.open-modal').forEach(button => {
        button.addEventListener('click', (e) => {
            // data-work-id 属性からモーダルIDを取得
            const workId = e.currentTarget.getAttribute('data-work-id');
            const modal = document.getElementById(`modal-${workId}`);
            if (modal) {
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden'; // 背景のスクロールを無効
            }
        });
    });

    // 閉じるボタン
    document.querySelectorAll('.close-button').forEach(button => {
        button.addEventListener('click', (e) => {
            const modal = e.currentTarget.closest('.modal');
            modal.style.display = 'none';
            document.body.style.overflow = 'auto'; // 背景のスクロールを有効
        });
    });

    // モーダル外のクリックで閉じる (オーバーレイをクリック)
    window.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal')) {
            e.target.style.display = 'none';
            document.body.style.overflow = 'auto'; // 背景のスクロールを有効
        }
    });
    
    // --- 制作物1のYouTubeサムネイル処理 (おまけ) ---
    // 制作物1のYouTube動画URLを抽出してサムネイルとして表示する
    const work1Item = document.querySelector('#works .work-item:first-child');
    const youtubeH = work1Item ? work1Item.querySelector('h') : null;

    if (youtubeH) {
        const youtubeUrl = youtubeH.textContent.trim().replace(/"/g, '');
        // YouTubeの動画IDを取得する関数
        const getYoutubeId = (url) => {
            const regex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|\w\/\w|.+\?v=)|youtu\.be\/)([^&?]*)/;
            const match = url.match(regex);
            return (match && match[1].length === 11) ? match[1] : null;
        };
        
        const videoId = getYoutubeId(youtubeUrl);

        if (videoId) {
            // サムネイル画像URLを生成
            const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
            
            // img要素を作成
            const imgElement = document.createElement('img');
            imgElement.src = thumbnailUrl;
            imgElement.alt = "Minecraft*高専RPGの動画サムネイル";

            // 画像を収めるためのコンテナを作成し、YouTubeリンクのh要素の直前に挿入
            const containerDiv = document.createElement('div');
            containerDiv.classList.add('media-container');
            containerDiv.appendChild(imgElement);

            youtubeH.parentNode.insertBefore(containerDiv, youtubeH);
        }
    }
});