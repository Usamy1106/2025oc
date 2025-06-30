const triggers = document.querySelectorAll('.zoomIn-trigger');

// 関数：要素が画面内に入ったかどうか
const isElementInViewport = (el) => {
  const rect = el.getBoundingClientRect();
  return (
    rect.top < window.innerHeight && rect.bottom > 0
  );
};

// 関数：スクロール時に各トリガー要素をチェックし、自分自身にactionを追加
const handleScroll = () => {
  triggers.forEach(trigger => {
    if (isElementInViewport(trigger)) {
      trigger.classList.add('action');
    }
  });
};
// 初回読み込み時とスクロール時に実行
window.addEventListener('scroll', handleScroll);
window.addEventListener('load', handleScroll);

// --- ハンバーガーメニュー ---
document.querySelector('.g-nav-openbtn').addEventListener('click', function () {
  this.classList.toggle('active');
  document.getElementById('g-nav').classList.toggle('panelactive');
});

document.querySelectorAll('#g-nav a').forEach(function (navLink) {
  navLink.addEventListener('click', function () {
    document.querySelector('.g-nav-openbtn').classList.remove('active');
    document.getElementById('g-nav').classList.remove('panelactive');
  });
});
// スクロール時の動作を関数でまとめる
function PageTopAnime() {
  const scroll = window.pageYOffset || document.documentElement.scrollTop;
  const pageTop = document.getElementById('page-top');

  if (scroll >= 200) {
    pageTop.classList.remove('DownMove');
    pageTop.classList.add('UpMove');
  } else {
    if (pageTop.classList.contains('UpMove')) {
      pageTop.classList.remove('UpMove');
      pageTop.classList.add('DownMove');
    }
  }
}

// スクロール時に呼び出す
window.addEventListener('scroll', PageTopAnime);
// ページ読み込み時に呼び出す
window.addEventListener('load', PageTopAnime);

// #page-top の a タグをクリックしたときの動作
document.addEventListener('DOMContentLoaded', function () {
  const pageTopLink = document.querySelector('#page-top a');
  if (pageTopLink) {
    pageTopLink.addEventListener('click', function (e) {
      e.preventDefault(); // リンクの無効化
      window.scrollTo({
        top: 0,
        behavior: 'smooth' // なめらかにスクロール
      });
    });
  }
});
