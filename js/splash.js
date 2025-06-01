document.addEventListener('DOMContentLoaded', function () {
    const splash = document.getElementById('splash');
    const splashVideo = document.getElementById('splashVideo');
    const wrapper = document.getElementById('Wrapper');

    // 遷移処理を関数化（共通化）
    const transitionToMain = () => {
        splash.classList.add('fade-out');
        wrapper.classList.add('show');
    };

    // 動画再生終了時に遷移
    splashVideo.addEventListener('ended', transitionToMain);

    // 8秒後に再生が終わっていなければ強制的に遷移
    setTimeout(() => {
        if (!splash.classList.contains('fade-out')) {
            transitionToMain();
        }
    }, 7000);
});
