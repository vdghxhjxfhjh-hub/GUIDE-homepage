(() => {
  'use strict';
  // 로그인 성공 시점부터 누적 경과 시간(밀리초). 탭을 옮겨도 시간이 계속 흐릅니다.
  const timing = {attempt:60000, owner:180000, noticed:300000, revealDelay:6500, portrait:4500};
  let interval, started=0, level=0, warningAt=0, revealedAt=0, finish;
  let notices, screen;
  const fallback = 'assets/subjects/silhouette.svg';
  function announce(title, message) {
    const item=document.createElement('article');
    item.className='admin-alert';
    const heading=document.createElement('strong'),text=document.createElement('p');
    heading.textContent=title;text.textContent=message;
    item.append(heading,text);notices.append(item);
    if(notices.showPopover && !notices.matches(':popover-open')) notices.showPopover();
  }
  function stop() {
    clearInterval(interval);interval=null;
    document.removeEventListener('visibilitychange',tick);
    notices?.remove();screen?.remove();
    notices=null;screen=null;level=0;started=0;
    document.body.classList.remove('admin-disconnected');
  }
  function reveal() {
    finish(); // 문서 창을 닫고 보관소 동작을 중지합니다.
    screen=document.createElement('dialog');
    screen.className='admin-takeover';
    screen.setAttribute('aria-label','관리자 연결');
    const image=new Image();
    const media=window.GUIDE_MEDIA.administrator;
    image.alt=media.alt;image.className='admin-appearance';
    image.referrerPolicy='no-referrer';
    image.style.objectFit=media.fit==='cover'?'cover':'contain';
    image.onerror=()=>{if(image.getAttribute('src')!==fallback)image.src=fallback;};
    image.src=media.url||fallback;
    screen.append(image);document.body.append(screen);
    screen.addEventListener('cancel',e=>e.preventDefault());
    screen.showModal();
    notices?.hidePopover?.();
  }
  function block() {
    clearInterval(interval);interval=null;
    document.removeEventListener('visibilitychange',tick);
    screen.classList.add('is-blocked');
    screen.querySelector('img')?.setAttribute('aria-hidden','true');
    screen.setAttribute('aria-label','접속 차단');
    const message=document.createElement('div');
    message.className='admin-block-message';
    const label=document.createElement('small'),title=document.createElement('h1'),sub=document.createElement('p');
    label.textContent='CONNECTION TERMINATED';
    title.textContent='접속이 차단되었습니다';
    sub.textContent='현재 세션의 열람 권한이 회수되었습니다.';
    message.append(label,title,sub);screen.append(message);
    document.body.classList.add('admin-disconnected');
    document.title='GUIDE — 접속 차단';
  }
  function tick() {
    if(!started)return;
    const now=Date.now(),elapsed=now-started;
    if(level<1 && elapsed>=timing.attempt){level=1;announce('외부 인증 요청 감지','다른 단말에서 동일 계정으로 접속을 시도하고 있습니다.');}
    if(level<2 && elapsed>=timing.owner){level=2;announce('계정 소유자 접속','AD-000 소유자 세션이 연결되었습니다. 현재 열람 세션은 유지됩니다.');}
    if(level<3 && elapsed>=timing.noticed){level=3;warningAt=now;announce('AD-000 · 수신 메시지','어머, 벌레 한 명이 들어와있네?.');}
    // 비활성 탭에서는 본모습 연출을 소진하지 않고 돌아왔을 때 이어갑니다.
    if(level===3 && now-warningAt>=timing.revealDelay && !document.hidden){level=4;revealedAt=now;reveal();}
    if(level===4 && now-revealedAt>=timing.portrait){level=5;block();}
  }
  function start(onBlock) {
    stop();finish=onBlock;started=Date.now();
    // 5분 뒤 등장 전에 미리 불러와 GIF/이미지의 첫 표시 지연을 줄입니다.
    const preload=new Image();preload.referrerPolicy='no-referrer';
    preload.src=window.GUIDE_MEDIA.administrator.url||fallback;
    notices=document.createElement('aside');
    notices.className='admin-alert-stack';notices.setAttribute('popover','manual');
    notices.setAttribute('role','status');notices.setAttribute('aria-live','polite');
    document.body.append(notices);
    interval=setInterval(tick,250);
    document.addEventListener('visibilitychange',tick);
  }
  window.GUIDE_ADMIN_EVENT={start,stop};
})();
