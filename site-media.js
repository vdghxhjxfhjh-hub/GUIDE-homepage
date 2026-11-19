// 외부 이미지 편집 위치. 공유 페이지가 아닌 이미지 파일의 직접 HTTPS URL을 넣으세요.
// GIF / animated WebP / PNG / JPG 지원. GIF를 img로 표시하므로 애니메이션이 유지됩니다.
window.GUIDE_MEDIA = {
  hero: {url:'', fit:'contain', alt:'GUIDE 기관 대표 이미지'},
  // [관리자 본모습 이미지 교체 위치] 예: url:'https://your-domain.com/director.gif'
  administrator: {url:'https://pub-ea583730072d437db7db3801624b8b65.r2.dev/from-PixAI-2072673168771930887.gif', fit:'contain', alt:'관리자의 모습'}
};
(() => {
  const setting = window.GUIDE_MEDIA.hero;
  const box = document.querySelector('.visual');
  if (!box || !setting.url) return;
  const image = new Image();
  image.alt = setting.alt;
  image.referrerPolicy = 'no-referrer';
  image.className = 'institution-external-image';
  image.style.objectFit = setting.fit === 'cover' ? 'cover' : 'contain';
  image.onload = () => {
    box.classList.add('has-external-image');
    box.removeAttribute('aria-hidden');
    box.append(image);
  };
  image.src = setting.url;
})();
