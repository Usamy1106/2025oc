document.addEventListener('DOMContentLoaded', function () {
    const splash = document.getElementById('splash');
    const splashImage = document.getElementById('splashImage');
    const wrapper = document.getElementById('Wrapper');

    const transitionToMain = () => {
        splash.classList.add('fade-out');
        wrapper.style.display = 'block';
        wrapper.classList.add('show');
    };

    // 強制的に3秒後に遷移（APNGにはendedイベントがない）
    setTimeout(() => {
        transitionToMain();
    }, 5000);
});
